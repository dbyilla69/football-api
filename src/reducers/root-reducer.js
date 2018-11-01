import { combineReducers } from 'redux';
import teamReducer from './teams-reducer';

export default combineReducers({
teams: teamReducer
});