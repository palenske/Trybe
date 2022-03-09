import React, { useState, useEffect } from 'react';
import { validateEmail,
  validateName, validatePassword } from '../../utils/inputValidation';

const axios = require('axios').default;

export default function RegisterForm() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    role: '',
  };

  const [userState, setUserState] = useState(initialState);
  const [registered, setRegistered] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // Fazer condicionais para a página
    const { name, email, password, role } = userState;
    if (validateEmail(email)
    && validateName(name) && validatePassword(password) && role) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setRegistered(true);
  }, [userState]);

  const handleClick = async (event) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = { headers: { Authorization: token } };
    try {
      const data = await axios.post('http://localhost:3001/admin/register', userState, config);
      console.log(data);
      setUserState(initialState);
    } catch (err) {
      console.log(err);
      setRegistered(false);
    }
  };

  return (
    <section>
      <h5>Cadastrar novo usuário</h5>
      <form
        style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }
      >
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            value={ userState.name }
            type="text"
            data-testid="admin_manage__input-name"
            onChange={
              ({ target: { value } }) => setUserState({ ...userState, name: value })
            }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            value={ userState.email }
            type="email"
            data-testid="admin_manage__input-email"
            onChange={
              ({ target: { value } }) => setUserState({ ...userState, email: value })
            }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            value={ userState.password }
            type="password"
            placeholder="password"
            data-testid="admin_manage__input-password"
            onChange={
              ({ target: { value } }) => setUserState({ ...userState, password: value })
            }
          />
        </label>
        <label htmlFor="role">
          Tipo:
          <select
            className="register-role"
            type="select"
            name="role"
            data-testid="admin_manage__select-role"
            onChange={
              ({ target: { value } }) => setUserState({ ...userState, role: value })
            }
          >
            <option disabled selected>Selecione...</option>
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Admin</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Cadastrar
        </button>
      </form>
      <div
        data-testid="admin_manage__element-invalid-register"
        hidden={ registered }
      >
        Nome ou Email já cadastrado!
      </div>
    </section>
  );
}
