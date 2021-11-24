import React from 'react';
import renderWithRouter from '../helpers/renderWithRouter';
import NotFound from '../components/NotFound';

test('has a h2 with the text `Page requested not found 😭`', () => {
  const { getByRole } = renderWithRouter(<NotFound />);
  const heading = getByRole('heading', { level: 2, name: /Page requested not found/i });
  expect(heading).toBeInTheDocument();
});

test('shows image `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`', () => {
  const { getByAltText } = renderWithRouter(<NotFound />);
  const img = getByAltText('Pikachu crying because the page requested was not found');
  expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
