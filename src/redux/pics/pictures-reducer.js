import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  changeLargeImgURL,
  changeSearchQuery,
  // fetchPicturesRequest,
  fetchPicturesSuccess,
  // fetchPicturesError,
  closeModal,
} from './pictures-actions';

const itemsReducer = createReducer([], {
  [fetchPicturesSuccess]: (state, { payload }) => payload,
});

const largeImageURLReducer = createReducer('', {
  [changeLargeImgURL]: (_, { payload }) => payload,
});

const searchQueryReducer = createReducer('', {
  [changeSearchQuery]: (_, { payload }) => payload,
});

const isModalOpenReducer = createReducer(false, {
  [changeLargeImgURL]: () => true,
  [closeModal]: () => false,
});

const picturesReducer = combineReducers({
  items: itemsReducer,
  largeImageURL: largeImageURLReducer,
  searchQuery: searchQueryReducer,
  isModalOpen: isModalOpenReducer,
});

export default picturesReducer;
