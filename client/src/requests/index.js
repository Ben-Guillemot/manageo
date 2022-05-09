import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:3004',
});
export default apiAxios;
