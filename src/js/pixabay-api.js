const keyAPI = "45640148-48faf1be46dd1becbe9886964";
const URL = "https://pixabay.com/api/";

export const fetchImage = searchedValue => {
  const urlParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: 'true',
  });

    return fetch(`${URL}?key=${keyAPI}&q=${searchedValue}&${urlParams}`)
        .then(respponse => {
            if (!respponse.ok) {
                throw new Error(respponse.status);
            }
            return respponse.json();
         }
        )
};