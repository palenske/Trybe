import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pokemons from '../data';
import App from '../App';

const linkText = 'More details';

test('render pokemon card', () => {
  const { getByTestId, getByAltText } = renderWithRouter(<App />);
  const { averageWeight: { value, measurementUnit } } = pokemons[0];
  expect(getByTestId('pokemon-name').textContent).toBe(pokemons[0].name);
  expect(getByTestId('pokemon-type').textContent).toBe(pokemons[0].type);
  expect(getByTestId('pokemon-weight').textContent)
    .toBe(`Average weight: ${value} ${measurementUnit}`);
  expect(getByAltText(`${pokemons[0].name} sprite`).src).toBe(pokemons[0].image);
});

test('has a navigation link to view details and render details page', () => {
  const { getByText } = renderWithRouter(<App />);
  const link = getByText(linkText);
  expect(link).toBeInTheDocument();
  fireEvent.click(link);
  const summary = getByText('Summary');
  expect(summary).toBeInTheDocument();
});

test('changes path to `/pokemon/<id>`', () => {
  const { getByText, history } = renderWithRouter(<App />);
  fireEvent.click(getByText(linkText));
  const { pathname } = history.location;
  expect(pathname).toBe(`/pokemons/${pokemons[0].id}`);
});

test('there is a star icon in favorite Pokemons', () => {
  const { getByText, getByAltText } = renderWithRouter(<App />);
  fireEvent.click(getByText(linkText));
  fireEvent.click(getByText('Pokémon favoritado?'));
  const image = getByAltText(`${pokemons[0].name} is marked as favorite`);
  expect(image.src).toContain('/star-icon.svg');
});
