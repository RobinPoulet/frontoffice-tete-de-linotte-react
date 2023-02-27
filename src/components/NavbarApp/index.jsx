import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { StyledLink } from '../../utils/style/Athoms';

const NavbarApp = () => {
  const theme = "light"

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <StyledLink $theme={theme} to="/">
            <h1 className="h4">Tête de Linottes</h1>
          </StyledLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <StyledLink $theme={theme} to="/">Home</StyledLink>
            </Nav.Link>
            <Nav.Link>
              <StyledLink $theme={theme} to="/about">A propos</StyledLink>
            </Nav.Link>
            <NavDropdown title="Nos produits" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <StyledLink $theme={theme} to="/products">Toutes catégories</StyledLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Catégorie produit 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Catégorie produit 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Catégorie produit 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;