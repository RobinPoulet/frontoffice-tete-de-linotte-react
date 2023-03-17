import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarrousselProducts = ({ carrousselProductsList }) => {
  const dic = ['Fisrt', 'Second', 'Third']
  return (
    <Carousel>
      {carrousselProductsList.map((product, productIndex) => (
        <Carousel.Item key={product._id}>
          <img
            className="d-block w-100"
            src={product.avatarUrl}
            alt={`${dic[productIndex]} slide`}
          />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarrousselProducts
