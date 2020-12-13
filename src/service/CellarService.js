import api from '@/service/ApiService';

export default {
  get,
  post,
};

function get(ownerId) {
  return api
    .get(`/cellar/${ownerId}`)
    .then((response) => response.data);
}

function post(cellarItem) {
  return api.post(`/cellar/${cellarItem.ownerId}`, cellarItem)
    .then((response) => response.data);
}
