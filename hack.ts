import { headers } from "next/headers";
import type { NextRequest } from "next/server";

export function injectMagic(req: NextRequest) {
  let url = new URL(req.url);

  req.headers.set("x-url", url.toString());
}

export async function extractMagic() {
  let headersList = await headers();

  return {
    url: new URL(headersList.get("x-url")!),
  };
}
