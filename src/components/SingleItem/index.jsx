import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SingleItem = ({ product }) => {
  const { avatarUrl, description, name, inStock, price } = product
  return (
    <div className="container mt-5 py-4 px-xl-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={avatarUrl}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">Nillkin iPhone X cover</h2>
            <h4 className="text-muted mb-4">10000 Ks</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  Add to cart
                </button>
              </div>
              <div className="col">
                <button className="btn btn-dark py-2 w-100">Buy now</button>
              </div>
            </div>

            <h4 className="mb-0">Details</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Code</dt>
              <dd className="col-sm-8 mb-3">C0001</dd>

              <dt className="col-sm-4">Category</dt>
              <dd className="col-sm-8 mb-3">Cases & Covers</dd>
              <dd className="col-sm-8 mb-3">
                {inStock ? (
                  <div className="badge bg-success">In stock</div>
                ) : (
                  <div className="badge bg-danger">Out of stock</div>
                )}
              </dd>
            </dl>

            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>{description}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleItem
