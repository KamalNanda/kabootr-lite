import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"; 
import {statusReducer} from './Feeds/reducer'
import {userReducer} from './Users/reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  
const enhancer = composeEnhancers(applyMiddleware(
    thunk 
  ));

const rootReducer = combineReducers({ 
    status: statusReducer,
    user : userReducer
});
 

const store = createStore(
  rootReducer, 
  {},
  enhancer
);

export default store;