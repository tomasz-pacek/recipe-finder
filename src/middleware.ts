import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentSession } from "@/lib/auth-utils";

export const config = {
  runtime: "nodejs",
  matcher: ["/post-recipe", "/login", "/register"],
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const session = await getCurrentSession();

  //ADMIN
  if (url.pathname.startsWith("/post-recipe") && !session && !session?.user) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  //IF ALREADY AUTHENTICATED
  if (
    (url.pathname.startsWith("/login") && session && session?.user) ||
    (url.pathname.startsWith("/register") && session && session?.user)
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
