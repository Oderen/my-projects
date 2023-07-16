import { useState } from 'react';
import css from './Searchbar.module.css';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import { ImSearch } from 'react-icons/im';

export default function Searchbar({ handleFormSubmit }) {
  const [input, setInput] = useState('');

  const onHandleInputChange = e => {
    const { value } = e.currentTarget;

    setInput(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const searchValue = input.trim().toLowerCase();

    if (searchValue === '') {
      Notiflix.Notify.info('Please enter something');
      return;
    }

    handleFormSubmit(searchValue);
  };

  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <ImSearch style={{ width: '20px', height: '20px' }} />
        </button>
        <input
          className={css.searchFormInput}
          value={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleInputChange}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
