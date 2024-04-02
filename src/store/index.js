import { createStore, combineReducers } from 'redux';
import {customerReducer} from './customerReducer'
import { cashReducer } from './cashReducer';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer)