import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Loader, StyledLink } from '../../utils/style/Athoms'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const NavbarApp = ({ theme }) => {
  const { isLoading, error, data } = useQuery('categories', async () => {
    const response = await fetch(
      'https://api-tdl-backend.herokuapp.com/api/category'
    )
    const data = await response.json()
    return data
  })

  const categoriesList = data?.categories

  if (error) {
    return <span>Il y a un problème avec l'API</span>
  }

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    )
  }

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
            <Nav.Link as={StyledLink} to="/" eventKey="home" $theme={theme}>
              Home
            </Nav.Link>
            <Nav.Link
              as={StyledLink}
              to="/about"
              eventKey="about"
              $theme={theme}
            >
              A propos
            </Nav.Link>
            <NavDropdown title="Nos produits" id="basic-nav-dropdown">
              {categoriesList.map((category) => (
                <Link
                  key={category._id}
                  to={`/categories/${category.name}`}
                  state={{ categoryId: category._id }}
                  className="dropdown-item"
                >
                  {category.name}
                </Link>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp
