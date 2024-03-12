import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'


import './App.css'
import ProductDetails from './components/ProductDetails'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>

)

export default App