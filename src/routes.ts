import { createBrowserRouter } from 'react-router';
import Home from './pages/home/Home';
import MovieDetails from './pages/Movies/MovieDetails';
import Layout from './pages/Layout';
import Favorites from './pages/Movies/Favorites';

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
