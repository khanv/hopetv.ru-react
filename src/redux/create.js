import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from './middleware/apiMiddleware';
import { syncHistory } from 'react-router-redux';

export default function createStore(history, data) {
    // Sync dispatched route actions to the history
    const reduxRouterMiddleware = syncHistory(history);

    const middleware = [apiMiddleware, reduxRouterMiddleware];

    let finalCreateStore;
    if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__ && window.devToolsExtension) {
        const { persistState } = require('redux-devtools');
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            window.devToolsExtension(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
        )(_createStore);
    } else {
        finalCreateStore = applyMiddleware(...middleware)(_createStore);
    }

    const reducer = require('./modules/reducer');
    const store = finalCreateStore(reducer, data);

    reduxRouterMiddleware.listenForReplays(store);

    if (__DEVELOPMENT__ && module.hot) {
        module.hot.accept('./modules/reducer', () => {
            store.replaceReducer(require('./modules/reducer'));
        });
    }

    return store;
}
