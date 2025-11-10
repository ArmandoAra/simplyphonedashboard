"use server"
// pages/api/auth/firebase-login.js
import admin from '@/lib/firebase-admin'; // Admin SDK
import { signIn } from '@/auth.config';


export async function createNextAuthSession(idToken: string) {
    try {
        // 1. **Verificar el token usando Firebase Admin**
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const { uid, email, name } = decodedToken;

        // 2. **Usar signIn de Next-Auth con credenciales verificadas**
        // Pasamos los datos que Next-Auth necesita para el Callback/JWT
        const result = await signIn('credentials', {
            redirect: false,
            uid: uid,
            email: email,
            name: name,
        });

        return "success";

    } catch (error) {
        // ... manejar errores de verificación
        return "Firebase token verification failed.";
    }
}