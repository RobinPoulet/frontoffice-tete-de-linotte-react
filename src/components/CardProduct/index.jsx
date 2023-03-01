import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardProduct = ({ product }) => {
  // liste des attributs de products : _id, avatarUrl, description, inStock, name, price
  const { avatarUrl, description, name, inStock, price, _id } = product

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatarUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{inStock ? 'Disponible' : 'Non disponible'}</Card.Text>
        <Card.Text>{price} €</Card.Text>
        <Link to={`/products/${_id}`}>
          <Button variant="primary">Voir le produit</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
}

export default CardProduct
