import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:3004',
});

/**
 * function used to make a http request to get all users
 * @returns response with users in an array of object
 */
export async function getAllUsers() {
  try {
    const response = await apiAxios.get('/users');
    return response;
  } catch (err) {
    return err.response;
  }
}

/**
 * function used to make a http request to get one user
 * @param {string} id id of the user you want to get
 * @returns response with user in an object
 */
export async function getOneUsers(id) {
  try {
    const response = await apiAxios.get(`/users/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

/**
 * function used to make a http request to create an user
 * @param {object} userDatas user informations (firstname, lastname, email)
 * @returns response with new user in an object
 */
export async function createUser(userDatas) {
  try {
    const response = await apiAxios.post('/users', userDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

/**
 * function used to make a http request to update an user
 * @param {*} id id of the user you want to update
 * @param {*} userDatas user informations (firstname, lastname, email)
 * @returns response with updated user in an object
 */
export async function updateUser(id, userDatas) {
  try {
    const response = await apiAxios.patch(`/users/${id}`, userDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

/**
 * function used to make a http request to delete an user
 * @param {string} id id of the user you want to delete
 * @returns response with an empty object
 */
export async function deleteUser(id) {
  try {
    const response = await apiAxios.delete(`/users/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
