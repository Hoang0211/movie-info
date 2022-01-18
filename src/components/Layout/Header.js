import { useRef } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  const searchTextRef = useRef("");

  const submitSearchHandler = (event) => {
    event.preventDefault();

    props.submitSearchHandler(searchTextRef.current.value);

    searchTextRef.current.value = "";
  };

  return (
    <div className={classes.header}>
      <div className={classes.title} onClick={props.reloadHandler}>
        Movie Info
      </div>
      <form onSubmit={submitSearchHandler}>
        <input placeholder="Enter a movie name..." ref={searchTextRef} />
      </form>
    </div>
  );
};
export default Header;
