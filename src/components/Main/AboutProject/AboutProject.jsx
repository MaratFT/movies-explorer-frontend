import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__text-position">
        <div className="about-project__text">
          <h3 className="about-project__title-text">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about-project__text">
          <h3 className="about-project__title-text">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-weeks">
          <p className="about-project__score-weeks">1 неделя</p>
          <p className="about-project__name-weeks">Back-end</p>
        </div>
        <div className="about-project__timeline-weeks about-project__timeline-weeks_four">
          <p className="about-project__score-weeks about-project__score-weeks_color">4 недели</p>
          <p className="about-project__name-weeks">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
