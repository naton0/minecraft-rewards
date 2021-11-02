import axios, { AxiosResponse } from 'axios';

export default (folienmarke: string, farbe: string, typ: string, standort: string): Promise<number> => new Promise((resolve, reject) => {
  axios.get(`/api/inventory/items/count?folienmarke=${folienmarke}&farbe=${farbe}&standort=${standort}&typ=${typ}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then((response: AxiosResponse<number>) => {
      resolve(response.data);
    })
    .catch(reject);
});
