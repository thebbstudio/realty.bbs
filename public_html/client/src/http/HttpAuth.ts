import axios from 'axios';
import BASE_URL from './config';

class HttpAuth {
  static async send(user: object) {
    const response = await axios.post(`${BASE_URL}/api`, {
      params: {
        ...user,
      },
    });
    return response;
  }
}

export default HttpAuth;
