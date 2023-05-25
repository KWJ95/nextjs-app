import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'bm', 'zh-hans'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',

  // domains: [
  //     {
  //         domain: 'localhost:3000',
  //         defaultLocale: 'en',
  //     },
  //     {
  //         domain: 'localhost:3000/bm',
  //         defaultLocale: 'bm',
  //     },
  //     {
  //         domain: 'localhost:3000/zh-hans',
  //         defaultLocale: 'zh-hans',
  //     },
  // ],
});
 
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};