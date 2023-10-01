import checkResponse from './checkResponse';

const URL = 'https://api.nomoreparties.co/beatfilm-movies';

export async function getMovies() {
  const response = await fetch(URL);

  return checkResponse(response);
}
