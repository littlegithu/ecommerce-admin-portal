import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

test('calls onDelete with product id when delete clicked', () => {
  const mockDelete = vi.fn();
  const product = { id: 99, name: 'Test Shoe', price: 50 };
  render(
    <MemoryRouter>
      <ProductCard product={product} onDelete={mockDelete} />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText(/delete/i));
  expect(mockDelete).toHaveBeenCalledWith(99);
});
