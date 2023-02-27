import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Athoms'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Category = () => {
  const { name } = useParams()
  let { state } = useLocation()
  const { categoryId } = state

  const { isLoading, error, data } = useQuery(
    ['product', categoryId],
    async () => {
      const response = await fetch(
        `https://api-tdl-backend.herokuapp.com/api/product/category/${categoryId}`
      )
      const data = await response.json()
      return data
    }
  )

  const productsList = data?.products || []

  if (error) {
    return <span>Il y a un problème avec l'API</span>
  }

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )
  }

  return (
    <div>
      <h3>Category {name}</h3>
      <ul>
        {productsList.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category
