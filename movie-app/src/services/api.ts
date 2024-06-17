import axios from 'axios';

const API_URL = 'https://kinopoisk.dev/v1.2/movie';
// console.log('API Key:', process.env.REACT_APP_API_KEY);
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': process.env.REACT_APP_API_KEY,
  },
  
});

// console.log('111111111111111111111', api);

export interface MovieParams {
  genre?: string;
  ratingFrom?: number;
  ratingTo?: number;
  yearFrom?: number;
  yearTo?: number;
  page?: number;
  limit?: number;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
  description: string;
  genres: string[];
  releaseDate: string;
}

const movieCache = new Map<string, Movie>();

export const fetchMovies = (params: MovieParams) => api.get<{ movies: Movie[] }>('/', { params });

export const fetchMovieById = async (id: number): Promise<Movie> => {
  if (movieCache.has(id.toString())) {
    return movieCache.get(id.toString()) as Movie;
  }
  const response = await api.get<Movie>(`/${id}`);
  movieCache.set(id.toString(), response.data);
  return response.data;
};
