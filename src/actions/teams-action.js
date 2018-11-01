import * as actionTypes from './actionTypes';
import axios from '../axios-instances/axiosURL';

export const fetchTeams = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_TEAMS_START });
  try {
    const teams = await axios.get('/players.json');

    dispatch({
      type: actionTypes.FETCH_TEAMS_SUCCESS,
      payload: teams
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_TEAMS_FAIL,
      payload: err,
      error: true
    });
  }
};
