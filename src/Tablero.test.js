import { render, screen } from '@testing-library/react';
import Tablero from './Tablero';

test('renders Tablero y comprueba que hay 8 cartas', () => {
  render(<Tablero />);
  const numeroCartas = screen.getByText(/8/i);
  expect(numeroCartas).toBeInTheDocument();
});
