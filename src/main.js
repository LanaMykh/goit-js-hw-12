import iziToast from "izitoast";
import SimpleLightbox from 'simplelightbox';

const formSearch = document.querySelector(".search-form");
console.log(formSearch);

const gallery = document.querySelector(".gallery");

const keyAPI = "45640148-48faf1be46dd1becbe9886964";
const URL = "https://pixabay.com/api/";

const createGalleryCard = ({webformatURL,largeImageURL,tags,likes, views,comments ,downloads}) => {
  return `
      <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>
    </li>
  `;
};

const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedValue = formSearch.elements.user_query.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").split(" ").join("+");

    fetch(`${URL}?key=${keyAPI}&q=${searchedValue}`)
        .then(respponse => {
            if (!respponse.ok) {
                throw new Error(respponse.status);
            }
            return respponse.json();
         }
        )
        .then(data => {

            console.log(data);
            const galleryCards = data.hits.map(cardDetails => createGalleryCard(cardDetails)).join('');

            gallery.innerHTML = galleryCards;
        
        })
        .catch(err => {
            console.log(err);
        });
};

formSearch.addEventListener('submit', onSearchFormSubmit);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',       // Використовуємо атрибут alt для підписів
    captionDelay: 250,         // Затримка перед показом підпису
    captionPosition: 'bottom'  // Позиція підпису знизу
});