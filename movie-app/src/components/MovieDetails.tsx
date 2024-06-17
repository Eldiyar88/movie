import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import { Movie } from '../models/Movie';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

function MovieDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    const getMovie = async () => {
      try {
      const movieData  = await fetchMovieById(Number(id));
      setMovie( movieData );
      } catch (error) {
        console.error('Error fetching movie:', error);

      }
    };
    getMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        alt={movie.title}
        height="400"
        image={movie.poster}
        title={movie.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release Date: {movie.releaseDate}
        </Typography>
        <Box>
          {movie.genres.map((genre) => (
            <Typography key={genre} variant="body2" color="text.secondary">
              {genre}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default MovieDetails;
