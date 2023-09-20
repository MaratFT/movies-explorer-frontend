import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-element">
          <a
            className="portfolio__link"
            href="https://github.com/MaratFT/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт <span>↗</span>
          </a>
        </li>
        <li className="portfolio__list-element">
          <a
            className="portfolio__link"
            href="https://github.com/MaratFT/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт <span>↗</span>
          </a>
        </li>
        <li className="portfolio__list-element">
          <a
            className="portfolio__link"
            href="https://github.com/MaratFT/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение <span>↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
