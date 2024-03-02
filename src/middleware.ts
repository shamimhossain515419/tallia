import { NextResponse } from "next/server";

export function middleware(request: any) {
  const accessToken = request.cookies.get("access_token")?.value;
  //  return NextResponse.redirect(new URL("/login", requeast.url))

  const loggeduserNotAccesspath = request.nextUrl.pathname === "/login";
  const protectRoute = [
    "/checkout",
    "/checkout/information",
    "/checkout/payment",
    "/checkout/shipping",
    "/useraccount/orders",
    "/useraccount/profile",
  ];

  if (loggeduserNotAccesspath) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/useraccount", request.url));
    }
  }
  if (!accessToken && protectRoute.includes(request.nextUrl.pathname)) {
    const abseluteURL = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(abseluteURL.toString());
  }
}

export const config = {
  matcher: ["/checkout/:path*", "/account/:path*", "/login", "/register"],
};
