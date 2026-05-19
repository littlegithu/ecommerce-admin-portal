import { render, screen, fireEvent } from '@testing-library/react';
import ProductForm from '../components/ProductForm';

test('submits form data', async () => {
  const mockSubmit = vi.fn();
  render(<ProductForm onSubmit={mockSubmit} loading={false} />);
  fireEvent.change(screen.getByPlaceholderText(/product name/i), { target: { value: 'Cool Tee' } });
  fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: 'Soft cotton' } });
  fireEvent.change(screen.getByPlaceholderText(/price/i), { target: { value: '25' } });
  fireEvent.click(screen.getByRole('button', { name: /add product/i }));
  expect(mockSubmit).toHaveBeenCalledWith({
    name: 'Cool Tee',
    description: 'Soft cotton',
    price: 25,
  });
});
