import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLargeImageURL } from '../../redux/pics/pictures-selectors';
import { closeModal } from '../../redux/pics/pictures-actions';

import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const largeImageURL = useSelector(getLargeImageURL);
  const dispatch = useDispatch();
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const handleEscapeClick = event => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };

  function onCloseModal() {
    dispatch(closeModal());
  }

  return createPortal(
    <div
      className={style.Overlay}
      onClick={handleBackdropClick}
      onKeyDown={handleEscapeClick}
      tabIndex="0" // юзай для постановки таргета и закрытия по Ескейпу
    >
      <div className={style.Modal}>
        <img src={largeImageURL} alt="largeImage" ref={modalRef} tabIndex="0" />
      </div>
    </div>,
    modalRoot,
  );
}
