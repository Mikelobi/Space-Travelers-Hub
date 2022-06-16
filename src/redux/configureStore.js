import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import rockets from './rockets/rockets';

const rootReducer = combineReducers({
  rockets,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
