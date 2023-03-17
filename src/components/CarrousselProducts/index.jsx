import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarrousselProducts = ({ carrousselProductsList }) => {
  const dic = ['Fisrt', 'Second', 'Third']
  return (
    <Carousel style={{ width: '50%', height: '50%' }}>
      {carrousselProductsList.map((product, productIndex) => (
        <Carousel.Item key={product._id}>
          <img
            className="d-block w-100"
            src={product.avatarUrl}
            alt={`${dic[productIndex]} slide`}
          />
          <Carousel.Caption className="text-center">
            <h3 className="text-center">{product.name}</h3>
            <p className="text-center">{product.price} €</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarrousselProducts
