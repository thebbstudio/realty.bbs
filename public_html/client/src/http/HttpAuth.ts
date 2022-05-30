import axios from 'axios';
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
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token !== null && userId !== null) {
      const response = await axios.get(`${BASE_URL}/api/checktoken`, {
        params: {
          token,
          userId,
        },
      });
      return response;
    }
    return null;
  }
}

export default HttpAuth;
