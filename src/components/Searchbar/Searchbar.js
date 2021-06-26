import React, { useState } from 'react';
import { changeSearchQuery } from '../../redux/pics/pictures-actions';
import { getPicsOperation } from '../../redux/pics/pictures-operations';
import { useDispatch } from 'react-redux';

import style from './Searchbar.module.css';

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearchQuery = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    // fetch запрос
    dispatch(getPicsOperation(search, 1));
    // Вносим значение поиска в стейт
    dispatch(changeSearchQuery(search));

    clearSearchForm();
  };

  const clearSearchForm = () => {
    setSearch('');
  };

  return (
    <header className={style.Searchbar}>
      <form onSubmit={handleSubmitForm} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleSearchQuery}
          value={search}
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
