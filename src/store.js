import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk"

// const store = createStore(rootReducer,applyMiddleware(logger));
const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;
