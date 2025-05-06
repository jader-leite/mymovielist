import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createFavoritesSlice, FavoritesSlice } from './favorites.slice';
import { createMoviesSlice, MoviesSlice } from './movies.slice';

type MyMovieListStore = FavoritesSlice & MoviesSlice;

export const useMyMovieListStore = create<MyMovieListStore>()(
  persist(
    (set, get) => ({
      ...createFavoritesSlice(set, get),
      ...createMoviesSlice(set),
    }),
    {
      name: 'my-movie-list',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        console.log('State rehydrated:', state);
      },
    },
  ),
);
