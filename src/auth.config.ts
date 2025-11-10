import bcrypt from 'bcryptjs';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import CredentialsProvider from 'next-auth/providers/credentials';

const authenticatedRoutes = ['/checkout/address', '/checkout/summary', '/orders', '/profile'];
const adminRoutes = ['/admin/users', '/admin', '/admin/orders', '/admin/products', '/admin/products/[slug]'];

export const authConfig: NextAuthConfig = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/new-user',
    },

    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            // ✅ SOLUCIÓN: Permitir TODAS las rutas de API de autenticación
            if (nextUrl.pathname.startsWith('/api/auth')) {
                return true; // ⭐ No usar Response.redirect aquí
            }

            const isLoggedIn = !!auth?.user;

            // Verificar rutas protegidas
            const isOnAuthenticatedRoute = authenticatedRoutes.includes(nextUrl.pathname);
            const isOnAdminRoute = adminRoutes.some(route => {
                // Manejar rutas dinámicas como /admin/products/[slug]
                const routePattern = route.replace(/\[.*?\]/g, '[^/]+');
                return new RegExp(`^${routePattern}$`).test(nextUrl.pathname);
            });

            // Proteger rutas autenticadas
            if (isOnAuthenticatedRoute) {
                if (!isLoggedIn) {
                    return false; // ⭐ Retornar false en lugar de Response.redirect
                }
                return true;
            }

            // Proteger rutas de admin
            if (isOnAdminRoute) {
                if (!isLoggedIn) {
                    return false;
                }
                // TODO: Verificar si el usuario es admin
                // if (!auth.user.role || auth.user.role !== 'admin') {
                //     return false;
                // }
                return true;
            }

            // Permitir todas las demás rutas
            return true;
        },

        // ✅ AGREGAR: Callback de JWT para manejar el token
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.picture = user.image;
            }
            return token;
        },

        // ✅ AGREGAR: Callback de sesión para exponer datos al cliente
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.image = token.picture as string;
            }
            return session;
        },
    },

    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials) {
                // Validación básica
                if (!credentials?.uid || !credentials?.email) {
                    return null;
                }

                // Retornar el usuario
                return {
                    id: credentials.uid as string,
                    email: credentials.email as string,
                    name: credentials.name as string || '',
                    image: credentials.image as string || '',
                };
            },
        }),
    ],
};

export const { signIn, signOut, auth, handlers } = NextAuth({
    ...authConfig,
});