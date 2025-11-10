export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en' | 'pt';

export interface SettingsState {
    theme: Theme;
    language: Language;
}