import React from 'react';

import './Profile.css';

import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import * as MainApi from '../../utils/MainApi';

import { useInput } from '../../hooks/useValidationForm';

function Profile() {
  const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 30, isName: true });
  const email = useInput('', { isEmpty: true, minLength: 2, isEmail: true });

  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);

  const [linkChange, setLinkChange] = React.useState(false);

  function changeLinkToButton() {
    setLinkChange(true);
  }

  const [isButtonDisabled, setButtonDisabled] = React.useState(false);

  const [resultSubmit, setResultSubmit] = React.useState({ result: '', resultSuccess: false });

  const resultSubmitSuccessClassName = `profile__result-submit ${
    resultSubmit.resultSuccess && 'profile__result-submit_success'
  }`;

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMoviesSearchResult');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('toggleShortMovies');
    localStorage.removeItem('allSavedMovies');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    (async () => {
      try {
        const user = await MainApi.updateUser(name.value, email.value);
        setCurrentUser(user);
        setButtonDisabled(false);
        setResultSubmit({ result: `Обновление профиля завершено успешно`, resultSuccess: true });
        setLinkChange(false);
        return;
      } catch (error) {
        console.error(error);
        setButtonDisabled(false);
        setResultSubmit({
          result: `При обновлении профиля произошла ошибка. ${error}`,
          resultSuccess: false
        });
        setLinkChange(false);
      }
    })();
  }

  React.useEffect(() => {
    (async () => {
      try {
        const currentUser = await MainApi.getUserCurrent();
        setCurrentUser(currentUser);
        name.onChange({ target: { value: currentUser.name } });
        email.onChange({ target: { value: currentUser.email } });
        return;
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form className="profile__form" id="profile-form" onSubmit={handleSubmit} noValidate>
        <label className="profile__label">
          Имя
          <input
            type="text"
            placeholder="Имя"
            required
            className="profile__input"
            value={name.value || ''}
            disabled={!linkChange}
            onChange={e => name.onChange(e)}
            onBlur={e => name.onBlur(e)}
          />
        </label>
        <div className="profile__error">
          {name.isDirty && name.isEmpty && (
            <p className="profile__input-error">Поле не может быть пустым</p>
          )}
          {name.isDirty && name.minLengthError && (
            <p className="profile__input-error">Некорректная длина</p>
          )}
          {name.isDirty && name.maxLengthError && (
            <p className="profile__input-error">Слишком большое имя</p>
          )}
        </div>
        <label className="profile__label">
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            required
            className="profile__input"
            onChange={e => email.onChange(e)}
            value={email.value}
            onBlur={e => email.onBlur(e)}
            disabled={!linkChange}
          />
        </label>
        <div className="profile__error">
          {email.isDirty && email.isEmpty && (
            <p className="profile__input-error">Поле не может быть пустым</p>
          )}
          {email.isDirty && email.minLengthError && (
            <p className="profile__input-error">Некорректная длина</p>
          )}
          {email.isDirty && email.emailError && (
            <p className="profile__input-error">Некорректный email</p>
          )}
        </div>
      </form>
      <p className={resultSubmitSuccessClassName}>{resultSubmit.result}</p>
      {linkChange ? (
        <>
          <button
            className="profile__button-save"
            disabled={
              !name.inputValid ||
              !email.inputValid ||
              isButtonDisabled ||
              (currentUser.name === name.value && currentUser.email === email.value)
            }
            type="submit"
            form="profile-form"
          >
            Сохранить
          </button>
        </>
      ) : (
        <div className="profile__links">
          <Link to="" className="profile__links-edit" onClick={changeLinkToButton}>
            Редактировать
          </Link>
          <Link to="/" className="profile__links-signout" onClick={signOut}>
            Выйти из аккаунта
          </Link>
        </div>
      )}
    </main>
  );
}

export default Profile;
