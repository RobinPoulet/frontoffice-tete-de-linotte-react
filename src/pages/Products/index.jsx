import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Products({ products }) {
    const location = useLocation()
    console.log(location)
  return (
    <div>
        <p>Products</p>
        <Link to="/products/services"> Services </Link>
        <Outlet />
    </div>
  )
}
