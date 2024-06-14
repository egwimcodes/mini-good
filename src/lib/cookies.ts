import { cookies } from 'next/headers';

function useCookies() {
  return cookies();
}

function getAccessToken() {
  const cookies = useCookies();
  return cookies.get('AccessToken');
}

export {
  useCookies,
  getAccessToken
}