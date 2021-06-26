import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.css';

const Button = ({ onBtnClick }) => (
  <button onClick={onBtnClick} type="button" className={style.Button}>
    Load more
  </button>
);

export default Button;

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
