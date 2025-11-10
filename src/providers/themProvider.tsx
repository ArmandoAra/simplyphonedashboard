'use client'; // Si usas Next.js App Router

import { useEffect } from 'react';
import { useSettingsStore } from '@/store/useSettingsStore'; // Ajusta la ruta
import { Theme } from '@/interfaces/settingsState';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSettingsStore((state: { theme: Theme }) => state.theme);

    useEffect(() => {
        const root = document.documentElement;

        // Remover ambas clases
        root.classList.remove('light', 'dark');

        // Añadir la clase del tema actual
        root.classList.add(theme);

        console.log('Theme applied:', theme); // Para debug
    }, [theme]);

    return <>{children}</>;
}