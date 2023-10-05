// We are using the next-intl library to support our internationalisation
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: [
    'de'
    // In the future we will support english
    // 'en',
  ],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'de'
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  // it also need to not internationalize the system file like opengraph and twiiter, because the path is still needed to access the file from external
  matcher: ['/((?!api|_next|.*/opengraph.*|.*/twitter.*|.*\\..*).*)']
};
