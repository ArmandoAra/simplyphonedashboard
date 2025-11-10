'use server';

// import { signIn } from '../../auth.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/init'; // Tu instancia de Firebase
import { AuthError } from "next-auth"
import { createNextAuthSession } from './firebase-login';

// ...



// Creando otro server action para registrar el usuario despues de creado en register-user.ts
export async function loginAfterRegister(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        await createNextAuthSession(idToken);

        return {
            ok: true,
            message: 'User logged in successfully'
        };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CallbackRouteError':
                    return { ok: false, message: 'Invalid credentials.' };
                case 'CredentialsSignin':
                    return { ok: false, message: 'Error signing in with credentials.' };
                default:
                    return { ok: false, message: 'Something went wrong.' };
            }
        }
        throw error;
    }
}