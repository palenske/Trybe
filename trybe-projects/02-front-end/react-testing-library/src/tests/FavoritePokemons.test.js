import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

test('`No favorite pokemon found` message if you dont have favorite pokemons', () => {
  renderWithRouter(<FavoritePokemons />);
  const notFound = screen.getByText('No favorite pokemon found');
  expect(notFound).toBeInTheDocument();
});

test('Displays all favorite pokemons', () => {
  renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
  pokemons.forEach((pokemon) => {
    const name = screen.getByText(pokemon.name);
    expect(name).toBeInTheDocument();
  });
});
