import './App.css';
import React, {Component} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {connect} from "react-redux";
import Main from "./components/main/main";
import Sidebar from "./components/sidebar/sidebar";
import HomePage from "./components/_pages/home-page/homePage";
import Catalog from "./components/_pages/catalog/catalog";
import Product from "./components/_pages/product/product";
import Favs from "./components/_pages/favs/favs";
import Cart from "./components/_pages/cart/cart";

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header />
                <Main>
                    <Sidebar />
                    <Routes>
                        <Route path='/'                         element={<HomePage/>}></Route>
                        <Route path='/products/category/:title' element={<Catalog />}></Route>
                        <Route path='/products/:itemId'         element={<Product />}></Route>
                        <Route path='/favorites'                element={<Favs />}></Route>
                        <Route path='/cart'                     element={<Cart />}></Route>
                    </Routes>
                </Main>
            </div>
        </BrowserRouter>
    );
  }
}

export default connect(null)(App);
