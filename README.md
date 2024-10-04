# Cursed Next Middleware

This Next app showcases a minimal way to pass additional context down into App Router pages and layouts.

Specifically, this only passes in a `URL` instance by serializing and de-serializing the `url` as request headers forwarded onto the response.

See [`hack.ts`](./hack.ts), which is used in [`middleware.ts`](./middleware.ts) and also [`app/page.tsx`](./app/page.tsx).