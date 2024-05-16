// Import Bootstrap modules
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { RiReactjsLine } from "react-icons/ri";

const Header = () => {
  return (
    <Navbar className="mb-0" bg="blue" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container justify-content-center">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              WHO AM I
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/home1.0">
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
