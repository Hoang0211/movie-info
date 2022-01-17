import classes from "./Header.module.css";

const Header = () => {
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
