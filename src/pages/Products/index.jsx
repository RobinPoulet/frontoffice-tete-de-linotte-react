import React from 'react'
import Paginate from '../../components/Paginate'
import { useLocation } from 'react-router-dom'
import CardProduct from '../../components/CardProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

const Products = ({ products }) => {
  let { state } = useLocation()
  console.log(state)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [viewType, setViewType] = React.useState({ grid: true })

  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    })
  }

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

  console.log(productsList)

  const itemsPerPage = 9
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage - 1
  const productsToDisplay = productsList.slice(startIndex, endIndex)

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

              <Paginate
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalPages={Math.ceil(productsList.length / itemsPerPage)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
