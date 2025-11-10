'use client';

import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from '@/i18n'; // Importa la instancia de i18n que ya tiene las traducciones

// Inicializa la conexión React después de que el navegador esté listo
if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init(i18n.options);
}

export function I18nClientProvider({ children }: { children: React.ReactNode }) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}