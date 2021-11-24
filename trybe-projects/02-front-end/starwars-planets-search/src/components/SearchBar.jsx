import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../App.css';

function SearchBar() {
  const {
    data: { results },
    selectColumns,
    selectFilter,
    handleName,
    handleFilter,
    handleOrder,
    addFilter,
    setOrder,
  } = useContext(PlanetsContext);

  const filterForms = () => (
    <form className="App-search-bar">
      <input type="text" id="name" data-testid="name-filter" onChange={ handleName } />
      <select
        data-testid="column-filter"
        id="column"
        value={ selectFilter.column }
        onChange={ handleFilter }
      >
        {selectColumns.map((column, index) => (
          <option key={ index } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison"
        value={ selectFilter.comparison }
        onChange={ handleFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        style={ { width: 100 } }
        data-testid="value-filter"
        id="value"
        type="number"
        value={ selectFilter.value }
        onChange={ handleFilter }
      />
      <button
        data-testid="button-filter"
        type="button"
        disabled={ !selectColumns.length > 0 }
        onClick={ addFilter }
      >
        Filtrar
      </button>
    </form>
  );

  const sortForms = () => (
    results && (
      <form className="App-order-bar">
        <select
          data-testid="column-sort"
          name="column"
          onChange={ handleOrder }
        >
          {Object.keys(results[0]).map((item) => (
            <option key={ item } value={ item }>{item}</option>))}
        </select>
        <div className="input-box">
          <label htmlFor="ASC">
            ASC
            <input
              defaultChecked
              type="radio"
              data-testid="column-sort-input-asc"
              id="ASC"
              value="ASC"
              name="sort"
              onChange={ handleOrder }
            />
          </label>
          <label htmlFor="DESC">
            DESC
            <input
              type="radio"
              data-testid="column-sort-input-desc"
              id="DESC"
              value="DESC"
              name="sort"
              onChange={ handleOrder }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ setOrder }
        >
          Ordenar
        </button>
      </form>
    )
  );

  return (
    <div>
      {filterForms()}
      {sortForms()}
    </div>
  );
}

export default SearchBar;
