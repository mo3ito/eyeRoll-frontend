import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import EYEROLL_TOKEN from "./help/tokenName";
import jwt_decode from "jwt-decode";

export async function middleware(request: NextRequest) {
  const token = await request.cookies.get(EYEROLL_TOKEN)?.value;
  if (
    !token &&
    request.nextUrl.pathname.startsWith("/business-owner-dashboard")
  ) {
    return NextResponse.redirect(
      new URL("/register-business-owner/login", request.url)
    );
  }
  if (token) {
    try {
      const informationToken = (await jwt_decode(token)) as {
        is_businessOwner: boolean;
      };
      if (
        request.nextUrl.pathname.startsWith("/business-owner-dashboard") &&
        !informationToken.is_businessOwner
      ) {
        return NextResponse.redirect(
          new URL("/register-business-owner/login", request.url)
        );
      }
    } catch (error) {
      console.error("error:", error);
    }
  }
}
