import { searchMovies } from '../services/omdbApi';
import { Movie } from '@/types';
import { useState, useEffect, useCallback } from 'react';

const DEBOUNCE_DELAY = 200;

export const useMovies = (search: string, page: number) => {
  const [data, setData] = useState<Movie[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const { Search, totalResults } = await searchMovies(search, page);
      if (Search) {
        setData(Search);
        setTotalResults(Number(totalResults));
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timeoutId);
  }, [fetchMovies]);

  return { data, totalResults, loading, isEmpty };
};
