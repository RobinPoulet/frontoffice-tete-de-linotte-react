import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Athoms'
import SingleItem from '../../components/SingleItem'

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
  const categoryName = category?.name

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

  return <SingleItem product={product} categoryName={categoryName} />
}
