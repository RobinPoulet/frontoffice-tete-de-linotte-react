import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../components/Card'

export default function Products({ products }) {
  let { state } = useLocation()
  const productsList = state
    ? products.filter((product) => product.categoryId === state.categoryId)
    : products

  return (
    <div>
      <ul>
        {productsList.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </ul>
    </div>
  )
}
