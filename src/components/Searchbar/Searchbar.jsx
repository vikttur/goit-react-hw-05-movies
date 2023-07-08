import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { ReactComponent as MagnificationGlass } from '../../images/magnificationGlass.svg';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (search.trim() === '') return;
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search for a movie by title"
          value={search}
          onChange={handleSearchChange}
        />

        <Button type="submit" className={css.button}>
          <MagnificationGlass />
        </Button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
