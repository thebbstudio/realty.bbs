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
    console.log('я здесь');
    const response = await axios.get(`${BASE_URL}/api/checktoken`, {
      params: {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
      },
    });
    console.log('я тут');

    return response;
  }
}

export default HttpAuth;
