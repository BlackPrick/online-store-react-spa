import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './components/elements/header/Header';
import Footer from './components/elements/footer/Footer';
import Cart from './components/elements/cart/Cart';
import Bookmarks from './components/elements/bookmarks/Bookmarks'
import Main from './components/pages/main/Main';
import Catalog from './components/pages/catalog/Catalog';
import GoodsPage from './components/pages/goods-page/GoodsPage';
import Error from './components/pages/error/Error';
import DeliveryReturns from './components/pages/delivery-returns/DeliveryReturns';

import { basename } from './urls.json';

function App() {
  return (
    <>
      <Router basename={basename}>
        <Header />

        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/catalog" element={<Error />}></Route>
          <Route path="/catalog/:category/:page/:sorting" element={<Catalog />}></Route>
          <Route path="/catalog/:category/:page/" element={<Catalog />}></Route>
          <Route path="/catalog/:category" element={<Catalog />}></Route>
          <Route path="/goods/:goodsId" element={<GoodsPage />}></Route>
          <Route path="/delivery-returns/" element={<DeliveryReturns />}></Route>

          <Route path="*" element={<Error />} />
        </Routes>

        <Cart />
        <Bookmarks />
        <Footer />
      </Router>
    </>
  );
}

export default App;
