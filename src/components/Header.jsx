import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#FFD6E7" }} variant="light" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "#000" }}>
          Closet By KayKay
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/cart" style={{ color: "#000" }}>
              <i className="fas fa-shopping-cart"></i> Cart
            </Nav.Link>

            <Nav.Link as={Link} to="/user" style={{ color: "#000" }}>
              <i className="fas fa-user"></i> User
            </Nav.Link>

            <NavDropdown title="Category" id="basic-nav-dropdown" menuVariant="light">

              <NavDropdown.Item as={Link} to="/clothes?category=tops">
                Tops
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/clothes?category=bottoms">
                Bottoms
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/clothes?category=dress">
                Dress
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/clothes?category=kids">
                Kids
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/clothes">
                More
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
