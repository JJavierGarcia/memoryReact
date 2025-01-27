import { render, screen } from '@testing-library/react';
import Tablero from './Tablero';

test('renders learn react link', () => {
  render(<Tablero />);
  const linkElement = screen.getByText(/memory/i);
  expect(linkElement).toBeInTheDocument();
});
