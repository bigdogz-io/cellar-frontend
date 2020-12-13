import Axios from 'axios';

const instance = Axios.create({
  baseURL: '/api',
});

instance.setHeader = (key, value) => {
  instance.defaults.headers.common[key] = value;
};

export default instance;
