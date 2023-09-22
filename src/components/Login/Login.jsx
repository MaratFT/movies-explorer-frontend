import React from 'react';

import logo from '../../images/logo.svg';

import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
  // eslint-disable-next-line
  const [email, setEmail] = React.useState('');
  // eslint-disable-next-line
  const [password, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className="login">
      <div className="login__header">
        <Link className="login__logo-link" to="/">
          <img className="login__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form action="" className="login__form">
        <label className="login__label">
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            autoFocus
            required
            className="login__input"
            onChange={handleEmailChange}
          />
        </label>
        <label className="login__label">
          Пароль
          <input
            type="password"
            placeholder="Пароль"
            required
            minLength="8"
            className="login__input"
            onChange={handlePasswordChange}
          />
        </label>
        <p className="login__error"></p>
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>

      <p className="login__text">
        Ещё не зарегистрированы?
        <Link className="login__text-link" to="/signup">
          Регистрация
        </Link>
      </p>
    </main>
  );
}

export default Login;
