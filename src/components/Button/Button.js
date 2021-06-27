import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCurrentpage } from '../../redux/pics/pictures-actions';

import style from './Button.module.css';

export default function Button() {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(incrementCurrentpage());
  };

  return (
    <button onClick={onBtnClick} type="button" className={style.Button}>
      Load more
    </button>
  );
}
