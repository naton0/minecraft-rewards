import axios from 'axios';

export default (id: number): Promise<null> => new Promise((resolve, reject) => {
  axios.delete(`/api/inventory/items/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then(() => {
      resolve(null);
    })
    .catch(reject);
});
