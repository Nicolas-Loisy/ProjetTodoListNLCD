import logo from '../logo.svg';
import '../App.css';
import React from "react";
import axios from "axios";
import QuotesList from './QuotesList';
import { Link } from 'react-router-dom';
import { Container } from "@mui/system";

export default function Home(){
  return <Container maxWidth="sm">
    <Link to="/quotes">Citations</Link><br/>
    <Link to="/authors">Auteur</Link><br/>
    <Link to="/quotesNew">New quote</Link><br/>
  </Container>
}

