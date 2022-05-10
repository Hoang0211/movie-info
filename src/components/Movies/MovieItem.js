import classes from './MovieItem.module.css';

const MovieItem = ({ title, overview, img, score }) => {
  const changeScoreColor = (score) => {
    if (score >= 8) {
      return 'green';
    } else if (score >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className={classes['movie-item']}>
      <img src={process.env.REACT_APP_IMG_API + img} alt={title}></img>
      <div className={classes['info']}>
        <p className={classes['title']}>{title}</p>
        <span
          className={`${classes['score']} ${classes[changeScoreColor(score)]}`}
        >
          {score.toFixed(1)}
        </span>
      </div>

      <div className={classes['overview']}>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieItem;
