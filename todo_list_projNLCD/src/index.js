import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import QuotesList from './components/QuotesList';
import AuthorsList from './components/AuthorsList';
import { Container } from '@mui/system';
import { Link } from '@mui/material';
import Author from './components/Author';
import QuotesNew from './components/QuotesNew';

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/quotes", element:<QuotesList/>},
  {path:"/authors", element:<AuthorsList/>},
  {path:"/authors/:id", element:<Author/>},
  {path:"/quotesNew", element:<QuotesNew/>}

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
