import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import { validateEmail, validateName, validatePassword } from '../utils/inputValidation';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function Register() {
  const [disable, setDisable] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [validateReg, setValidateReg] = useState(false);
  const [registerState, setRegisterState] = useState(initialState);

  const prefix = 'common_register__';

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3001/register', registerState);
      localStorage.setItem('user', JSON.stringify(data));
      setRedirect(true);
    } catch (err) {
      setValidateReg(true);
    }
  };

  useEffect(() => {
    const { email, name, password } = registerState;
    setValidateReg(false);
    if (validateEmail(email) && validateName(name) && validatePassword(password)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [registerState]);

  return (
    <>
      <h3>Cadastro</h3>
      <form method="post">
        <label htmlFor="Nome">
          Nome:
          <input
            value={ registerState.name }
            name="name"
            data-testid={ `${prefix}input-name` }
            type="text"
            required
            onChange={ ({ target }) => setRegisterState({
              ...registerState, name: target.value }) }
          />
        </label>
        <label htmlFor="Email">
          Email:
          <input
            value={ registerState.email }
            data-testid={ `${prefix}input-email` }
            name="name"
            type="text"
            required
            onChange={ ({ target }) => setRegisterState({
              ...registerState, email: target.value }) }
          />
        </label>
        <label htmlFor="Password">
          Senha:
          <input
            value={ registerState.password }
            data-testid={ `${prefix}input-password` }
            name="name"
            type="text"
            required
            onChange={ ({ target }) => setRegisterState({
              ...registerState, password: target.value }) }
          />
        </label>
        <button
          onClick={ (event) => handleFormSubmit(event) }
          data-testid={ `${prefix}button-register` }
          type="submit"
          disabled={ disable }
        >
          CADASTRAR
        </button>
        <div hidden={ !validateReg } data-testid={ `${prefix}element-invalid_register` }>
          Dados Incorretos
        </div>
      </form>
      { redirect && <Navigate to="/customer/products" /> }
    </>
  );
}

export default Register;
