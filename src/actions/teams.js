import * as actionTypes from './actionTypes';

export const fetchTeamsStart = () => {
  return {
    type: actionTypes.FETCH_TEAMS_START
  };
};

export const fetchTeamsSuccess = teams => {
  return { type: actionTypes.FETCH_TEAMS_SUCCESS, teams: teams };
};
