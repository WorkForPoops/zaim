import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReduser } from 'redux-form';
import paymentReducer from './payment-reducer';

let rootReducer = combineReducers({
    form: formReduser,
    paymentPage: paymentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store