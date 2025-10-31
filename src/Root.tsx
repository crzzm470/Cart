import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import App from './App'; 
import { ProductList } from './components/ProductList/ProductList'; 
import { ProductDetail } from './components/ProductDetail/ProductDetail'; 
import './App.css'; 
import { JSX } from 'react';

export default function Root(): JSX.Element {
  return (
    <BrowserRouter> 
      <ThemeProvider>
        <CartProvider>
          <App> 
            <Routes> 
              <Route path="/" element={<ProductList />} /> 
              <Route path="/producto/:id" element={<ProductDetail />} />
            </Routes>
          </App>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}