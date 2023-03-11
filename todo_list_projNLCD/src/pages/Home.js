import '../App.css';
import { Link } from 'react-router-dom';
import { Container } from "@mui/system";

export default function Home(){
  return <Container maxWidth="sm">
    <Link to="/listes">Catalogue des Listes</Link><br/>
    <Link to="/MyMap">Ma map</Link><br/>
  </Container>
}
