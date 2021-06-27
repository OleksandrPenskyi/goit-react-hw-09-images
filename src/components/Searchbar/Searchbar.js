import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchQuery } from '../../redux/pics/pictures-actions';
import { getSearchQuery } from '../../redux/pics/pictures-selectors';

import style from './Searchbar.module.css';

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const searchQuery = useSelector(getSearchQuery);

  const handleSearchQuery = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    if (!search) {
      alert('Введите ввалидное значение!');
      return;
    }

    if (search.toLowerCase() === searchQuery.toLowerCase()) {
      alert('Данный поиск уже осуществлен! Введите другое значение!');
      return;
    }

    dispatch(changeSearchQuery(search)); // Вносим значение поиска в стейт
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
