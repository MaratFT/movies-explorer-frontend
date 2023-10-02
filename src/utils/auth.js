import checkResponse from './checkResponse';

const BASE_URL = 'https://api.movexp.nomoredomainsicu.ru';

export async function createUser(name, email, password) {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });

  return checkResponse(response);
}

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  return checkResponse(response);
}

export async function getContent(token) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  return checkResponse(response);
}
