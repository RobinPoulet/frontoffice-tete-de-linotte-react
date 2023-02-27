import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Athoms'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Product() {
  const { productId } = useParams()
  const {
    isLoading: isLoadingProduct,
    error: errorProduct,
    data: productData,
  } = useQuery(['product', productId], async () => {
    const response = await fetch(
      `https://api-tdl-backend.herokuapp.com/api/product/${productId}`
    )
    return await response.json()
  })

  const {
    isLoading: isLoadingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQuery(
    ['category', productData?.product.categoryId],
    async () => {
      const response = await fetch(
        `https://api-tdl-backend.herokuapp.com/api/category/${productData.product.categoryId}`
      )
      return await response.json()
    },
    {
      enabled: !!productData?.product.categoryId,
    }
  )

  const { product } = productData || {}
  const { category } = dataCategory || {}

  if (errorProduct || errorCategory) {
    return <span>Il y a un problème avec l'API</span>
  }

  if (isLoadingProduct || isLoadingCategory) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )
  }

  return (
    <Card>
      <Card.Header>{category.name}</Card.Header>
      <Card.Img variant="top" src={product.avatarUrl} className="w-25" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
  )
}
