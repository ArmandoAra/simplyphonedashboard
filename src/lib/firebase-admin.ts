import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        // Carga las credenciales desde una variable de entorno o archivo
        credential: admin.credential.cert(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as admin.ServiceAccount),
    });
}

export default admin;