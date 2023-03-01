import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

const CardProduct = ({ product }) => {
  // liste des attributs de products : _id, avatarUrl, description, inStock, name, price
  const { avatarUrl, description, name } = product

  return (
    <Card bg="light" text="dark" style={{ width: '18rem' }} className="mb-2">
      <Card.Img variant="top" src={avatarUrl} className="w-50" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
}

export default CardProduct
