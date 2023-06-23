// middleware.tsx file
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path.startsWith('/first')) {
    const message = `Hello, this is a message from the middleware for ${path}`;

    // Modify the response using NextResponse
    const modifiedResponse = new NextResponse(
      `<h1 id="message">${message}</h1>`,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );

    return modifiedResponse;
  }

  return undefined;
}
