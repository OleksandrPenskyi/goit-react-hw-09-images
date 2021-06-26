import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';

import style from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={style.Spinner}>
        <Spinner type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
export default Loader;
