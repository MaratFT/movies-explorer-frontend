import './AboutMe.css';

import Portfolio from '../Portfolio/Portfolio';

import myPhoto from '../../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__position">
        <div className="about-me__text">
          <h2 className="about-me__title-text">Марат</h2>
          <p className="about-me__info">Фронтенд-разработчик, 21 год</p>
          <p className="about-me__subtitle">
            Я родился и живу в Саратове, закончил специальность "Строительство и эксплуатация
            инженерный сооружений" в колледже СКСМГС. С 2022 года обучаюсь в институте "Прикладных
            информационных технологий и коммуникаций" университета СГТУ им. Гагарина Ю.А. Я люблю
            слушать музыку и увлекаюсь компьютерами. Недавно начал кодить. Закончил курс по
            веб-разработке от Яндекс.Практикум.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/MaratFT"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Фото студента" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
