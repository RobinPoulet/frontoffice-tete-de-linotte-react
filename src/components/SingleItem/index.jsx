import React from 'react'
import { Card, Col } from 'react-bootstrap'

const SingleItem = ({ product }) => {
  const { avatarUrl, description, name, inStock, price } = product
  return (
    <Col lg={10} className="mx-auto">
      <Card className="h-100">
        <Card.Img variant="top" src={avatarUrl} className="h-50" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{inStock ? 'Disponible' : 'Non disponible'}</Card.Text>
          <Card.Text>{price} €</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleItem
