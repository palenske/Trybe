import React from 'react';
import renderWithRouter from '../helpers/renderWithRouter';
import About from '../components/About';

test('has a heading with the text `About Pokédex`', () => {
  const { getByRole } = renderWithRouter(<About />);
  const heading = getByRole('heading', { level: 2, name: 'About Pokédex' });
  expect(heading).toBeInTheDocument();
});

test('has two paragraphs with text about Pokédex', () => {
  const { getAllByText } = renderWithRouter(<About />);
  const paragraphs = getAllByText(/pokémons/i);
  expect(paragraphs.length).toBe(2);
});

test('has a Pokédex img path', () => {
  const { getByAltText } = renderWithRouter(<About />);
  const img = getByAltText(/pokédex/i);
  expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
