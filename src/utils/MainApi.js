import checkResponse from './checkResponse';

const BASE_URL = 'https://api.movexp.nomoredomainsicu.ru';

export async function getUserCurrentMovie() {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  });

  return checkResponse(response);
}

export async function createUserCurrentMovie(movie) {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify(movie)
  });

  return checkResponse(response);
}

export async function deleteUserCurrentMovie(movieId) {
  const response = await fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  });

  return checkResponse(response);
}

export async function getUserCurrent() {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  });

  return checkResponse(response);
}

export async function updateUser(name, email) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      name,
      email
    })
  });

  return checkResponse(response);
}
