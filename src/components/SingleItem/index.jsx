import React from 'react'
import { Card, Col, Badge, Row } from 'react-bootstrap'

const SingleItem = ({ product }) => {
  const { avatarUrl, description, name, inStock, price } = product
  return (
    <Card border="dark" lg={8} className="mx-auto p-4 w-75" bg="light">
      <Row>
        <Col lg={6} className="mx-auto">
          <Card.Img
            src={avatarUrl}
            className="card-img"
            style={{ width: '200px', height: '200px' }}
          />
        </Col>
        <Col lg={6} className="mx-auto">
          <Card.Title className="h1">{name}</Card.Title>
          <br />
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              {inStock ? (
                <Badge pill bg="success" className="mb-2">
                  Disponible
                </Badge>
              ) : (
                <Badge pill bg="danger" className="mb-2">
                  Non disponible
                </Badge>
              )}
            </Card.Text>
            <Card.Text>{price} €</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default SingleItem
