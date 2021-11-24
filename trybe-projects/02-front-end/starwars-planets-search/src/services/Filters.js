export function byName(planets, text) {
  return planets.filter((planet) => planet.name.toLowerCase().includes(text));
}

export function byNumeric(planets, arrayFilters) {
  let filtredPlanets = planets;
  arrayFilters.forEach(({ column, comparison, value }) => {
    filtredPlanets = filtredPlanets.filter((planet) => {
      if (comparison === 'maior que') {
        return +planet[column] > +value;
      } if (comparison === 'menor que') {
        return +planet[column] < +value;
      } if (comparison === 'igual a') {
        return +planet[column] === +value;
      }
      return null;
    });
  });
  return arrayFilters.length > 0 ? filtredPlanets : planets;
}

const asc = (planets, column) => planets.sort((a, b) => {
  const negativeOne = -1;
  if (!Number.isNaN(+planets[0][column])) return a[column] - b[column];
  if (a[column] > b[column]) return 1;
  if (a[column] < b[column]) return negativeOne;
  return 0;
});

const desc = (planets, column) => planets.sort((a, b) => {
  const negativeOne = -1;
  if (!Number.isNaN(+planets[0][column])) return b[column] - a[column];
  if (a[column] < b[column]) return 1;
  if (a[column] > b[column]) return negativeOne;
  return 0;
});

export function byOrder(planets, { column, sort }) {
  if (sort === 'ASC') {
    return asc(planets, column);
  } return desc(planets, column);
}
