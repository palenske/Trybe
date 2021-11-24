import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../App.css';

export default function Filters() {
  const { delFilter, filters: { filterByNumericValues } } = useContext(PlanetsContext);
  return (
    <div className="filter-display">
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <span key={ index } data-testid="filter">
          {` ${column.replace('_', ' ')}, ${comparison} ${value} `}
          <button
            type="button"
            onClick={ () => delFilter(column) }
          >
            X
          </button>
        </span>
      ))}
    </div>
  );
}
