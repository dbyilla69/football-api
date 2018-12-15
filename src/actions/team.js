import * as actionTypes from './actionTypes';
import axios from '../axios-instances/axiosURL';

export const fetchTeamsSuccess = teams => {
    return { type: actionTypes.FETCH_TEAMS_SUCCESS, payload: teams };
};

export const fetchTeamsFail = error => {
    return {
        type: actionTypes.FETCH_TEAMS_FAIL,
        error: error
    };
};

export const fetchTeamsStart = () => {
    return { type: actionTypes.FETCH_TEAMS_START };
};

export const fetchTeams = () => async dispatch => {
    dispatch(fetchTeamsStart());
    try {
        const teams = await axios.get('/players.json?team=hou');

        dispatch(fetchTeamsSuccess(teams));
    } catch (err) {
        dispatch(fetchTeamsFail(err));
    }
};