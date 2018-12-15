import * as actionTypes from '../actions/actionTypes';


const initialState = {
    players: {}
};

const fetchTeamsStart = (state, action) => {
    return { ...state }
};
const fetchTeamsSuccess = (state, action) => {

    return { ...state, players: action.payload.data.players }
};


const fetchTeamsFail = (state, action) => {
    return { ...state }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_TEAMS_START:
        return fetchTeamsStart(state, action);
      case actionTypes.FETCH_TEAMS_SUCCESS:
        return fetchTeamsSuccess(state, action);
        case actionTypes.FETCH_TEAMS_FAIL:
        return fetchTeamsFail(state, action);
      default:
        return state;
    }
};

export default reducer;
