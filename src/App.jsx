import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import ProductList from './component/ProductList/ProductList';
import Social from './component/Social/Social';
import ServiceOption from './component/ServiceOption/ServiceOption';
import Services from './component/Services/Services';
import CarService from './component/CarService/CarService';
import BanhMiService from './component/BanhMiService/BanhMiService';
import './App.css';

function App() {
  return (
    <Router basename="/dtlservices">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Services />
            <ServiceOption />
            <ProductList />
            <Social />
          </>
        } />
        <Route path="/car-service" element={
          <>
            <Header />
            <CarService />
          </>
        } />
        <Route path="/banh-mi" element={
          <>
            <Header />
            <BanhMiService />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App; 