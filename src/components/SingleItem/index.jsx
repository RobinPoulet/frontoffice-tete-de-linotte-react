import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SingleItem = ({ product }) => {
  const { avatarUrl, description, name, inStock, price } = product
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="200"
          alt=""
          src={avatarUrl}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            {name}
          </h5>
          <p className="card-text text-center text-muted mb-0">{price}</p>
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3">
              <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleItem
