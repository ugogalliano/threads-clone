import { authMiddleware } from '@clerk/nextjs';
import { sidebarLinks } from './constants/index';

export default authMiddleware({
  publicRoutes: [
    '/',
    ...sidebarLinks.map((item) => item.route),
    '/api/webhook/clerk',
  ],

  ignoredRoutes: ['/api/webhook/clerk'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};
