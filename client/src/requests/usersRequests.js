import apiAxios from './index';

export async function requestAllUsers() {
  try {
    const response = await apiAxios.get('/users');
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function requestOneUsers(id) {
  try {
    const response = await apiAxios.get(`/users/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
