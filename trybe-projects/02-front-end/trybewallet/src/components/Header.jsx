import React, { Component } from 'react';
import { objectOf, object, string } from 'prop-types';
import '../pages/CSS/wallet.css';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { expenses, email } = this.props;
    const totalSpending = expenses.reduce((acc, curr) => (
      acc + ((curr.value) * (curr.exchangeRates[curr.currency].ask))), 0).toFixed(2);
    return (
      <header className="app-header">
        <span data-testid="email-field">{`User: ${email}`}</span>
        <span data-testid="total-field">{`Gastos: $ ${totalSpending}`}</span>
        <span data-testid="header-currency-field">Moeda: BRL</span>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email, expenses });

Header.propTypes = {
  expenses: objectOf(object),
  email: string,
}.isRequired;

export default connect(mapStateToProps)(Header);
