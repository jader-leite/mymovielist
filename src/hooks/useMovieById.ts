// hooks/useMovieById.ts
import { useState, useEffect } from 'react';
import { getMoviesById } from '../services/omdbApi';
import { Movie } from '@/types';
import { getPosterByImdbId } from '../services/tmdbApi';

export const useMovieById = (id: string) => {
  const [data, setData] = useState<Movie | null>(null);
  const [bgPosterUrl, setBgPosterUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getMoviesById(id);
        setData(res.data);
        const poster = await getPosterByImdbId(id);
        setBgPosterUrl(poster);
      } catch (_error) {
        setError('Failed to find movie details');
        console.log(_error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  return { data, loading, error, bgPosterUrl };
};
