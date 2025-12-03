import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.getElementById('search-form');
const searchInput = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then((data) => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
      console.log(data);


      searchInput.value = '';
    })
    .catch((error) => {
      hideLoader();

      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again.',
        position: 'topRight',
      });

      console.error('Error fetching images:', error);
    });
});
