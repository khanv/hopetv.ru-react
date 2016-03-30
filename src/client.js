/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import getRoutes from './routes';

import { I18nextProvider } from 'react-i18next';
import i18n from 'helpers/i18n';

const history = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(history, window.__data);

/* eslint-disable react/jsx-no-bind, arrow-parens */
const component = (
    <Router
        render={ (props) => <ReduxAsyncConnect {...props} filter={ item => !item.deferred }/> }
        history={ history }
    >
        { getRoutes(store) }
    </Router>
);
/* eslint-enable react/jsx-no-bind, arrow-parens */

i18n.on('initialized', () => {
    ReactDOM.render(
        <Provider store={ store } key="provider">
            <I18nextProvider i18n={ i18n }>
                { component }
            </I18nextProvider>
        </Provider>,
        dest
    );
});

if (process.env.NODE_ENV !== 'production') {
    window.React = React; // enable debugger

    if (!dest || !dest.firstChild || !dest.firstChild.attributes
        || !dest.firstChild.attributes['data-react-checksum']) {
        console.error('Server-side React render was discarded. '
            + 'Make sure that your initial render does not contain any client-side code.');
    }
}