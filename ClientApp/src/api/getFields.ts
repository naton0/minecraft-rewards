import axios, { AxiosResponse } from 'axios';

export interface Field {
    id: number,
    name: string,
    deleted: boolean
}

export default (withDeleted = false): Promise<Array<Field>> => new Promise((resolve, reject) => {
  axios.get(`/api/${withDeleted ? 'settings' : 'inventory'}/fields`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then((response: AxiosResponse<Array<Field>>) => {
      resolve(response.data);
    })
    .catch(reject);
});
