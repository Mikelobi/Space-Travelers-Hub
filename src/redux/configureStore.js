import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import MissionsReducer from './missions/missions';
import rockets from './rockets/rockets';

const rootReducer = combineReducers({
  missions: MissionsReducer,
  rockets,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
