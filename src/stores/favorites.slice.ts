import { Movie } from '@/types';

export type FavoritesSlice = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (imdbId: string) => void;
  isFavorite: (imdbId: string) => void;
};

export const createFavoritesSlice = (set: any, get: any): FavoritesSlice => ({
  favorites: [],
  addFavorite: (movie) =>
    set((state: any) => ({
      favorites: [...state.favorites, movie],
    })),

  removeFavorite: (imdbID) =>
    set((state: any) => ({
      favorites: state.favorites.filter((m: Movie) => m.imdbID !== imdbID),
    })),

  isFavorite: (imdbID) => get().favorites.some((m: Movie) => m.imdbID === imdbID),
});
