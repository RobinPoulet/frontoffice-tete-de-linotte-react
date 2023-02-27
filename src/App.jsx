import React from 'react'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Product from './pages/Product';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom'
import { useQuery } from 'react-query';
import styled from 'styled-components'
import { Loader } from './utils/style/Athoms'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const App = () => {
  const { isLoading, error, data } = useQuery('products', async () => {
    const response = await fetch('https://api-tdl-backend.herokuapp.com/api/product')
    const data = await response.json()
    return data
  })
  
  const productsList = data?.products
  
  if (error) {
    return <span>Il y a un problème avec l'API</span>
  }
  
  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    )
  }
  
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={productsList} />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/products/category/:categoryName" element={<Products products={productsList} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
