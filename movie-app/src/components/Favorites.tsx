import React, { useState, useEffect } from 'react';
import { getFavorites } from '../utils/localStorage';
import { Movie } from '../models/Movie';
import MovieCard from './MovieCard';
import { Grid } from '@mui/material';

function Favorites(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const favorites = getFavorites();
    setMovies(favorites);
  }, []);

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Favorites;
