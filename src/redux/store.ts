import { createStore } from 'redux'
import reducers from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './saga/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(RootSaga);


export default store