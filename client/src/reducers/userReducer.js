/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  usersList: [],
  id: '',
  firstname: '',
  lastname: '',
  email: '',
};

/**
 * function used to call action as appropriate
 * @param {object} state redux state
 * @param {object} action redux actions
 * @returns a new state
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_USERS:
      return {
        ...state,
        usersList: action.payload,
      };

    case actions.GET_USER_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
      };

    case actions.SET_USER_INFORMATIONS:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case actions.RESET_USER_INFORMATIONS:
      return {
        ...state,
        id: initialState.id,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
        email: initialState.email,
      };

    default:
      return state;
  }
}

export default reducer;
