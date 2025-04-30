// hooks/useMovieById.ts
import { useState, useEffect } from 'react';
import { getMoviesById } from '../services/omdbApi';
import { Movie } from '@/types';
import { getMovieTrailer, getPosterByImdbId } from '../services/tmdbApi';

export const useMovieById = (id: string) => {
  const [data, setData] = useState<Movie | null>(null);
  const [bgPosterUrl, setBgPosterUrl] = useState<string | null>(null);
  const [genreList, setGenreList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getMoviesById(id);

        setData(res.data);
        if (res.data.Genre) {
          const genres = res.data.Genre.split(',').map((genre: any) => genre.trim());
          setGenreList(genres);
        }

        const poster = await getPosterByImdbId(id);
        setBgPosterUrl(poster);

        const trailer = await getMovieTrailer(id);
        setTrailerUrl(trailer);
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

  return { data, loading, error, bgPosterUrl, genreList, trailerUrl };
};
