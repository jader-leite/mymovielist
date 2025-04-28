import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export async function searchMovies(query: string) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        type: 'movie',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error trying find movies:', error);
    throw error;
  }
}
