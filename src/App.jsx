import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { Loader } from './utils/style/Athoms'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const App = () => {
  const {
    isLoading: isLoadingProducts,
    error: errorProducts,
    data: dataProducts,
  } = useQuery('products', async () => {
    const response = await axios.get(
      'https://api-tdl-backend.herokuapp.com/api/product'
    )
    return response.data
  })

  const productsList = dataProducts?.products

  const carrousselProductsList = productsList?.slice(0, 5)

  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useQuery('categories', async () => {
    const response = await axios.get(
      'https://api-tdl-backend.herokuapp.com/api/category'
    )
    return response.data
  })

  const categoriesList = dataCategories?.categories

  if (errorProducts || errorCategories) {
    return <span>Il y a un problème avec l'API</span>
  }

  if (isLoadingProducts || isLoadingCategories) {
    return (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    )
  }

  return (
    <div>
      <Header categoriesList={categoriesList} />
      <Routes>
        <Route
          path="/"
          element={<Home carrousselProductsList={carrousselProductsList} />}
        />
        <Route
          path="/products"
          element={
            <Products products={productsList} isStartPagination={true} />
          }
        />
        <Route path="/products/:productId" element={<Product />} />
        <Route
          path="/products/category/:categoryName"
          element={
            <Products products={productsList} isStartPagination={true} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
