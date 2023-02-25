import '../App.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "@mui/system";

export default function Home(){
  return <Container maxWidth="sm">
    <Link to="/catalogue">Catalogue Liste</Link><br/>
    <Link to="/listeNew">New Liste</Link><br/>
  </Container>
}

