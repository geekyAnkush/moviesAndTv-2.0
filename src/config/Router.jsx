import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Details from '../pages/detail/Detail';

const Router = () => {
    return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:category" element={<Catalog />}></Route>
        <Route path="/:category/:id" element={<Details />}></Route>
        <Route path="/:category/search/:keyword" element={<Catalog />}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    );
}

export default Router

