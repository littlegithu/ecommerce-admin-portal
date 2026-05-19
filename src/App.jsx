import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/admin" element={<AddProductPage />} />
          <Route path="/shop/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
