import React from 'react';

import logo from '../../images/logo.svg';

import { Link, useNavigate } from 'react-router-dom';

import * as auth from '../../utils/auth';

import './Login.css';

import { useInput } from '../../hooks/useValidationForm';

function Login({ setLoggedIn }) {
  const email = useInput('', { isEmpty: true, minLength: 2, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 8 });

  const [resultSubmit, setResultSubmit] = React.useState({ result: '', resultError: false });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    (async () => {
      try {
        const user = await auth.login(email.value, password.value);
        localStorage.setItem('jwt', user.token);
        setLoggedIn(true);
        navigate('/movies');
        return;
      } catch (error) {
        console.error(error);
        setResultSubmit({
          result: `При авторизации произошла ошибка. ${error}`,
          resultError: true
        });
      }
    })();
  }

  return (
    <main className="login">
      <div className="login__header">
        <Link className="login__logo-link" to="/">
          <img className="login__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          E-mail
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            autoFocus
            required
            className="login__input"
            onChange={e => email.onChange(e)}
            value={email.value}
            onBlur={e => email.onBlur(e)}
          />
        </label>
        <div className="login__error">
          {email.isDirty && email.isEmpty && (
            <p className="login__input-error">Поле не может быть пустым</p>
          )}
          {email.isDirty && email.minLengthError && (
            <p className="login__input-error">Некорректная длина</p>
          )}
          {email.isDirty && email.emailError && (
            <p className="login__input-error">Некорректный email</p>
          )}
        </div>
        <label className="login__label">
          Пароль
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            required
            minLength="8"
            className="login__input"
            onChange={e => password.onChange(e)}
            value={password.value}
            onBlur={e => password.onBlur(e)}
          />
        </label>
        <div className="login__error">
          {password.isDirty && password.isEmpty && (
            <p className="login__input-error">Поле не может быть пустым</p>
          )}
          {password.isDirty && password.minLengthError && (
            <p className="login__input-error">Некорректная длина</p>
          )}
          {password.isDirty && password.maxLengthError && (
            <p className="login__input-error">Слишком большой пароль</p>
          )}
        </div>
        <p className="login__error-submit">{resultSubmit.result}</p>
        <button
          disabled={!email.inputValid || !password.inputValid}
          type="submit"
          className="login__button"
        >
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
