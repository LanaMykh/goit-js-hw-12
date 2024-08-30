import { createGalleryCard } from './js/render-functions.js';
import { fetchImage } from './js/pixabay-api.js';
import iziToast from "izitoast";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage = 1;
let searchedValue = "";
let cardHeight = 0;
let total_page = 0;

const onSearchFormSubmit = async event => {
  
  try {
    event.preventDefault();
    gallery.innerHTML = '';
    currentPage = 1;
    loader.style.display = 'inline-block';
    
    searchedValue = formSearch.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").split(" ").join("+");
        
    const data = await fetchImage(searchedValue, currentPage);
      
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
    const galleryCard = gallery.querySelector('li');
    cardHeight = galleryCard.getBoundingClientRect().height;

    total_page = Math.ceil(data.totalHits / 15);

    loader.style.display = 'none';
    lightbox.refresh();
    loadMoreBtn.classList.remove('is-hidden');    
    }
  catch (err) {
    iziToast.error({
          message: err.message,
          position: 'topRight',
        });
  };
};

const onLoadMoreBtnClick = async event => {

  try {
    currentPage += 1;
    loadMoreBtn.classList.add('is-hidden');
    loader.style.display = 'inline-block';

    const data = await fetchImage(searchedValue, currentPage);

    const galleryCards = data.hits.map(cardDetails => createGalleryCard(cardDetails)).join('');

    gallery.insertAdjacentHTML('beforeend', galleryCards);
    
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    loader.style.display = 'none';
    loadMoreBtn.classList.remove('is-hidden');
    lightbox.refresh();
    
    if (currentPage === total_page) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
    }
  } catch (err) {
    iziToast.error({
          message: err.message,
          position: 'topRight',
        });
  }
};

formSearch.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);