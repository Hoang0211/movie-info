import { useRef } from 'react';

import classes from './Header.module.css';

const Header = ({ submitSearch, reloadHandler }) => {
  const searchTextRef = useRef('');

  const submitSearchHandler = (event) => {
    event.preventDefault();
    submitSearch(searchTextRef.current.value);
    searchTextRef.current.value = '';
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.title} onClick={reloadHandler}>
        Movie Info
      </h1>
      <form onSubmit={submitSearchHandler}>
        <input placeholder='Enter a movie name...' ref={searchTextRef} />
      </form>
    </header>
  );
};
export default Header;
