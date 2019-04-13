import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDom from 'react-dom';

import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import {
    rootSaga,
    getDataRequest,
 } from './actions';
import reduxSaga from 'redux-saga';
import reduxLogger from 'redux-logger';
import './css/style.css';

const sagaMiddleWare = reduxSaga();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare, reduxLogger),
);

sagaMiddleWare.run(rootSaga);

store.dispatch(getDataRequest());

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'),
);
