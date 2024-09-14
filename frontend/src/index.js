import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landing page/home/HomePage';
import Signup from "../src/landing page/signup/Signup";
import AboutPage from "../src/landing page/about/AboutPage";
import ProductPage from "../src/landing page/products/ProductPage";
import PricingPage from "../src/landing page/pricing/PricingPage";
import SupportPage from "../src/landing page/support/SupportPage";
import Navbar from './Navbar';
import Footer from './Fotter';
import NotFound from './landing page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}> </Route> {/* / home path homepage page element work  vhayala pahije */}
    <Route path="/signup" element={<Signup/>}> </Route> 
    <Route path="/about" element={<AboutPage/>}> </Route> 
    <Route path="/product" element={<ProductPage/>}> </Route> 
    <Route path="/pricing" element={<PricingPage/>}> </Route> 
    <Route path="/support" element={<SupportPage/>}> </Route> 
    <Route path='*' element={<NotFound/>}></Route> {/* * means jar varche kontehi route tun match nahi karnar tar he dakhva*/}
  </Routes>
  <Footer/>
  </BrowserRouter> //he wraper ahe 
);

