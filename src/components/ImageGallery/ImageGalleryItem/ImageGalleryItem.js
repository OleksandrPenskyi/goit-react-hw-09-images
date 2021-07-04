import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeLargeImgURL } from '../../../redux/pics/pictures-actions';

import style from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const dispatch = useDispatch();

  const onImgClick = useCallback(() => {
    dispatch(changeLargeImgURL(largeImageURL));
  }, [dispatch, largeImageURL]);

  return (
    <li className={style.ImageGalleryItem}>
      <img
        onClick={onImgClick}
        src={webformatURL}
        alt="img"
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
