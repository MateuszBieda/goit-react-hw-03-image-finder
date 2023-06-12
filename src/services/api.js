import axios from 'axios';

const API_KEY = '35005985-6320445dd5945a516c4e799c6';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const response = axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export default fetchImagesWithQuery;
