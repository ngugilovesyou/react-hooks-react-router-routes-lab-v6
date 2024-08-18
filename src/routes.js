import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPages";
import Home from "./pages/Home";
import Movie from "./pages/Movie";


const routes = [
  {
    path:("/"),
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path:("/directors"),
    element:<Directors />
  },
  {
    path:("/actors"),
    element:<Actors />
  },
  {
    path:("/movie/:id"),
    element:<Movie />
  }

  ];

export default routes;