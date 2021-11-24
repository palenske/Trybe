import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = renderWithRouter(<App />);
  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

test('top navigation menu', () => {
  const { getAllByRole } = renderWithRouter(<App />);
  const links = getAllByRole('link');
  expect(links[0].textContent).toBe('Home');
  expect(links[1].textContent).toBe('About');
  expect(links[2].textContent).toBe('Favorite Pokémons');
});

test('Home page (`/`) by clicking `Home`', () => {
  const { getByText, history } = renderWithRouter(<App />);
  fireEvent.click(getByText('Home'));
  expect(history.location.pathname).toBe('/');
});

test('About page (`/about`) by clicking `About`', () => {
  const { getByText, history } = renderWithRouter(<App />);
  fireEvent.click(getByText('About'));
  expect(history.location.pathname).toBe('/about');
});

test('Pokémons Favoritados page (`/favorites`) by clicking `Favorite Pokémons`', () => {
  const { getByText, history } = renderWithRouter(<App />);
  fireEvent.click(getByText('Favorite Pokémons'));
  expect(history.location.pathname).toBe('/favorites');
});

test('Not Found if URL is invalid', () => {
  const { getByText, history } = renderWithRouter(<App />);
  history.push('/invalid-URL');
  const notFound = getByText(/Page requested not found/i);
  expect(notFound).toBeInTheDocument();
});
