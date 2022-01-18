import MovieItem from "./MovieItem";

import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <div className={classes["movies-list"]}>
      {props.movies.length > 0 &&
        props.movies.map((movie, index) => (
          <MovieItem
            key={index}
            title={movie.title}
            overview={movie.overview}
            img={movie.poster_path}
            score={movie.vote_average}
          />
        ))}
    </div>
  );
};

export default MoviesList;
