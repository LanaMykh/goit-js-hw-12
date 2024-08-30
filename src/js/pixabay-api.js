import axios from 'axios';

const keyAPI = "45640148-48faf1be46dd1becbe9886964";

axios.defaults.baseURL = "https://pixabay.com";

export const fetchImage = async (searchedValue, page) => {
  const axiosOptions = {
    params: {
      key: keyAPI,
      orientation: 'horizontal',
      image_type: 'photo',
      safesearch: 'true',
      per_page: 15,
      page: page,
      q: searchedValue,
    }
  };
  const {data} = await axios.get(`/api/`, axiosOptions);
  return data;
};