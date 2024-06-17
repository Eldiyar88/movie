import React from 'react';
import MovieList from '../components/MovieList';
import FilterBar from '../components/FilterBar';

export default function HomePage(): JSX.Element {
  return (
    <div>
      <FilterBar />
      <MovieList />
    </div>
  );
}
