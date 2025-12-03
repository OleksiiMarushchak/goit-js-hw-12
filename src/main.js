import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.getElementById('search-form');
const searchInput = form.querySelector('input[name="search-text"]');
const loadMoreBtn = document.getElementById('load-more');

let currentQuery = '';
let currentPage = 1;
const PER_PAGE = 15;

hideLoadMoreButton();

form.addEventListener('submit', async (e) => {
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

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    hideLoader();

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    if (currentPage * PER_PAGE < data.totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    searchInput.value = '';
    } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again.',
      position: 'topRight',
    });
  }
});

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    hideLoadMoreButton();
    showLoader();

    try {
      const data = await getImagesByQuery(currentQuery, currentPage);
      hideLoader();

      if (data.hits && data.hits.length > 0) {
        createGallery(data.hits);

        const gallery = document.getElementById('gallery');
        const firstCard = gallery.querySelector('.gallery-item');
        if (firstCard) {
          const { height: cardHeight } = firstCard.getBoundingClientRect();
          window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
        }
      }

      if (currentPage * PER_PAGE >= data.totalHits) {
        hideLoadMoreButton();
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      } else {
        showLoadMoreButton();
      }
    } catch (error) {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again.',
        position: 'topRight',
      });
    }
  });
}
