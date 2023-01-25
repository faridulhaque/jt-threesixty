import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
 
  {
    path: "/:param",
    element: <DetailsPage></DetailsPage>,
  },
]);
export default router;
