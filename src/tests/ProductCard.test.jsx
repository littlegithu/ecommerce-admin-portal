import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

test('calls onDelete with product id when delete clicked', () => {
  const mockDelete = vi.fn();
  const product = { id: 99, name: 'Test Shoe', price: 50 };
  render(<ProductCard product={product} onDelete={mockDelete} />);
  fireEvent.click(screen.getByText(/delete/i));
  expect(mockDelete).toHaveBeenCalledWith(99);
});
