import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders home page at "/"', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Welcome to MyStore Admin Portal/i)).toBeInTheDocument();
});

test('renders shop page at "/shop"', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByPlaceholderText(/search products/i)).toBeInTheDocument();
});
