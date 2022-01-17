import classes from "./Header.module.css";

const Header = () => {
  console.log(process.env.REACT_APP_DISCOVER_API);
  console.log(process.env.REACT_APP_SEARCH_API);
  return (
    <div className={classes.header}>
      <div className={classes.title}>Movie Info</div>
      <form>
        <input placeholder="Enter a movie name..." />
      </form>
    </div>
  );
};
export default Header;
