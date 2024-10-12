import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  // Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware(routing, {
    localeDetection: false,
  });

  let url = request.nextUrl.pathname;

  // Detect the locale from the pathname (assuming /en or /id is present)
  const localePattern = /^\/(en|id)(\/|$)/;
  const match = url.match(localePattern);

  if (match) {
    // Remove the locale from the URL
    url = url.replace(localePattern, "/");
  }

  const visitedPages: string[] = JSON.parse(
    request.cookies.get("visitedPages")?.value || "[]"
  );

  // Add the current URL to the start of the array
  const updatedPages = [url, ...visitedPages.filter((page) => page !== url)];

  // Limit to last 4 pages
  if (updatedPages.length > 5) {
    updatedPages.pop();
  }

  const response = handleI18nRouting(request);
  response.cookies.set("visitedPages", JSON.stringify(updatedPages), {
    path: "/",
  });

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(en|id)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
