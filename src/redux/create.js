import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from './middleware/apiMiddleware';
import { routerMiddleware } from 'react-router-redux';
import { responsiveStoreEnhancer } from 'redux-responsive';

export default function createStore(history, data) {
    const reduxRouterMiddleware = routerMiddleware(history);
    const middleware = [apiMiddleware, reduxRouterMiddleware];

    let finalCreateStore;
    if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__ && window.devToolsExtension) {
        const { persistState } = require('redux-devtools');
        finalCreateStore = compose(
            responsiveStoreEnhancer,
            applyMiddleware(...middleware),
            window.devToolsExtension(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
        )(_createStore);
    } else {
        finalCreateStore = compose(
            responsiveStoreEnhancer,
            applyMiddleware(...middleware)
        )(_createStore);
    }

    const reducer = require('./modules/reducer');
    const store = finalCreateStore(reducer, data);

    if (__DEVELOPMENT__ && module.hot) {
        module.hot.accept('./modules/reducer', () => {
            store.replaceReducer(require('./modules/reducer'));
        });
    }

    return store;
}
