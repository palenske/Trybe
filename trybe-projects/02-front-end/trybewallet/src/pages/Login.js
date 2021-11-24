import React from 'react';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import './CSS/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButton: true,
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const regex = /\S+@\S+\.\S+/;
      const min = 6;
      if (regex.test(email) && password.length >= min) {
        this.setState({ disableButton: false });
      } else this.setState({ disableButton: true });
    });
  }

  submit(email) {
    const { propLogin } = this.props;
    propLogin(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, disableButton, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    } return (
      <div className="main-box">
        <div className="login-box">
          <div className="login-header"><h1>TrybeWallet</h1></div>
          <input
            data-testid="email-input"
            type="text"
            placeholder="e-mail"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="password"
            name="password"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ disableButton }
            onClick={ () => this.submit(email) }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  propLogin: (email) => dispatch(login(email)) });

Login.propTypes = { propLogin: Proptypes.func }.isRequired;

export default connect(null, mapDispatchToProps)(Login);
