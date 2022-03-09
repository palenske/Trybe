import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';

const axios = require('axios').default;

const initialState = {
  email: '',
  password: '',
};

const possibleRoutes = {
  customer: '/customer/products',
  seller: '/seller/orders',
  administrator: '/admin/manage',
};

export default function Login() {
  const [loginState, setLoginState] = useState(initialState);
  const [isDisabled, setIsDisabled] = useState(true);
  const [invalidUser, setInvalidUser] = useState(false);
  const [isRedirect, setIsRedirect] = useState(localStorage.getItem('user'));

  useEffect(() => {
    setInvalidUser(false);
    const { email, password } = loginState;
    const regex = /\S+@\S+\.\S+/;
    const min = 6;
    return regex.test(email) && password.length >= min
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [loginState]);

  const submit = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', loginState);
      localStorage.setItem('user', JSON.stringify(data));
      setIsRedirect(localStorage.getItem('user'));
    } catch (error) {
      setInvalidUser(true);
    }
  };

  return isRedirect ? (
    <Navigate to={ `${possibleRoutes[JSON.parse(isRedirect).role]}` } />
  ) : (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
      <div>[Imagem]</div>
      <div>[Delivery App]</div>
      <br />
      <form
        style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }
      >
        <label htmlFor="email">
          Login:
          <input
            name="email"
            value={ loginState.email }
            type="email"
            placeholder="mail@example.com"
            data-testid="common_login__input-email"
            onChange={
              ({ target: { value } }) => setLoginState({ ...loginState, email: value })
            }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            value={ loginState.password }
            type="password"
            placeholder="Password"
            data-testid="common_login__input-password"
            onChange={
              ({ target: { value } }) => setLoginState({ ...loginState, password: value })
            }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ isDisabled }
          onClick={ submit }
        >
          Entrar
        </button>
      </form>
      <br />
      <Link to="/register">
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </Link>
      <div
        data-testid="common_login__element-invalid-email"
        hidden={ !invalidUser }
      >
        Email ou Senha inválida
      </div>
    </div>
  );
}
