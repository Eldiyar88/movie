import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem } from '@mui/material';

const genres = ['Action', 'Drama', 'Comedy', 'Thriller'];

function FilterBar(): JSX.Element {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);
  const [yearRange, setYearRange] = useState<[number, number]>([1990, new Date().getFullYear()]);

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedGenres(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleFilter = () => {
    // Implement filter logic
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        select
        label="Genres"
        value={selectedGenres}
        onChange={handleGenreChange}
        SelectProps={{
          multiple: true,
        }}
        variant="outlined"
        margin="normal"
      >
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Rating Range"
        value={ratingRange.join(' - ')}
        onChange={(e) => setRatingRange(e.target.value.split(' - ').map(Number) as [number, number])}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Year Range"
        value={yearRange.join(' - ')}
        onChange={(e) => setYearRange(e.target.value.split(' - ').map(Number) as [number, number])}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Apply Filters
      </Button>
    </Box>
  );
}

export default FilterBar;
