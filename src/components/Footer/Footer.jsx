import './Footer.css';

import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  if (
    location.pathname === '/signup' ||
    location.pathname === '/signin' ||
    location.pathname === '/profile'
  ) {
    return null;
  }

  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__nav">
        <span className="footer__copy">&copy; 2023</span>
        <ul className="footer__list">
          <li>
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/MaratFT"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
