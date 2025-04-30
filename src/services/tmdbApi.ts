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
  console.log(res);

  const movie = res.data.movie_results?.[0];

  if (movie?.poster_path) {
    return `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  }

  return null;
};
