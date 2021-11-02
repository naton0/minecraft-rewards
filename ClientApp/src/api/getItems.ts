import axios, { AxiosResponse } from 'axios';

export interface Item {
    id: number,
    folienmarke: string,
    farbe: string,
    laufmeter: number,
    typ: string,
    standort: string
}

export const FolienTypList = ['UV', 'Sichtschutz', 'Carwrapping', 'Tönungsfolien', 'Farbfolien', 'Sonstige'];
export const StandortList = [
  {
    key: 'E',
    name: 'Eisenacher Straße',
  },
  {
    key: 'B',
    name: 'Brünner Straße',
  },
];

export default (folienmarke: string, farbe: string, typ: string, page: number, standort: string, orderBy: string): Promise<Array<Item>> => new Promise((resolve, reject) => {
  axios.get(`/api/inventory/items?folienmarke=${folienmarke}&farbe=${farbe}&typ=${typ}&standort=${standort}&page=${page}&orderBy=${orderBy}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then((response: AxiosResponse<Array<Item>>) => {
      resolve(response.data);
    })
    .catch(reject);
});
