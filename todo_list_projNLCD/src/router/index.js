import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import QuotesList from "../pages/QuotesList";
import AuthorsList from "../pages/AuthorsList";
import Author from "../pages/Author";
import QuotesNew from "../pages/QuotesNew";

export const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/quotes", element: <QuotesList/>},
  {path: "/authors", element: <AuthorsList/>},
  {path: "/authors/:id", element: <Author/>},
  {path: "/quotesNew", element: <QuotesNew/>}
]);