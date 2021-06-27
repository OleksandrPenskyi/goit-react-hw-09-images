import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  changeLargeImgURL,
  changeSearchQuery,
  fetchPicturesRequest,
  fetchPicturesSuccess,
  fetchPicturesError,
  closeModal,
  incrementCurrentpage,
} from './pictures-actions';

const itemsReducer = createReducer([], {
  [fetchPicturesSuccess]: (state, { payload }) => [...state, ...payload],
  [changeSearchQuery]: () => [],
});

const largeImageURLReducer = createReducer('', {
  [changeLargeImgURL]: (_, { payload }) => payload,
  [closeModal]: () => '', // если закрыли модалку, то сбросили ссылку на большую каринтку
});

const searchQueryReducer = createReducer('', {
  [changeSearchQuery]: (_, { payload }) => payload,
});

const isModalOpenReducer = createReducer(false, {
  [changeLargeImgURL]: () => true, // при клике по картинке, открываем модалку и записываем в стейссылку на большую картинку
  [closeModal]: () => false,
});

const currentPageReducer = createReducer(1, {
  [incrementCurrentpage]: (state, _) => state + 1,
  [changeSearchQuery]: () => 1, // при новом поиске сбрасываем CurrentPage в начальное значение, к 1
});

const isLoadingReducer = createReducer(false, {
  [fetchPicturesRequest]: () => true,
  [fetchPicturesSuccess]: () => false,
  [fetchPicturesError]: () => false,
});

const errorReducer = createReducer(false, {
  [fetchPicturesRequest]: () => false,
  [fetchPicturesSuccess]: () => false,
  [fetchPicturesError]: () => true,
});

const picturesReducer = combineReducers({
  items: itemsReducer,
  currentPage: currentPageReducer,
  largeImageURL: largeImageURLReducer,
  searchQuery: searchQueryReducer,
  isModalOpen: isModalOpenReducer,
  isLoading: isLoadingReducer,
  isError: errorReducer,
});

export default picturesReducer;
