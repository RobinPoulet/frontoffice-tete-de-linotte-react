import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Athoms'
import { Nav, NavDropdown } from 'react-bootstrap'

const Header = ({ categoriesList }) => {
  const [show, setShow] = React.useState(false)

  const handleMouseOver = () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
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
                {categoriesList &&
                  categoriesList.map((category) => (
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
