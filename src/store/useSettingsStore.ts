import { Language, SettingsState, Theme } from '@/interfaces';
import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';

interface SettingsActions {
    setTheme: (newTheme: Theme) => void;
    setLanguage: (newLanguage: Language) => void;
    toggleTheme: () => void; // Añadimos una acción conveniente
}

type SettingsStore = SettingsState & SettingsActions;

// 2. Manejo de Almacenamiento en SSR/Next.js
// -----------------------------------------------------------------------------

// Función para obtener el objeto de almacenamiento (localStorage) de forma segura.
// Esto evita que Next.js falle durante el SSR, ya que 'window' no está definido en el servidor.
const getSafeStorage = (): StateStorage => ({
    getItem: (name: string): string | Promise<string | null> | null => {
        if (typeof window !== 'undefined') {
            return window.localStorage.getItem(name);
        }
        return null; // Devuelve null si se ejecuta en el servidor (SSR)
    },
    setItem: (name: string, value: string): void | Promise<void> => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(name, value);
        }
    },
    removeItem: (name: string): void | Promise<void> => {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem(name);
        }
    },
});

// 3. Creación del Store Persistente
// -----------------------------------------------------------------------------

/**
 * Hook de Zustand para manejar el tema y el idioma globalmente.
 * El estado es persistente en el localStorage del navegador.
 */
export const useSettingsStore = create<SettingsStore>()(
    persist(
        // Definición del estado y acciones
        (set, get) => ({
            // Estado Inicial
            theme: 'light',
            language: 'es',

            // Acciones
            setTheme: (newTheme) => set({ theme: newTheme }),
            setLanguage: (newLanguage) => set({ language: newLanguage }),
            toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
        }),
        {
            name: 'app-user-settings',

            storage: createJSONStorage(getSafeStorage),

        }
    )
);