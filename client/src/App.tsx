import './App.css';
import React, {Component} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {connect} from "react-redux";
import HomePage from "./components/_pages/home-page/homePage";
import Catalog from "./components/_pages/catalog/catalog";
import Product from "./components/_pages/product/product";
import Favs from "./components/_pages/favs/favs";
import Cart from "./components/_pages/cart/cart";
import { getProductsThunk } from './store/productsReducer';
import Footer from './components/footer/Footer';
import Main from './components/main/main';
import Sale from './components/_pages/sale/sale';
import Register from './components/_pages/auth/register/Register';

type Props = {
    getProductsThunk: () => any
}

class App extends Component<Props> {
  componentDidMount(): void {
    this.props.getProductsThunk();
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Header />
          <Main>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/products/' element={<Catalog />}>
                <Route path='category/:title' element={<Catalog />} ></Route>   
              </Route>
              <Route path='/products/:itemId' element={<Product />} ></Route>
              <Route path='/favorites' element={<Favs />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/sale' element={<Sale />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Routes>
          </Main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { getProductsThunk })(App);
