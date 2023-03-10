import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ReactPaginate from 'react-paginate'
import { useLocation } from 'react-router-dom'
import CardProduct from '../../components/CardProduct'
import styled from 'styled-components'

const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: 1fr;
  align-content: start;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const CardProductWrapper = styled.div`
  height: 650px;
`

const Products = ({ products }) => {
  let { state } = useLocation()
  const [currentPage, setCurrentPage] = React.useState(0)
  const viewType = { grid: true, list: false }

  const productsList = state
    ? products.filter((product) => product.categoryId === state.categoryId)
    : products

  const itemsPerPage = 9
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const productsToDisplay = productsList.slice(startIndex, endIndex)

  function handlePageClick({ selected }) {
    setCurrentPage(selected)
  }

  return (
    <div className="row mb-4 mt-lg-3 mt-3">
      <h2>Prodcuts List</h2>
      <div className="d-none d-lg-block col-lg-3">
        <div className="border rounded shadow-sm"></div>
      </div>
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

              <ReactPaginate
                pageCount={Math.ceil(products.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
