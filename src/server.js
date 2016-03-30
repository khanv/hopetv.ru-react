import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import path from 'path';
import createStore from './redux/create';
import Html from './helpers/Html';
import PrettyError from 'pretty-error';
import http from 'http';

import { match } from 'react-router';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import getRoutes from './routes';

import { I18nextProvider } from 'react-i18next';
import i18n from 'helpers/i18n';

const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);

app.use(Express.static(path.join(__dirname, '..', 'static')));

app.use((req, res) => {
    if (__DEVELOPMENT__) {
        // Do not cache webpack stats: the script file would change since
        // hot module replacement is enabled in the development env
        webpackIsomorphicTools.refresh();
    }
    const history = createHistory(req.originalUrl);

    const store = createStore(history);

    function hydrateOnClient() {
        /* eslint-disable prefer-template */
        res.send('<!doctype html>\n'
            + ReactDOM.renderToString(<Html assets={ webpackIsomorphicTools.assets() } store={ store }/>));
        /* eslint-enable prefer-template */
    }

    if (__DISABLE_SSR__) {
        hydrateOnClient();

        return;
    }

    match({ history, routes: getRoutes(store), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            console.error('ROUTER ERROR:', pretty.render(error));
            res.status(500);
            hydrateOnClient();
        } else if (renderProps) {
            loadOnServer({ ...renderProps, store }).then(() => {
                const component = (
                    <Provider store={ store } key="provider">
                        <I18nextProvider i18n={ i18n }>
                            <ReduxAsyncConnect { ...renderProps }/>
                        </I18nextProvider>
                    </Provider>
                );

                res.status(200);

                global.navigator = { userAgent: req.headers['user-agent'] };

                /* eslint-disable prefer-template */
                res.send('<!doctype html>\n'
                    + ReactDOM.renderToString(
                        <Html
                            assets={ webpackIsomorphicTools.assets() }
                            component={ component }
                            store={ store }
                        />
                    )
                );
                /* eslint-enable prefer-template */
            });
        } else {
            res.status(404).send('Not found');
        }
    });
});

if (config.port) {
    server.listen(config.port, (err) => {
        if (err) {
            console.error(err);
        }
        console.info('----\n==> ✅  %s is running', config.app.title);
        console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
    });
} else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
}
