import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import DevTools from '../containers/DevTools.js';
import { persistState } from 'redux-devtools';

const createStoreWithMiddleware = compose(
    applyMiddleware.apply(thunk),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
)(createStore);


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducers, initialState);

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}