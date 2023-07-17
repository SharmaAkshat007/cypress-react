import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import ErrorPage from "./Error";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

export default router;
