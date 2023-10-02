import React from 'react';

import logo from '../../images/logo.svg';

import { Link, useNavigate } from 'react-router-dom';

import './Register.css';

import * as auth from '../../utils/auth';

import { useInput } from '../../hooks/useValidationForm';

function Register({ setLoggedIn }) {
  const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 30, isName: true });
  const email = useInput('', { isEmpty: true, minLength: 2, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 8 });

  const [resultSubmit, setResultSubmit] = React.useState({ result: '', resultError: false });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    (async () => {
      try {
        await auth.createUser(name.value, email.value, password.value);
        const login = await auth.login(email.value, password.value);
        localStorage.setItem('jwt', login.token);
        setLoggedIn(true);
        navigate('/movies');
        return;
      } catch (error) {
        console.error(error);
        setResultSubmit({
          result: `При регистрации произошла ошибка. ${error}`,
          resultError: true
        });
      }
    })();
  }

  return (
    <main className="register">
      <div className="register__header">
        <Link className="register__logo-link" to="/">
          <img className="register__logo" src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <label className="register__label">
          Имя
          <input
            type="text"
            name="name"
            autoFocus
            placeholder="Имя"
            required
            className="register__input"
            onChange={e => name.onChange(e)}
            value={name.value}
            onBlur={e => name.onBlur(e)}
          />
        </label>
        <div className="register__error">
          {name.isDirty && name.isEmpty && (
            <p className="register__input-error">Поле не может быть пустым</p>
          )}
          {name.isDirty && name.minLengthError && (
            <p className="register__input-error">Некорректная длина</p>
          )}
          {name.isDirty && name.maxLengthError && (
            <p className="register__input-error">Слишком большое имя</p>
          )}
        </div>
        <label className="register__label">
          E-mail
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="register__input"
            onChange={e => email.onChange(e)}
            value={email.value}
            onBlur={e => email.onBlur(e)}
          />
        </label>
        <div className="register__error">
          {email.isDirty && email.isEmpty && (
            <p className="register__input-error">Поле не может быть пустым</p>
          )}
          {email.isDirty && email.minLengthError && (
            <p className="register__input-error">Некорректная длина</p>
          )}
          {email.isDirty && email.emailError && (
            <p className="register__input-error">Некорректный email</p>
          )}
        </div>
        <label className="register__label">
          Пароль
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            required
            minLength="8"
            className="register__input"
            onChange={e => password.onChange(e)}
            value={password.value}
            onBlur={e => password.onBlur(e)}
          />
        </label>
        <div className="register__error">
          {password.isDirty && password.isEmpty && (
            <p className="register__input-error">Поле не может быть пустым</p>
          )}
          {password.isDirty && password.minLengthError && (
            <p className="register__input-error">Некорректная длина</p>
          )}
          {password.isDirty && password.maxLengthError && (
            <p className="register__input-error">Слишком большой пароль</p>
          )}
        </div>
        <p className="register__error-submit">{resultSubmit.result}</p>
        <button
          disabled={!name.inputValid || !email.inputValid || !password.inputValid}
          type="submit"
          className="register__button"
        >
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
