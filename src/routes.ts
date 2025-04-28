import { createBrowserRouter } from "react-router";

import Home from "./pages/home/Home";
import MovieDetails from "./pages/Movies/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/movies/:id",
    Component: MovieDetails,
  },
]);

export default router;