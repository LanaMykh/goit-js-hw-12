export const createGalleryCard = ({webformatURL,largeImageURL,tags,likes, views,comments ,downloads}) => {
  return `
      <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      <div class="image-caption">
        <span class="caption-item">
          <span class="caption-label">Likes</span>
          <span class="caption-value">${likes}</span>
        </span>
        <span class="caption-item">
          <span class="caption-label">Views</span>
          <span class="caption-value">${views}</span>
        </span>
        <span class="caption-item">
          <span class="caption-label">Comments</span>
          <span class="caption-value">${comments}</span>
        </span>
        <span class="caption-item">
          <span class="caption-label">Downloads</span>
          <span class="caption-value">${downloads}</span>
        </span>
      </div>
      </a>
    </li>
  `;
};