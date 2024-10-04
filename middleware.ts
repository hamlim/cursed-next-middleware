import { type NextRequest, NextResponse } from "next/server";
import { injectMagic } from "./hack";

export async function middleware(req: NextRequest) {
  injectMagic(req);

  return NextResponse.next({
    headers: req.headers,
  });
}
