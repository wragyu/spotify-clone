import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { Next}

// export async function midleware(req) {
//   // Token will exist if user is logged in
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });

//   const { pathname } = req.nextUrl
//   // Allow the requests if the following is true
//   // 1. It's a request for next-auth session & provider fetching
//   // 2. the token exists
//   if (pathname.includes('/api/auth') || token) {
//     // continue on
//     return NextResponse.next();
//   }

//   // Redirect them to login if they don't have token AND are requesting a protected route
//   if (!token && pathname !== "/login") {
//     return NextResponse.redirect("/login");
//   }
// }

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next/') ||
      pathname.includes('.')  { // static files
      return
  }

  if (pathname.includes("/api/auth") || token) {
      return NextResponse.next();
    }

  if (!token && pathname !== "/login") {
      url.pathname = "/login";
      return NextResponse.redirect(url);
  }
}
