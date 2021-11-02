import axios, { AxiosResponse } from 'axios';

export default (code: string): Promise<string> => new Promise((resolve, reject) => {
  axios.get(`/api/auth/callback?code=${code}`)
    .then((token: AxiosResponse<string>) => {
      resolve(token.data);
    })
    .catch(reject);
});
