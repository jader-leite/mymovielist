export type MoviesSlice = {
  searchQuery: string;
  currentPage: number;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
};

export const createMoviesSlice = (set: any): MoviesSlice => ({
  searchQuery: 'disney',
  currentPage: 1,
  setSearchQuery: (query) => set(() => ({ searchQuery: query })),
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
});
