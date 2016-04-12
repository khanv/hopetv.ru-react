import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default function Html(props) {
    const { assets, component, store } = props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    return (
        <html lang="ru">
            <head>
                { head.base.toComponent() }
                { head.title.toComponent() }
                { head.meta.toComponent() }
                { head.link.toComponent() }
                { head.script.toComponent() }

                <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" type="image/png" href="/favicon.png"/>
                <link
                    rel="apple-touch-icon"
                    type="image/png"
                    href="/favicon-152.png"
                    sizes="152x152"
                />

                {/* styles (will be present only in production with webpack extract text plugin) */}
                { Object.keys(assets.styles).map((style, key) =>
                    <link
                        href={ assets.styles[style] }
                        key={ key }
                        media="screen, projection"
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                    />
                ) }
            </head>
            <body>
                <div id="content" dangerouslySetInnerHTML={ { __html: content } }/>
                <script
                    dangerouslySetInnerHTML={ { __html: `window.__data=${serialize(store.getState())};` } }
                    charSet="UTF-8"
                />
                <script src={ assets.javascript.main } charSet="UTF-8"/>
            </body>
        </html>
    );
}

Html.propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
};
