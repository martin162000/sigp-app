import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from '@reduxjs/toolkit';

// IMPORT REDUCERS
import reducers from './reducer/index'

// IMPORT REACT SAGA
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