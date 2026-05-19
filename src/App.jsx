import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function AppContent() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className={isLanding ? 'landing-main' : 'container'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/admin" element={<AddProductPage />} />
          <Route path="/shop/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      {/* Footer removed */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;