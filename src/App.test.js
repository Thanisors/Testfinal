import { render, screen } from '@testing-library/react';
import Home from './Pages/Home/home.component';

test('Thanisorn', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Thanisorn/i);
  expect(linkElement).toBeInTheDocument();
});
