import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";

export default clerkMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadThing'
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadThing'
    ]
} as ClerkMiddlewareOptions);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

    // Skip all routes that are not API routes
    '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)', 
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};