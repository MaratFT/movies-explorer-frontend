import React from 'react';

import './Profile.css';

import { Link } from 'react-router-dom';

function Profile() {
  const [name, setName] = React.useState('Марат');
  const [email, setEmail] = React.useState('pochta@yandex.ru');

  // Тестовые
  const [linkChange, setLinkChange] = React.useState(false);
  function changeLinkToButton() {
    setLinkChange(true);
  }
  // function returnLinkAfterSave () {
  //   setLinkChange(false);
  // };

  const [isButtonDisabled, setButtonDisabled] = React.useState(false);

  function disableButtonClick() {
    setButtonDisabled(!isButtonDisabled);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Марат!</h1>
      <form className="profile__form" id="profile-form">
        <label className="profile__label">
          Имя
          <input
            type="text"
            placeholder="Имя"
            required
            className="profile__input"
            value={name}
            onChange={handleNameChange}
            disabled={!linkChange}
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            type="email"
            placeholder="E-mail"
            required
            className="profile__input"
            value={email}
            onChange={handleEmailChange}
            disabled={!linkChange}
          />
        </label>
      </form>
      {linkChange ? (
        <button
          className="profile__button-save"
          disabled={isButtonDisabled}
          onClick={disableButtonClick}
          type="submit"
          form="profile-form"
        >
          Сохранить
        </button>
      ) : (
        <div className="profile__links">
          <Link to="" className="profile__links-edit" onClick={changeLinkToButton}>
            Редактировать
          </Link>
          <Link to="/signin" className="profile__links-signout">
            Выйти из аккаунта
          </Link>
        </div>
      )}
    </main>
  );
}

export default Profile;
