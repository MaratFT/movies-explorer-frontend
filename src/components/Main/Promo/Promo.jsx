import landingEarth from '../../../images/landing-logo-main.svg';

import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__text">
        <h1 className="promo__title">Учебный проект студента факультета Веб‑разработки.</h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#about-project">
          <button className="promo__button">Узнать больше</button>
        </a>
      </div>
      <img
        className="promo__landing-earth"
        src={landingEarth}
        alt="Изображение Земли во Всемирной паутине"
      />
    </section>
  );
}

export default Promo;
