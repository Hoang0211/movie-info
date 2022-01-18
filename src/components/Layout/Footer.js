import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes["footer"]}>
      <button
        onClick={() => props.navigatePageHandler(false)}
        disabled={props.currentPage === 1}
      >
        -
      </button>
      <div className={classes["current-page"]}>
        {props.currentPage} / {props.maxPage}
      </div>
      <button
        onClick={() => props.navigatePageHandler(true)}
        disabled={props.currentPage === props.maxPage}
      >
        +
      </button>
    </div>
  );
};

export default Footer;
