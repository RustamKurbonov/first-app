import { combineReducers, createStore } from 'redux';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import sitebarReducer from './sitebarReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    siteBarPage: sitebarReducer
});

let store = createStore(reducers);

export default store;