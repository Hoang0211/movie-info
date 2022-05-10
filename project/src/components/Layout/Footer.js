import classes from './Footer.module.css';

const Footer = ({ currentPage, maxPage, navigatePageHandler }) => {
  return (
    <footer className={classes['footer']}>
      <button
        onClick={() => navigatePageHandler(false)}
        disabled={currentPage === 1}
      >
        -
      </button>
      <span className={classes['current-page']}>
        {currentPage} / {maxPage}
      </span>
      <button
        onClick={() => navigatePageHandler(true)}
        disabled={currentPage === maxPage}
      >
        +
      </button>
    </footer>
  );
};

export default Footer;
