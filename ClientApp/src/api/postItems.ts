import axios, { AxiosResponse } from 'axios';
import { Item } from './getItems';

export type NewItem = Omit<Item, 'id'>

export default (data: NewItem): Promise<Item> => new Promise((resolve, reject) => {
  axios.post('/api/inventory/items', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then((response: AxiosResponse<Item>) => {
      resolve(response.data);
    })
    .catch(reject);
});
