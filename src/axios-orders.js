import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-6c575.firebaseio.com/'
});

export default instance;