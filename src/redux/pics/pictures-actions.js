import { createAction } from '@reduxjs/toolkit';

export const changeLargeImgURL = createAction('pictures/changeLargeImgURL');
export const changeSearchQuery = createAction('pictures/changeSearchQuery');
export const closeModal = createAction('pictures/closeModal');

export const fetchPicturesRequest = createAction(
  'pictures/fetchPicturesRequest',
);
export const fetchPicturesSuccess = createAction(
  'pictures/fetchPicturesSuccess',
);
export const fetchPicturesError = createAction('pictures/fetchPicturesError');
