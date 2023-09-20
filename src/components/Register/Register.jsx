import React from 'react';

import logo from '../../images/logo.svg';

import { Link } from 'react-router-dom';

import './Register.css';

function Register() {
  // eslint-disable-next-line
  const [name, setName] = React.useState('');
  // eslint-disable-next-line
  const [email, setEmail] = React.useState('');
  // eslint-disable-next-line
  const [password, setPassword] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className="register">
      <div className="register__header">
        <Link className="register__logo-link" to="/">
          <img className="register__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form">
        <label className="register__label">
          Имя
          <input
            type="text"
            autoFocus
            placeholder="Имя"
            required
            className="register__input"
            onChange={handleNameChange}
          />
        </label>
        <label className="register__label">
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            required
            className="register__input"
            onChange={handleEmailChange}
          />
        </label>
        <label className="register__label">
          Пароль
          <input
            type="password"
            placeholder="Пароль"
            required
            minLength="8"
            className="register__input"
            onChange={handlePasswordChange}
          />
        </label>
        <p className="register__error"></p>
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
      </form>

      <p className="register__text">
        Уже зарегистрированы?
        <Link className="register__text-link" to="/signin">
          Войти
        </Link>
      </p>
    </main>
  );
}

export default Register;
