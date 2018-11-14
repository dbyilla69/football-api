import * as actionTypes from './actionTypes';
import axios from '../axios-instances/axiosURL';

export const fetchPlayersSuccess = players => {
  return { type: actionTypes.FETCH_PLAYERS_SUCCESS, payload: players };
};

export const fetchPlayersFail = error => {
  return {
    type: actionTypes.FETCH_PLAYERS_FAIL,
    error: error
  };
};

export const fetchPlayersStart = () => {
  return { type: actionTypes.FETCH_PLAYERS_START };
};

export const fetchPlayers = () => async dispatch => {
  dispatch(fetchPlayersStart());
  try {
    const players = await axios.get('/players.json');

    dispatch(fetchPlayersSuccess(players));
  } catch (err) {
    dispatch(fetchPlayersFail(err));
  }
};

