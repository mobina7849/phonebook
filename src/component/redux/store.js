import {configureStore} from '@reduxjs/toolkit';
import ContactSlice from './reducer/contact.slice';
 
//persist=localstorage
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit';
const persistconfig={
    key:"root",
    version:1,
    storage
}
const reducer=combineReducers({
    contacts:ContactSlice
})
const persistedReducer=persistReducer(persistconfig,reducer)
 export const store=configureStore({
    reducer:persistedReducer
    
})
