'use server'
// import prisma from '@/lib/prisma';
//TODO: Implementar el registro de usuarios con Firebase Auth
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase/init';
import { createNextAuthSession } from './firebase-login';

export const registerUser = async (name: string, email: string, password: string) => {
    // Here would be the logic to register the user, e.g., calling an API or database operation
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const idToken = await userCredential.user.getIdToken();
        const response = await createNextAuthSession(idToken);
        console.log('Next-Auth session creation response:', idToken);
        return {
            ok: true,
            message: 'User registered successfully'
        }
    } catch (error) {
        return {
            ok: false,
            message: 'Error registering user'
        }

    }
}