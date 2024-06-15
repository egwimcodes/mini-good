import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');

  if (token) {
    return NextResponse.next();
  } else {
    const response = NextResponse.next();
    response.cookies.set('accessToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/', // Set the path to ensure the cookie is accessible from the root
    });
    return response;
  }
}
