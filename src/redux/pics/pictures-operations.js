/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import {
  fetchPicturesRequest,
  fetchPicturesSuccess,
  fetchPicturesError,
} from '../pics/pictures-actions';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '21631018-2260b91e787408b7a6b929027';

export const getPicsOperation = (
  searchValue,
  currentPage = 1,
) => async dispatch => {
  dispatch(fetchPicturesRequest());

  try {
    const {
      data: { hits },
    } = await axios.get(
      `/?q=${searchValue}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );

    dispatch(fetchPicturesSuccess(hits));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    dispatch(fetchPicturesError(error.message));
  }
};
