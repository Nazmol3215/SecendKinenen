import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from '../OtherPAges/Test';
import TrendingAndRecommended from '../TrendingAndRecommended/TrendingAndRecommended';
import FilterCatagoori from '../FilterCatagoori/FilterCatagoori';
import Page from '../HoePage/Page';
import ProductGrid from '../OtherPAges/Test';
import OffcanvasExample from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import ProductList from '../OtherPAges/ProductList';

const Index = () => {
  return (
    <BrowserRouter>
    <OffcanvasExample/>
      <Routes>
        <Route path="/ProductGrid" element={<ProductGrid />} />
        <Route path="/" element={<Page/>} />
        <Route path="/TrendingAndRecommended" element={<TrendingAndRecommended />} />
        <Route path="/FilterCatagoori" element={<FilterCatagoori />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Page" element={<Page />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default Index;
