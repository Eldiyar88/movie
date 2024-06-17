import { Movie } from '../models/Movie';

const FAVORITES_KEY = 'favorites';

export const getFavorites = (): Movie[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (movie: Movie) => {
  const favorites = getFavorites();
  if (!favorites.find(fav => fav.id === movie.id)) {
    favorites.push(movie);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFavorite = (id: number) => {
  let favorites = getFavorites();
  favorites = favorites.filter(fav => fav.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
