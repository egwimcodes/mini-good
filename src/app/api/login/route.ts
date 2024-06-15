import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Get the accessToken from cookies
  const accessToken = req.cookies.get('accessToken');

  // Create a new response object with the accessToken in the data
  const response = NextResponse.json({
    success: true,
    data: { accessToken: accessToken ? accessToken.value : '' },
  });

  // Set the accessToken cookie
  response.cookies.set('accessToken', accessToken ? accessToken.value : '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
  });

  // Return the response with the cookie
  return response;
}


export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get the token
    const { token } = await req.json();

    // Process the data (e.g., log it, save it to a database, etc.)
    console.log('Token received:', token);

    // Create a response with the token as data
    const response = NextResponse.json({
      success: true,
      message: 'Token received successfully',
      data: { accessToken: token }, // Echo the received token
    });

    // Set the token as a cookie
    response.cookies.set('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
    });

    return response;
  } catch (error) {
    // Handle errors
    console.error('Error processing request:', error);

    return NextResponse.json({
      success: false,
      message: 'Error processing request',
    }, { status: 500 });
  }
}


