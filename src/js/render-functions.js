import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
});

export const createGallery = (images) => {
  const galleryContainer = document.getElementById('gallery');
  if (!galleryContainer) return;

  const html = images
    .map(
      (image) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
        />
      </a>
      <div class="gallery-info">
        <div class="info-item">
          <span class="info-label">Likes</span>
          <span class="info-value">${image.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Views</span>
          <span class="info-value">${image.views}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Comments</span>
          <span class="info-value">${image.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Downloads</span>
          <span class="info-value">${image.downloads}</span>
        </div>
      </div>
    </li>
  `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', html);
  lightbox.refresh();
};

export const clearGallery = () => {
  const galleryContainer = document.getElementById('gallery');
  if (!galleryContainer) return;
  galleryContainer.innerHTML = '';
};

export const showLoader = () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.classList.remove('is-hidden');
};

export const hideLoader = () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.classList.add('is-hidden');
};

export const showLoadMoreButton = () => {
  const button = document.getElementById('load-more');
  if (!button) return;
  button.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  const button = document.getElementById('load-more');
  if (!button) return;
  button.classList.add('is-hidden');
};
