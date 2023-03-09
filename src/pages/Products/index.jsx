import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useLocation } from 'react-router-dom'
import CardProduct from '../../components/CardProduct'
import styled from 'styled-components'

const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const CardProductWrapper = styled.div`
  height: 650px;
  width: 350px;
`

const Products = ({ products }) => {
  let { state } = useLocation()

  const productsList = state
    ? products.filter((product) => product.categoryId === state.categoryId)
    : products

  const rows = Math.ceil(productsList.length / 3)
  const productRows = []

  for (let i = 0; i < rows; i++) {
    productRows.push(productsList.slice(i * 3, i * 3 + 3))
  }

  return (
    <ProductsListWrapper className="container-fluid">
      <Row className="d-flex justify-content-center">
        {productRows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((product, productIndex) => (
              <Col key={productIndex}>
                <CardProductWrapper>
                  <CardProduct product={product} />
                </CardProductWrapper>
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
    </ProductsListWrapper>
  )
}

export default Products
