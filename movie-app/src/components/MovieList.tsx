import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';
import { Movie } from '../models/Movie';
import MovieCard from './MovieCard';
import { Grid } from '@mui/material';

function MovieList(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchMovies({ limit: 50 });
        console.log(response.data); // Логируем ответ для проверки структуры
        setMovies(response.data.movies || []); // Используем поле `movies`
        // setMovies(response.data.docs);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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

export default MovieList;
