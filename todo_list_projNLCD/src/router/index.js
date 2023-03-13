import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CatalogueListesPage from "../pages/CatalogueListesPage";
import ListePage from "../pages/ListePage";
import MyMapPage from "../pages/MyMapPage";

export const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/listes", element: <CatalogueListesPage/>},
  {path: "/listes/:id", element: <ListePage/>},
  {path: "/MyMap", element: <MyMapPage/>}
]);