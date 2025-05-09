import { createBrowserRouter } from 'react-router';
import Home from '@/pages/home/Home';
import Layout from '@/pages/Layout';
import Favorites from '@/pages/movies/Favorites.tsx';
import MovieDetails from '@/pages/movies/MovieDetails.tsx';

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
    ],
  },
]);

export default router;
