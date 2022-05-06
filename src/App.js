import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddProduct from './pages/AddProduct ';
import EditProduct from './pages/EditProduct';
import FavoritProducts from './pages/FavoriteProducts';
import Main from './pages/Main'
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail'


function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/edidProduct' element={<EditProduct />} />
          <Route path='/favoriteProducts' element={<FavoritProducts />} />
          <Route path='/main' element={<Main />} />
          <Route path='/searchResults' element={<SearchResults />} />
          <Route path='/productDetail' element={<ProductDetail />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;