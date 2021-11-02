import axios from 'axios';

export default (): Promise<null> => new Promise((resolve, reject) => {
  axios.get('/api/auth/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('le_token')}`,
    },
  })
    .then(() => {
      resolve(null);
    })
    .catch(reject);
});
