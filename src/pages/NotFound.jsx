import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
// Free download of graphics library (two of PNGs in assets): https://illustrationz.design/
import notFound from "../assets/errorOne.png";
import "../css/about.css"


const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>
        <h2 className="te">ERROR 404</h2>
        <p className="te">THIS PAGE DOES NOT EXIST!</p>
      </Container>
    </div>
  );
};

export default NotFound;
