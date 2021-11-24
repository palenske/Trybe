import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import { delExpense, toEdit } from '../actions';
import '../pages/CSS/wallet.css';

class Table extends Component {
  constructor() {
    super();
    this.tableHead = this.tableHead.bind(this);
    this.tableBody = this.tableBody.bind(this);
  }

  tableHead() {
    const head = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <thead>
        <tr>
          { head.map((item, i) => <th key={ i }>{item}</th>)}
        </tr>
      </thead>
    );
  }

  tableBody(expenses, editing, propDelExpense, propToEdit) {
    if (expenses.length > 0) {
      return (
        <tbody>
          { expenses
            .map(({
              id, description, tag, method, value, currency, exchangeRates,
            }, index) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name.split('/')[0]}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <div className="button-box">
                    <button
                      type="button"
                      className="YButton"
                      data-testid="edit-btn"
                      onClick={ () => !editing && propToEdit(true, expenses[index]) }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="RButton"
                      data-testid="delete-btn"
                      onClick={ () => !editing && propDelExpense(id) }
                    >
                      Deletar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      );
    }
  }

  render() {
    const { expenses, editing, propDelExpense, propToEdit } = this.props;
    return (
      <table className="expenses-table">
        { this.tableHead() }
        { this.tableBody(expenses, editing, propDelExpense, propToEdit) }
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses, edit: { editing } = {} } }) => ({
  expenses, editing });

const mapDispatchToProps = (dispatch) => ({
  propDelExpense: (data) => dispatch(delExpense(data)),
  propToEdit: (editing, editData) => dispatch(toEdit(editing, editData)),
});

Table.propTypes = {
  expenses: arrayOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
