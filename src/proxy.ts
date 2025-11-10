// middleware.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';


export default NextAuth(authConfig).auth;

export const config = {
    // ✅ IMPORTANTE: Excluir rutas estáticas y API de autenticación
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (API routes de autenticación)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public (public files)
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};

