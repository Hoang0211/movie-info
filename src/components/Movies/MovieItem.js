import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  const changeScoreColor = (score) => {
    if (score >= 8) {
      return "green";
    } else if (score >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className={classes["movie-item"]}>
      <img
        src={process.env.REACT_APP_IMG_API + props.img}
        alt={props.title}
      ></img>
      <div className={classes["info"]}>
        <div className={classes["title"]}>{props.title}</div>
        <span
          className={`${classes["score"]} ${
            classes[changeScoreColor(props.score)]
          }`}
        >
          {props.score.toFixed(1)}
        </span>
      </div>

      <div className={classes["overview"]}>
        <h1>Overview</h1>
        <p>{props.overview}</p>
      </div>
    </div>
  );
};

export default MovieItem;
