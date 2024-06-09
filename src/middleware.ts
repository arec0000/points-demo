import { NextRequest, NextResponse, MiddlewareConfig } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("ac")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/service", "/quest"],
};
