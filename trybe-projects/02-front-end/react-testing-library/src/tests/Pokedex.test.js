import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import pokemons from '../data';

test('has an h2 with the text `Encountered pokemons`', () => {
  const { getByRole } = renderWithRouter(<App />);
  const heading = getByRole('heading', { level: 2, name: 'Encountered pokémons' });
  expect(heading).toBeInTheDocument();
});

test('shows the next pokémon when the `Next Pokémon` button is clicked', () => {
  const { getByText, getByTestId } = renderWithRouter(<App />);
  const nextBtn = getByText('Próximo pokémon');
  const pokeName = getByTestId('pokemon-name');
  pokemons.forEach(() => {
    fireEvent.click(nextBtn);
  });
  expect(pokeName.textContent).toBe('Pikachu');
});

test('one pokemon at a time', () => {
  const { getAllByTestId } = renderWithRouter(<App />);
  const pokemon = getAllByTestId('pokemon-name');
  expect(pokemon.length).toBe(1);
});

test('have the filter buttons', () => {
  const { getAllByTestId } = renderWithRouter(<App />);
  const filtersBtn = getAllByTestId('pokemon-type-button');
  const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
  filtersBtn.forEach((fil, i) => expect(fil.textContent).toBe(types[i]));
});

test('have a button for reset filters', () => {
  const { getByText } = renderWithRouter(<App />);
  const allBtn = getByText('All');
  expect(allBtn).toBeInTheDocument();
});

test('a filter button is dynamically created for each type of Pokémon.', () => {
  const { getByRole } = renderWithRouter(<App />);
  pokemons.forEach(({ type }) => {
    expect(getByRole('button', { name: type })).toBeInTheDocument();
  });
});

test('`Próximo pokémon` btn should be disabled if there is only one in the list', () => {
  const { getByRole } = renderWithRouter(<App />);
  const nextBtn = getByRole('button', { name: 'Próximo pokémon' });
  fireEvent.click(getByRole('button', { name: 'Normal' }));
  expect(nextBtn).toBeDisabled();
  fireEvent.click(getByRole('button', { name: 'All' }));
  expect(nextBtn).not.toBeDisabled();
});
