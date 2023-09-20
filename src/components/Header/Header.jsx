import React from 'react';

import logo from '../../images/logo.svg';
import accountIcon from '../../images/icon__account.svg';

import { Link, NavLink, useLocation } from 'react-router-dom';

import './Header.css';

function Header({ loggedIn }) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  if (location.pathname === '/signup' || location.pathname === '/signin') {
    return null;
  }

  const headerBackgroundClassName = `header ${location.pathname !== '/' && 'header_background'}`;
  const headerIconBackgroundClassName = `header__icon-background ${
    location.pathname !== '/' && 'header__icon-background_color'
  }`;

  return (
    <header
      className={`${headerBackgroundClassName} ${isMenuOpen && loggedIn ? 'header_menu-open' : ''}`}
    >
      <NavLink className="header__logo-link" to="/">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
      </NavLink>
      {loggedIn && (
        <button
          className="header__burger"
          type="button"
          aria-label="Меню мобильной версии"
          onClick={toggleMenu}
        ></button>
      )}
      {location.pathname === '/' && !loggedIn ? (
        <nav className="header__navbar-not-auth">
          <NavLink className="header__link header__link_not-auth" to="/signup">
            Регистрация
          </NavLink>
          <Link to="/signin">
            <button className="header__button-signin">Войти</button>
          </Link>
        </nav>
      ) : (
        <nav className="header__navbar-auth">
          <NavLink className="header__link header__link_mobile" to="/">
            Главная
          </NavLink>
          <NavLink className="header__link" to="/movies">
            Фильмы
          </NavLink>
          <NavLink className="header__link" to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
          <NavLink className="header__link" to="/profile">
            Аккаунт
            <div className={headerIconBackgroundClassName}>
              <img className="header__icon" src={accountIcon} alt="Значок аккаунта" />
            </div>
          </NavLink>
        </nav>
      )}
      {/* <nav className="header__navbar">
        {location.pathname === '/' && !loggedIn ? (
          <>
            <NavLink className="header__link header__link_auth" to="/signup">
              Регистрация
            </NavLink>
            <Link to="/signin">
              <button className="header__button-signin">Войти</button>
            </Link>
          </>
        ) : (
          <>
            <NavLink className="header__link" to="/movies">
              Фильмы
            </NavLink>
            <NavLink className="header__link" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
            <NavLink className="header__link" to="/profile">
              Аккаунт
              <div className={headerIconBackgroundClassName}>
                <img className="header__icon" src={accountIcon} alt="Значок аккаунта" />
              </div>
            </NavLink>
          </>
        )}
      </nav> */}
    </header>
  );
}

export default Header;
