import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddListPage from "../pages/AddListPage";
import CatalogueListesPage from "../pages/CatalogueListesPage";
import ListePage from "../pages/ListePage";
import CartesList from "../pages/CartesList";
import MyMapPage from "../pages/MyMapPage";

export const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/listNew", element: <AddListPage/>},
  {path: "/listes", element: <CatalogueListesPage/>},
  {path: "/listes/:id", element: <ListePage/>},
  {path: "/cartes", element: <CartesList/>},
  {path: "/MyMap", element: <MyMapPage/>}
]);