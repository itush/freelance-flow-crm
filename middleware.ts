// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the path begins with /dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Check for our simple cookie (e.g., "ft_token")
    const token = request.cookies.get("ft_token");
    if (!token) {
      // Redirect unauthenticated users to /login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

// Only run this middleware for the /dashboard path and any sub-paths.
export const config = {
  matcher: ["/dashboard/:path*"],
};
