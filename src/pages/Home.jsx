import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import transition from '../transition';
import videoBg from "../assets/vid.mov"

const Home = () => {
  return (
    
    <Container>

      <div id="hero-section">
      
        <h1>pratham</h1>
        <p id="sub-hero">junior front-end developer</p>
        <Link to="/about" className="homeBtn">about me!</Link>
      </div>
    </Container>
  )
}

export default transition(Home);