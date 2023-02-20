import '../App.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "@mui/system";

export default function Home(){
  return <Container maxWidth="sm">
    <Link to="/quotes">Citations</Link><br/>
    <Link to="/authors">Auteur</Link><br/>
    <Link to="/quotesNew">New quote</Link><br/>
  </Container>
}

