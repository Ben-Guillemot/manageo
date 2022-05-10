import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:3004',
});

export async function getAllUsers() {
  try {
    const response = await apiAxios.get('/users');
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function getOneUsers(id) {
  try {
    const response = await apiAxios.get(`/users/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function createUser(userDatas) {
  try {
    const response = await apiAxios.post('/users', userDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function updateUser(id, userDatas) {
  try {
    const response = await apiAxios.patch(`/users/${id}`, userDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function deleteUser(id) {
  try {
    const response = await apiAxios.delete(`/users/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
