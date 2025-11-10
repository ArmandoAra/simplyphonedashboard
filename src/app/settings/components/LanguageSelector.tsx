'use client';
import { useSettingsStore } from "@/store/useSettingsStore";
import { IoLanguage } from "react-icons/io5";
import { Language } from "@/interfaces";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
    const { t } = useTranslation();
    const { language, setLanguage } = useSettingsStore();
    const languages: { [key in Language]: string } = {
        es: 'Español',
        en: 'English',
        pt: 'Português',
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <div className="flex items-center">
                <IoLanguage className="w-6 h-6 mr-3 text-blue-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">{t('settings.appearance.language')}</span>
            </div>
            <select
                aria-label={t('settings.appearance.language_select_label')}
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="p-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
            >
                {Object.entries(languages).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                ))}
            </select>
        </div>
    );
};