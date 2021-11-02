import axios, { AxiosResponse } from 'axios';
import { Field } from './getFields';

export default (name: string): Promise<Field> => new Promise((resolve, reject) => {
  axios.post('/api/settings/fields', { name }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then((response: AxiosResponse<Field>) => {
      resolve(response.data);
    })
    .catch(reject);
});
