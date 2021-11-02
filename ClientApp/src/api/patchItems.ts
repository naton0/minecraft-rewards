import axios, { AxiosResponse } from 'axios';
import { Item } from './getItems';

export default (data: Item): Promise<Item> => new Promise((resolve, reject) => {
  axios.patch('/api/inventory/items', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then((response: AxiosResponse<Item>) => {
      resolve(response.data);
    })
    .catch(reject);
});
