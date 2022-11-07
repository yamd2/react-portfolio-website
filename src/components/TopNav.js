import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <Navbar collapseOnSelect bg="none" expand="md" className="to-nav">
      <Container>
 
        {/* <Navbar.Brand href to="#"> */}
        <Link className="nav-link" to="/">
          Yam
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" href to="/skills">
              Skills
            </Link>
            <Link className="nav-link" href to="/projects">
              Projects
            </Link>
            <Link className="nav-link" href to="/about-me">
              About Me
            </Link>
            <Link className="nav-link" href to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
