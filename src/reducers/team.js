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
        orders: action.teams,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        default: return state;
    }
};

export default reducer;