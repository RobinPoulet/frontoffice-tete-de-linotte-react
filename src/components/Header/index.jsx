import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Loader, StyledLink } from '../../utils/style/Athoms'
import styled from 'styled-components'
import { Nav, NavDropdown } from 'react-bootstrap'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Header = () => {
  const [show, setShow] = React.useState(false)

  const handleMouseOver = () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
  }

  const { isLoading, error, data } = useQuery('categories', async () => {
    const response = await fetch(
      'https://api-tdl-backend.herokuapp.com/api/category'
    )
    const data = await response.json()
    console.log(data)
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
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid w-100">
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon
              icon={['fab', 'bootstrap']}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Tête de Linotte</span>
          </Link>

          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Nav.Link as={StyledLink} to="/">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={StyledLink} to="/about" eventKey="about">
                A propos
              </Nav.Link>
            </li>
            <li
              className="nav-item mt-1"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown
                title="Nos produits"
                id="basic-nav-dropdown"
                show={show}
              >
                {categoriesList.map((category) => (
                  <Link
                    key={category._id}
                    to={`/products/category/${category.name}`}
                    state={{ categoryId: category._id }}
                    className="dropdown-item"
                  >
                    {category.name}
                  </Link>
                ))}
              </NavDropdown>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
