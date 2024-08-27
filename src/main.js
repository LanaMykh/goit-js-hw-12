import { createGalleryCard } from './js/render-functions.js';
import { fetchImage } from './js/pixabay-api.js';
import iziToast from "izitoast";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
  event.preventDefault();
  
    loader.style.display = 'inline-block';
  
    const searchedValue = formSearch.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").split(" ").join("+");

    fetchImage(searchedValue)
        .then(data => {

            if (data.hits.length === 0) {
              iziToast.error({
                message:
                  'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
              });
              loader.style.display = 'none';
              gallery.innerHTML = '';
              formSearch.reset();
              return;
             };
            const galleryCards = data.hits.map(cardDetails => createGalleryCard(cardDetails)).join('');

          gallery.innerHTML = galleryCards;
          loader.style.display = 'none';
          lightbox.refresh();
        
        })
        .catch(err => {
            console.log(err);
        });
};

formSearch.addEventListener('submit', onSearchFormSubmit);
