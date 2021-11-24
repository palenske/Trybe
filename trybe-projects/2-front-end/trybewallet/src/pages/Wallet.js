import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, object } from 'prop-types';
import { currenciesData } from '../actions';
import { Header, Forms } from '../components';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { propCurrenciesData } = this.props;
    propCurrenciesData();
  }

  render() {
    return (
      <>
        <Header />
        <Forms />
        <Table />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  propCurrenciesData: () => dispatch(currenciesData()),
});

Wallet.propTypes = {
  email: string,
  expenses: arrayOf(object),
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
