import axios from 'axios';

const API_KEY = '53402842-8b5ac7b96fa102848e26b89cd';
const BASE_URL = 'https://pixabay.com/api/';


export const getImagesByQuery = async (query, page = 1) => {
  try {
    const params = {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
