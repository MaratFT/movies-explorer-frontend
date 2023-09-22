import './MoviesCard.css';

import photo from '../../../images/photo-movies/pic__COLOR_pic.jpg';
import photo1 from '../../../images/photo-movies/pic__COLOR_pic-1.jpg';
import photo2 from '../../../images/photo-movies/pic__COLOR_pic-2.jpg';

function MoviesCard() {
  return (
    <>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo} alt="Кадр фильма" />
        <button className="movies-card__button-delete"></button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo1} alt="Кадр фильма" />
        <button className="movies-card__button-delete"></button>
      </article>
      <article className="movies-card">
        <div className="movies-card__text">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__duration">0ч 42м</p>
        </div>
        <img className="movies-card__photo" src={photo2} alt="Кадр фильма" />
        <button className="movies-card__button-delete"></button>
      </article>
    </>
  );
}

export default MoviesCard;
