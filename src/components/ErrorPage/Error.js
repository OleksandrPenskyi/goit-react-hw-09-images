import React from 'react';

import styles from './Error.module.css';

export default function Error() {
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Text}>
        Oops, something went wrong! Please, reload a page or try again later!
      </p>
    </div>
  );
}
