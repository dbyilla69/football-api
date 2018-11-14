import { combineReducers } from 'redux';
import playerReducer from './player';

export default combineReducers({
    players: playerReducer
});