'use server';

import { signOut } from '@/auth.config';

export async function logoutAction() {
    try {
        await signOut({
            redirect: true,
            redirectTo: '/',
        });
    } catch (error) {
        console.error('Error en logout:', error);
        throw error;
    }
}