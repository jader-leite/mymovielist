import { createBrowserRouter } from 'react-router';
import Home from '@/pages/home/Home';
import Layout from '@/pages/Layout';
import MovieDetails from './pages/movies/movies-details/MovieDetails';
import Favorites from './pages/movies/favorites/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: '/movies/:id',
        Component: MovieDetails,
      },
      {
        path: '/favorites',
        Component: Favorites,
      },
      {},
    ],
  },
]);

export default router;
