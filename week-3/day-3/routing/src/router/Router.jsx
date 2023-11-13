import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import NotFound from "../components/NotFound";
import About from "../components/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/home",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "contact",
    element: <Contact></Contact>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default Router;
