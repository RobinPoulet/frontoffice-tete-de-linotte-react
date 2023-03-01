import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useLocation } from 'react-router-dom'
import CardProduct from '../../components/CardProduct'
import styled from 'styled-components'

const ProductsListWrapper = styled.div`
  margin: 4%;
  padding: 3%;
`

export default function Products({ products }) {
  let { state } = useLocation()

  const productsList = state
    ? products.filter((product) => product.categoryId === state.categoryId)
    : products

  const rows = Math.ceil(productsList.length / 3) // calculer le nombre de lignes
  const productRows = [] // tableau de sous-tableaux de 3 produits chacun

  for (let i = 0; i < rows; i++) {
    productRows.push(productsList.slice(i * 3, i * 3 + 3))
  }

  return (
    <ProductsListWrapper className="container-fluid">
      {productRows.map((row, rowIndex) => (
        <Row key={rowIndex} xs={2} md={3} className="g-4">
          {row.map((product, productIndex) => (
            <Col key={productIndex}>
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </ProductsListWrapper>
  )
}
