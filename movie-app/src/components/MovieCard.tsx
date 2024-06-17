import React from 'react';
import { Movie } from '../models/Movie';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps): JSX.Element {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={movie.title}
        height="140"
        image={movie.poster}
        title={movie.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {movie.rating}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
