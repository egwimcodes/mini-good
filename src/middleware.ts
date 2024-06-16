import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');

  if (token) {
    alert(`accessToken cookie3 ${token} `)
    const response = NextResponse.next();
    response.cookies.delete('accessToken');
    alert(`accessToken cookie4 ${response.cookies.get('accessToken')} `)
    return response;
  }
  // } else {
  //   const response = NextResponse.next();
  //   response.cookies.set('accessToken', '', {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV !== 'development',
  //     sameSite: 'strict',
  //     path: '/', // Set the path to ensure the cookie is accessible from the root
  //   });
  //   return response;
  // }
}
