import { cookies } from 'next/headers';

export function useCookies() {
  return cookies();
}