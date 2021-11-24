import fetchCoins from '../services/apiCoins';

export const login = (email) => ({ type: 'LOGIN', email });
export const updateCurrencies = (data) => ({ type: 'UPDATE_CURRENCIES', data });
export const addExpense = (data) => ({ type: 'ADD_EXPENSE', data });
export const delExpense = (data) => ({ type: 'DELETE_EXPENSE', data });
export const toEdit = (editing, editData) => ({ type: 'TO_EDIT', editing, editData });
export const editExpense = (data) => ({ type: 'EDIT_EXPENSE', data });
export const currenciesData = () => (dispatch) => (
  fetchCoins()
    .then((result) => dispatch(updateCurrencies(Object.keys(result)))));
export const expenseData = (data) => (dispatch) => (
  fetchCoins()
    .then((result) => dispatch(addExpense({ ...data, exchangeRates: result }))));
