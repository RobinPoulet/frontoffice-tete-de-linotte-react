import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Products({ products }) {
  let { state } = useLocation()
  const productsList = state
    ? products.filter((product) => product.categoryId === state.categoryId)
    : products

  return (
    <div>
      <ul>
        {productsList.map((product) => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
