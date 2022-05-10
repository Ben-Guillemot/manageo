// CRUD user
export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// get all users
export const GET_ALL_USERS = 'GET_ALL_USERS';

// get employee informations
export const GET_USER_INFORMATIONS = 'GET_USER_INFORMATIONS';

// create or update employee informations
export const SET_USER_INFORMATIONS = 'SET_USER_INFORMATIONS';

// reset employee informations
export const RESET_USER_INFORMATIONS = 'RESET_USER_INFORMATIONS';

/**
 * action called to make an http request to get all users
 * @returns action REQUEST_ALL_USERS
 */
export function actionRequestAllUsers() {
  return {
    type: REQUEST_ALL_USERS,
  };
}

/**
 * action called to create an user
 * @returns action CREATE_USER
 */
export function actionCreateUser() {
  return {
    type: CREATE_USER,
  };
}

/**
 * action called to update an user
 * @returns action UPDATE_USER
 */
export function actionUpdateUser() {
  return {
    type: UPDATE_USER,
  };
}

/**
 * action called to delete an user
 * @returns action DELETE_USER
 */
export function actionDeleteUser() {
  return {
    type: DELETE_USER,
  };
}

/**
 * action called to get all users in user state
 * @param {array} users array of all users
 * @returns action GET_ALL_USERS
 */
export function actionGetAllUsers(users) {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
}

/**
 * action called to get selected user informations in user state
 * @param {object} params object of user informations (id, firstname, lastname, email)
 * @returns action GET_USER_INFORMATIONS
 */
export function actionGetUserInformations({
  id, firstname, lastname, email,
}) {
  return {
    type: GET_USER_INFORMATIONS,
    payload: {
      id, firstname, lastname, email,
    },
  };
}

/**
 * action called to modify user informations in user state
 * @param {string} key user state key to modify
 * @param {string} value user state key new value
 * @returns action SET_USER_INFORMATIONS
 */
export function actionSetUserInformations(key, value) {
  return {
    type: SET_USER_INFORMATIONS,
    payload: { key, value },
  };
}

/**
 * action called to reset all user informations in user state
 * @returns action RESET_USER_INFORMATIONS
 */
export function actionResetUserInformations() {
  return {
    type: RESET_USER_INFORMATIONS,
  };
}
