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

export function actionRequestAllUsers() {
  return {
    type: REQUEST_ALL_USERS,
  };
}

export function actionCreateUser() {
  return {
    type: CREATE_USER,
  };
}

export function actionUpdateUser() {
  return {
    type: UPDATE_USER,
  };
}

export function actionDeleteUser() {
  return {
    type: DELETE_USER,
  };
}

export function actionGetAllUsers(users) {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
}

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

export function actionSetUserInformations(key, value) {
  return {
    type: SET_USER_INFORMATIONS,
    payload: { key, value },
  };
}

export function actionResetUserInformations() {
  return {
    type: RESET_USER_INFORMATIONS,
  };
}
