import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImageGalleryItem from './ImageGalleryItem';
import {
  getItems,
  getSearchQuery,
  getCurrentPage,
} from '../../redux/pics/pictures-selectors';
import { getPicsOperation } from '../../redux/pics/pictures-operations';

import style from './ImageGallery.module.css';

export default function ImageGallery() {
  const dispatch = useDispatch();

  const items = useSelector(getItems);
  const searchQuery = useSelector(getSearchQuery);
  const currentPage = useSelector(getCurrentPage);

  useEffect(() => {
    if (searchQuery) {
      dispatch(getPicsOperation(searchQuery, currentPage));
    }
  }, [dispatch, currentPage, searchQuery]);

  return (
    <ul className={style.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          key={id}
        />
      ))}
    </ul>
  );
}
