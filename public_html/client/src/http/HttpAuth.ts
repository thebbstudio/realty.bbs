import axios, { AxiosError } from 'axios';
import BASE_URL from './config';

class HttpAuth {
  static async send(user: object) {
    const response = await axios.post(`${BASE_URL}/api/auth`, {
      params: {
        ...user,
      },
    });
    return response;
  }

  static async checkToken() {
    const response = await axios.get(`${BASE_URL}/api/checktoken`, {
      params: {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
      },
    }).catch((error: AxiosError) => {
      if (error.response?.status === 403) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.reload();
      }
    });
    return response;
  }
}

export default HttpAuth;
