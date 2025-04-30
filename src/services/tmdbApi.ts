import { VideoResult } from '@/types';
import axios from 'axios';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const getPosterByImdbId = async (imdbID: string) => {
  const res = await axios.get(`${TMDB_BASE_URL}/find/${imdbID}`, {
    params: {
      api_key: TMDB_API_KEY,
      external_source: 'imdb_id',
    },
  });

  const movie = res.data.movie_results?.[0];

  if (movie?.poster_path) {
    return `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  }

  return null;
};

export const getMovieTrailer = async (imdbId: string) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/movie/${imdbId}/videos`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    const trailer = res.data.results.find(
      (video: VideoResult) => video.type === 'Trailer' && video.site === 'YouTube' && video.official,
    );

    const fallbackTrailer = res.data.results.find(
      (video: VideoResult) => video.type === 'Trailer' && video.site === 'YouTube',
    );

    if (trailer || fallbackTrailer) {
      const videoKey = (trailer || fallbackTrailer).key;
      return `https://www.youtube.com/embed/${videoKey}`;
    }

    return null;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null;
  }
};
