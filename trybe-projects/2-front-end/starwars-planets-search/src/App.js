import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import { Header, SearchBar, Filters, Table } from './components';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <SearchBar />
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
