/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  createSuccess: false,
  updateSuccess: false,
  deleteSuccess: false,
  errorMessage: false,
};

/**
 * function used to call action as appropriate
 * @param {object} state redux state
 * @param {object} action redux actions
 * @returns a new state
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_MESSAGE:
      return {
        ...state,
        [action.payload.message]: action.payload.bool,
      };

    default:
      return state;
  }
}

export default reducer;
