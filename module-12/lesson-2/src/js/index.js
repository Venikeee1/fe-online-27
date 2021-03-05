import api from './api/apartments.js';
import authAPi from './api/auth.js';

// api.fetchApartments().then(console.log);
authAPi
  .login({
    email: 'Al@al.com',
    password: 'qwerty1',
  })
  .then(console.log);
