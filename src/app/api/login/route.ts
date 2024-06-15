import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

  // Create a new response object
  const response = NextResponse.json({
      success: true,
      // Add some data to the response
      data: { accessToken: req.cookies.get('accessToken') },

  });

    
    response.cookies.get('accessToken');
  // Return the response with the cookie
  return response;
}



export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();

    // Process the data (e.g., log it, save it to a database, etc.)
    console.log('Request body:', body);

    // Create a response
    const response = NextResponse.json({
      success: true,
      message: 'Data received successfully',
      data: body, // Echo the received data
    });

    // Optionally set a cookie
    response.cookies.set('accessToken', 'test', {
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



