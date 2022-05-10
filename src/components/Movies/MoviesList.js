import MovieItem from './MovieItem';
import classes from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <main className={classes['movies-list']}>
      {movies.length > 0 &&
        movies.map((movie, index) => (
          <MovieItem
            key={index}
            title={movie.title}
            overview={movie.overview}
            img={movie.poster_path}
            score={movie.vote_average}
          />
        ))}
    </main>
  );
};

export default MoviesList;
