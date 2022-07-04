// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightBox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(item => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      />
    </a>
    </div>`
}).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

const modal = new SimpleLightBox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
})
