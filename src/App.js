import React from 'react';
import { useSelector } from 'react-redux';

import {
  getIsModalOpen,
  getItems,
  getIsLoading,
  getIsError,
} from './redux/pics/pictures-selectors';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import ErrorPage from './components/ErrorPage';

export default function App() {
  const isModalOpen = useSelector(getIsModalOpen);
  const items = useSelector(getItems);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  return (
    <>
      <Searchbar />

      {isError ? (
        <ErrorPage />
      ) : (
        <>
          <ImageGallery />
          {isLoading && <Loader />} {/* если загрузка - грузим лоудер */}
          {items?.length > 0 && !isLoading && <Button />}{' '}
          {/* если есть итемы и нет загрузки, грузим кнопку */}
          {isModalOpen && <Modal />} {/* модалка */}
        </>
      )}
    </>
  );
}
