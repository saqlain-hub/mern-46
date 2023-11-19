import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact";
import App from "../App";
import NotFound from "../components/NotFound";
import About from "../components/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "contact",
    element: <Contact></Contact>,
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default Router;
