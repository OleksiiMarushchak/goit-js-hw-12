import axios from 'axios';

const API_KEY = '53402842-8b5ac7b96fa102848e26b89cd';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = (query) => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios
    .get(BASE_URL, { params })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
