import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import FilterPage from "../pages/FilterPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/search",
    element: <SearchPage></SearchPage>,
  },
  {
    path: "/filter",
    element: <FilterPage></FilterPage>,
  },
 
  {
    path: "/:param",
    element: <DetailsPage></DetailsPage>,
  },
]);
export default router;
