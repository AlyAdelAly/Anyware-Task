import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
