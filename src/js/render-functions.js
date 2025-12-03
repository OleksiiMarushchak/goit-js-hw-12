import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
});

export const createGallery = (images) => {
  const galleryContainer = document.getElementById('gallery');

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
  galleryContainer.innerHTML = '';
};

export const showLoader = () => {
  
  document.getElementById('loader').classList.remove('is-hidden');
};

export const hideLoader = () => {
  
  document.getElementById('loader').classList.add('is-hidden');
};
