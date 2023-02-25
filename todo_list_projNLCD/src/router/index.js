import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import QuotesList from "../pages/QuotesList";
import AuthorsList from "../pages/AuthorsList";
import Author from "../pages/Author";
import QuotesNew from "../pages/QuotesNew";
import AddListPage from "../pages/AddListPage";
import AddCartePage from "../pages/AddCartePage";
import CatalogueListesPage from "../pages/CatalogueListesPage";
import ListePage from "../pages/ListePage";
import CartesList from "../pages/CartesList";

export const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/quotes", element: <QuotesList/>},
  {path: "/authors", element: <AuthorsList/>},
  {path: "/authors/:id", element: <Author/>},
  {path: "/quotesNew", element: <QuotesNew/>},
  {path: "/listNew", element: <AddListPage/>},
  {path: "/cardNew", element: <AddCartePage/>},
  {path: "/listes", element: <CatalogueListesPage/>},
  {path: "/listes/:id", element: <ListePage/>},
  {path: "/cartes", element: <CartesList/>}

]);