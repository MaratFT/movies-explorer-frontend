import './MoviesCard.css';

import photo from '../../../images/photo-movies/pic__COLOR_pic.jpg';
import photo1 from '../../../images/photo-movies/pic__COLOR_pic-1.jpg';
import photo2 from '../../../images/photo-movies/pic__COLOR_pic-2.jpg';
import photo3 from '../../../images/photo-movies/pic__COLOR_pic-3.jpg';
import photo4 from '../../../images/photo-movies/pic__COLOR_pic-4.jpg';
import photo5 from '../../../images/photo-movies/pic__COLOR_pic-5.jpg';
import photo6 from '../../../images/photo-movies/pic__COLOR_pic-6.jpg';
import photo7 from '../../../images/photo-movies/pic__COLOR_pic-7.jpg';
import photo8 from '../../../images/photo-movies/pic__COLOR_pic-8.jpg';
import photo9 from '../../../images/photo-movies/pic__COLOR_pic-9.jpg';
import photo10 from '../../../images/photo-movies/pic__COLOR_pic-10.jpg';
import photo11 from '../../../images/photo-movies/pic__COLOR_pic-11.jpg';

function MoviesCard() {
  // const cardSavedButtonClassName = `movies-card__button ${isSaved && 'movies-card__button-active'}`;

  return (
    <>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo} alt="Кадр фильма" />
        <button className="movies-card__button-active"></button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo1} alt="Кадр фильма" />
        <button className="movies-card__button-active"></button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo2} alt="Кадр фильма" />
        <button className="movies-card__button">Сохранить</button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo3} alt="Кадр фильма" />
        <button className="movies-card__button">Сохранить</button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo4} alt="Кадр фильма" />
        <button className="movies-card__button">Сохранить</button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo5} alt="Кадр фильма" />
        <button className="movies-card__button-active"></button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo6} alt="Кадр фильма" />
        <button className="movies-card__button-active"></button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo7} alt="Кадр фильма" />
        <button className="movies-card__button">Сохранить</button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo8} alt="Кадр фильма" />
        <button className="movies-card__button">Сохранить</button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo9} alt="Кадр фильма" />
        <button className="movies-card__button">Сохранить</button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo10} alt="Кадр фильма" />
        <button className="movies-card__button-active"></button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo11} alt="Кадр фильма" />
        <button className="movies-card__button">Сохранить</button>
      </article>
    </>
  );
}

export default MoviesCard;
