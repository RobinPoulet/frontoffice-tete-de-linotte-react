import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardProduct = ({ product }) => {
  // liste des attributs de products : _id, avatarUrl, description, inStock, name, price
  const { avatarUrl, name, inStock, price, _id } = product

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to={`/products/${_id}`}>
          {inStock ? (
            <div
              className="badge bg-success position-absolute"
              style={{ top: '0.5rem', right: '0.5rem' }}
            >
              In stock
            </div>
          ) : (
            <div
              className="badge bg-danger position-absolute"
              style={{ top: '0.5rem', right: '0.5rem' }}
            >
              Out of stock
            </div>
          )}

          <img
            className="card-img-top bg-dark cover"
            height="200"
            alt=""
            src={avatarUrl}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            {name}
          </h5>
          <p className="card-text text-center text-muted mb-0">{price}€</p>
          <div className="d-grid d-block">
            <div className="row text-center">
              <div className="col-6">
                <button
                  className="btn btn-outline-dark mt-3"
                  disabled={!inStock}
                >
                  <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
                </button>
              </div>
              <div className="col-6">
                <Link to={`/products/${_id}`}>
                  <button className="btn btn-outline-secondary mt-3">
                    <FontAwesomeIcon icon={['fas', 'eye']} /> Détails produit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
}

export default CardProduct
