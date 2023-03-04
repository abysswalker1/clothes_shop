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
class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header />
                <Main>
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<HomePage/>}></Route>
                        <Route path='/products/category/:title' element={<Catalog />}></Route>
                    </Routes>
                </Main>
            </div>
        </BrowserRouter>
    );
  }
}

export default connect(null)(App);
