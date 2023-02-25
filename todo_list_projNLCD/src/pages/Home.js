import '../App.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "@mui/system";

export default function Home(){
  return <Container maxWidth="sm">
    <Link to="/listes">Catalogue des Listes</Link><br/>
    <Link to="/listNew">Nouvelle Liste</Link><br/>
    <Link to="/cardNew">Nouvelle Carte</Link><br/>
  </Container>
}
