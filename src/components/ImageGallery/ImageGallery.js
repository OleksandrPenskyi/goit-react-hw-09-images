import React from 'react';
import { useSelector } from 'react-redux';

import ImageGalleryItem from './ImageGalleryItem';
import { getItems } from '../../redux/pics/pictures-selectors';

import style from './ImageGallery.module.css';

export default function ImageGallery() {
  const items = useSelector(getItems);

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
