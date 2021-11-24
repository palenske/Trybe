import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { byName, byNumeric, byOrder } from '../services/Filters';
import '../App.css';

function Table() {
  const {
    data: { results },
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order,
    },
  } = useContext(PlanetsContext);
  if (!results) return <div className="loading">loading</div>;
  return (
    <table className="App-table">
      <thead className="table-head">
        <tr>
          {Object.keys(results[0]).map((key) => (
            <th key={ key }>{`${key.replace('_', ' ')}`}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {byOrder(byNumeric(byName(results, name), filterByNumericValues), order).map(
          (planet, i) => (
            <tr key={ i }>
              {Object.values(planet).map((value) => (
                <td
                  key={ value }
                  data-testid={ planet.name === value ? 'planet-name' : null }
                >
                  {value.includes('https')
                    ? <a href={ value }>{`Planet: ${value.split('/')[5]}`}</a>
                    : value }
                </td>
              ))}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default Table;
