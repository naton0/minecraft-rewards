import axios, { AxiosResponse } from 'axios';
import { Field } from './getFields';

export default (id: number, name: string, deleted: boolean): Promise<Field> => new Promise((resolve, reject) => {
  axios.patch(`/api/settings/fields/${id}`, { name, deleted }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then((response: AxiosResponse<Field>) => {
      resolve(response.data);
    })
    .catch(reject);
});
