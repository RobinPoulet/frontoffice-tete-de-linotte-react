import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Athoms'
import { Nav, NavDropdown } from 'react-bootstrap'

const Header = ({ categoriesList }) => {
  const [listState, setListState] = React.useState({})

  const handleListState = (categoryId, value) => {
    setListState((prevState) => ({
      ...prevState,
      [categoryId]: value,
    }))
  }

  const handleMouseOver = (categoryId) => {
    handleListState(categoryId, true)
  }

  const handleMouseLeave = (categoryId) => {
    handleListState(categoryId, false)
  }

  const parentCategoriesList = categoriesList?.filter(
    (category) => !category.categoryId
  )

  const childCategoriesList = (parentCategoryId) =>
    categoriesList.filter(
      (category) => category.categoryId === parentCategoryId
    )

  const isCategoryParent = (categoryId) =>
    categoriesList.some((category) => category.categoryId === categoryId)

  const getCategoryChildId = (categoryId) =>
    categoriesList
      .filter((category) => category.categoryId === categoryId)
      .map((category) => category._id)

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
            {parentCategoriesList &&
              parentCategoriesList.map((category) =>
                isCategoryParent(category._id) ? (
                  <li
                    className="nav-item mt-1"
                    onMouseOver={() => handleMouseOver(category._id)}
                    onMouseLeave={() => handleMouseLeave(category._id)}
                    key={category._id}
                  >
                    <NavDropdown
                      title={category.name}
                      id="basic-nav-dropdown"
                      show={listState[category._id]}
                    >
                      <Link
                        to={`/products/category/${category.name}`}
                        state={{
                          categoryId: category._id,
                          childCategoryId: getCategoryChildId(category._id),
                        }}
                        className="dropdown-item"
                      >
                        Voir tous les produits
                      </Link>
                      {childCategoriesList(category._id).map(
                        (childCategory) => (
                          <Link
                            key={childCategory._id}
                            to={`/products/category/${childCategory.name}`}
                            state={{ categoryId: childCategory._id }}
                            className="dropdown-item"
                          >
                            {childCategory.name}
                          </Link>
                        )
                      )}
                    </NavDropdown>
                  </li>
                ) : (
                  <li className="nav-item" key={category._id}>
                    <Nav.Link
                      as={StyledLink}
                      to={`/products/category/${category.name}`}
                      state={{ categoryId: category._id }}
                    >
                      {category.name}
                    </Nav.Link>
                  </li>
                )
              )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
