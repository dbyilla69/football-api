import { combineReducers } from 'redux';
import playerReducer from './player';
import teamReducer from './team';

export default combineReducers({
    players: playerReducer,
    teams: teamReducer
});