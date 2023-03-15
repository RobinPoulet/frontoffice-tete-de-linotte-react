import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Loader } from '../../utils/style/Athoms'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Header = () => {
  const [openedDrawer, setOpenedDrawer] = React.useState(false)

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer)
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
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
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={changeNav}>
            <FontAwesomeIcon
              icon={['fab', 'bootstrap']}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Tête de Linotte</span>
          </Link>

          <div
            className={
              'navbar-collapse offcanvas-collapse ' +
              (openedDrawer ? 'open' : '')
            }
          >
            <ul className="navbar-nav me-auto mb-lg-0">
              {categoriesList.map((category) => (
                <li className="nav-item" key={category._id}>
                  <Link
                    to={`/products/category/${category.name}`}
                    className="nav-link"
                    state={{ categoryId: category._id }}
                  >
                    Explore
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link"
                  replace
                  onClick={changeNav}
                >
                  Explore
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-dark me-3 d-none d-lg-inline"
            >
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  href="!#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={['fas', 'user-alt']} />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button
              className="navbar-toggler p-0 border-0 ms-3"
              type="button"
              onClick={toggleDrawer}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
