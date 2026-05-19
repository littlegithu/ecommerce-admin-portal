import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ProductsPage from '../pages/ProductsPage';

// Mock the API calls to avoid actual fetch in tests
vi.mock('../services/api', () => ({
  getProducts: vi.fn(() => Promise.resolve([])),
  deleteProduct: vi.fn(),
}));

test('renders landing page at "/"', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <LandingPage />
    </MemoryRouter>
  );
  expect(screen.getByText(/Welcome to MyStore Admin Portal/i)).toBeInTheDocument();
});

test('renders shop page with search input', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <ProductsPage />
    </MemoryRouter>
  );
  expect(screen.getByPlaceholderText(/search products/i)).toBeInTheDocument();
});
