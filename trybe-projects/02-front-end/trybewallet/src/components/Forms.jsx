import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';
import { expenseData, toEdit, editExpense } from '../actions';
import '../pages/CSS/wallet.css';

const initialState = {
  id: 0,
  value: 0,
  description: '',
  method: '',
  tag: '',
  currency: 'USD',
  exchangeRates: {},
};
class Forms extends Component {
  constructor(props) {
    super(props);
    this.resetState = this.resetState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.spendingValue = this.spendingValue.bind(this);
    this.spendingDescription = this.spendingDescription.bind(this);
    this.spendingCurrency = this.spendingCurrency.bind(this);
    this.spendingMethod = this.spendingMethod.bind(this);
    this.spendingTag = this.spendingTag.bind(this);
    this.submitButton = this.submit.bind(this);
    this.editMode = this.editMode.bind(this);
    this.addOrEdit = this.addOrEdit.bind(this);
    this.state = { expense: initialState, prevId: 0 };
  }

  componentDidUpdate(prev) {
    const { editing, editData } = this.props;
    if (editing && !prev.editing) this.editMode(editData);
  }

  resetState(add) {
    this.setState((prev) => ({ prevId: prev.prevId + add,
      expense: { ...initialState, id: prev.prevId + add } }));
  }

  editMode(expense) {
    this.setState({ expense });
  }

  handleChange({ target: { value, id } }) {
    this.setState((prev) => ({ expense: { ...prev.expense, [id]: value } }));
  }

  spendingValue(value) {
    return (
      <label htmlFor="value">
        Valor
        <input
          data-testid="value-input"
          id="value"
          value={ value }
          type="number"
          step="1.00"
          min="0"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  spendingDescription(description) {
    return (
      <label htmlFor="description">
        Descrição
        <input
          data-testid="description-input"
          id="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  spendingCurrency(currency, currencies) {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          data-testid="currency-input"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((curr) => (
            <option
              data-testid={ curr }
              key={ curr }
              value={ curr }
            >
              {curr}
            </option>
          ))}
        </select>
      </label>
    );
  }

  spendingMethod(method) {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          data-testid="method-input"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option defaultValue hidden>Escolha</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  spendingTag(tag) {
    return (
      <label htmlFor="tag">
        Tag
        <select
          data-testid="tag-input"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option defaultValue hidden>Escolha</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  submit(editing) {
    const { expense } = this.state;
    const { propExpenseData, propEditExpense, propToEdit } = this.props;
    if (editing) {
      propEditExpense(expense);
      this.resetState(0);
      propToEdit(false, {});
    } else {
      propExpenseData(expense);
      this.resetState(1);
    }
  }

  addOrEdit(editing) {
    return (
      <button
        data-testid={ editing ? 'edit-btn' : '' }
        type="button"
        className={ editing ? 'YButton' : 'GButton' }
        onClick={ () => this.submit(editing) }
      >
        {editing ? 'Editar despesa' : 'Adicionar despesa'}
      </button>
    );
  }

  render() {
    const { currencies, editing } = this.props;
    const { expense: { value, description, method, tag, currency } } = this.state;
    return (
      <form className={ editing ? 'edit-table' : 'form-table' }>
        { this.spendingValue(value) }
        { this.spendingDescription(description) }
        { this.spendingCurrency(currency, currencies) }
        { this.spendingMethod(method) }
        { this.spendingTag(tag) }
        { this.addOrEdit(editing) }
      </form>
    );
  }
}

const mapStateToProps = ({
  wallet: { currencies, expenses, edit: { editing, editData } = {} } }) => ({
  currencies, expenses, editing, editData });

const mapDispatchToProps = (dispatch) => ({
  propExpenseData: (data) => dispatch(expenseData(data)),
  propToEdit: (editing, editData) => dispatch(toEdit(editing, editData)),
  propEditExpense: (data) => dispatch(editExpense(data)),
});

Forms.propTypes = {
  currencies: arrayOf(string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
