import React, { useEffect } from 'react'
import Paginate from '../../components/Paginate'
import { useLocation } from 'react-router-dom'
import CardProduct from '../../components/CardProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

const Products = ({ products }) => {
  const { state } = useLocation()
  const [currentPage, setCurrentPage] = React.useState(1)
  const [viewType, setViewType] = React.useState({ grid: true })
  const [itemsPerPage, setItemsPerPage] = React.useState(9)

  useEffect(() => {
    setCurrentPage(1)
  }, [state])

  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    })
    setItemsPerPage(itemsPerPage === 9 ? 6 : 9)
  }

  console.log(itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const productsList = state
    ? state.childCategoryId
      ? products.filter(
          (product) =>
            product.categoryId === state.childCategoryId ||
            state.childCategoryId.includes(product.categoryId)
        )
      : products.filter((product) => product.categoryId === state.categoryId)
    : products

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage - 1
  const productsToDisplay = productsList.slice(startIndex, endIndex + 1)

  return (
    <div className="row mb-4 mt-lg-3 mt-3">
      <Container fluid>
        <Row>
          <Col xs lg="10">
            <h2 className="text-center">Nos produits</h2>
          </Col>
          <Col xs lg="2">
            <button
              className="btn btn-outline-dark ms-2 d-none d-lg-inline"
              onClick={changeViewType}
            >
              <FontAwesomeIcon
                icon={['fas', viewType.grid ? 'th-list' : 'th-large']}
              />
            </button>
          </Col>
        </Row>
      </Container>
      <div className="d-none d-lg-block col-lg-3"></div>
      <div className="col-lg-9">
        <div className="d-flex flex-column h-100">
          <div className="row mb-3">
            <div
              className={
                'row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 ' +
                (viewType.grid ? 'row-cols-xl-3' : 'row-cols-xl-2')
              }
            >
              {productsToDisplay.map((product, productIndex) => (
                <CardProduct key={productIndex} product={product} />
              ))}
            </div>
          </div>
          <Paginate
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={Math.ceil(productsList.length / itemsPerPage)}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
