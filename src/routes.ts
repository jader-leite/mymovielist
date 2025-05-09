import { createBrowserRouter } from 'react-router';
import Home from '@/pages/home/Home';
import Layout from '@/pages/Layout';
import Details from './pages/movie/Details';
import FavoritesList from './pages/movie/FavoritesList';

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
        Component: Details,
      },
      {
        path: '/favorites',
        Component: FavoritesList,
      },
    ],
  },
]);

export default router;
