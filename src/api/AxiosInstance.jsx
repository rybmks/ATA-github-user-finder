import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

class Api {
  constructor() {
    this.axiosInstance = instance;
  }

  async getUser(username) {
    return this.axiosInstance.get(`/users/${encodeURIComponent(username)}`);
  }
}

export default Api;
