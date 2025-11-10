// src/components/LanguageSynchronizer.jsx
'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Asegúrate de que la ruta de importación sea correcta
import { useSettingsStore } from '@/store/useSettingsStore';

/**
 * Componente que sincroniza el estado del idioma y tema de Zustand con la instancia de i18next y el DOM.
 */
export function SettingsSynchronizer() {
    const { language, theme } = useSettingsStore();
    const { i18n } = useTranslation();

    useEffect(() => {
        // Solo cambia el idioma si i18next ya está inicializado
        if (i18n.isInitialized && i18n.language !== language) {
            // Llama a changeLanguage para forzar la actualización de i18next y React
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    useEffect(() => {
        // Ejecutar solo en el lado del cliente donde 'document' existe
        if (typeof document === 'undefined') return;

        const htmlElement = document.documentElement; // Obtener la etiqueta <html>

        if (theme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        // Opcional: Para accesibilidad, también puedes establecer un atributo
        htmlElement.setAttribute('data-theme', theme);
    }, [theme]);

    return null;
}