import React from 'react'
import Paginate from '../../components/Paginate'
import { useLocation } from 'react-router-dom'
import CardProduct from '../../components/CardProduct'

const Products = ({ products }) => {
  let { state } = useLocation()
  const [currentPage, setCurrentPage] = React.useState(1)
  const viewType = { grid: true, list: false }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const productsList = state
    ? products.filter((product) => product.categoryId === state.categoryId)
    : products

  const itemsPerPage = 9
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const productsToDisplay = productsList.slice(startIndex, endIndex)

  return (
    <div className="row mb-4 mt-lg-3 mt-3">
      <h2 className="text-center">Nos produits</h2>
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
