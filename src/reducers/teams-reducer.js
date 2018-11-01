import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  teams: [],
  loading: false
};

const fetchTeamsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchTeamsSuccess = (state, action) => {
  return updateObject(state, {
    teams: action.teams,
    loading: false
  });
};

const fetchTeamsFail = (state, action) => {
  return updateObject(state, { loading: false });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TEAMS_START: return fetchTeamsStart(state, action);
    case actionTypes.FETCH_TEAMS_SUCCESS: return fetchTeamsSuccess(state, action);
    case actionTypes.FETCH_TEAMS_FAIL: return fetchTeamsFail(state, action);
      default: return state;
  }
};

export default reducer;
