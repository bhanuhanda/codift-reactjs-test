import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers'; 
import sagas from './sagas'; 

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(sagas);

export default store;