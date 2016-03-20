import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

let createStoreWithMiddleware = compose(
    applyMiddleware.apply(thunk)
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