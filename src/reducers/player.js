import * as actionTypes from '../actions/actionTypes';
//import { updateObject } from '../utility';

const initialState = {
  players: {}
};

const fetchPlayersStart = (state, action) => {
  // return updateObject(state, { loading: true });
  return { ...state }
};
//,  loading: true
const fetchPlayersSuccess = (state, action) => {
  // return updateObject(state, {
  //   players: action.payload.data.players.player
  // });
  return {...state, players: action.payload.data.players}
};

// ,
// loading: false
const fetchPlayersFail = (state, action) => {
  // return updateObject(state, { loading: false });
  return { ...state }
};
//, loading: false
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYERS_START:
      return fetchPlayersStart(state, action);
    case actionTypes.FETCH_PLAYERS_SUCCESS:
      return fetchPlayersSuccess(state, action);
    case actionTypes.FETCH_PLAYERS_FAIL:
      return fetchPlayersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
