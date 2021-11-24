export default async function getPlanets() {
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const promisse = await fetch(endPoint);
  const planetsObj = await promisse.json();
  planetsObj.results.forEach((planet) => delete planet.residents);
  // const filmsName = 'https://swapi-trybe.herokuapp.com/api/films/';
  // const filmsPromisse = await fetch(filmsName);
  // const filmesNameObj = await filmsPromisse.json();
  // planetsObj.results.forEach((planet) => {
  //   delete planet.residents;
  //   planet.films.forEach((EP, index) => {
  //     planet.films[index] = `${index + 1} - ${filmesNameObj.results
  //       .find((film) => EP === film.url).title}\n`;
  //   });
  // });
  return planetsObj;
}
