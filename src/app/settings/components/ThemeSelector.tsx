'use client';
import { useSettingsStore } from "@/store/useSettingsStore";
import { useTranslation } from "react-i18next";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const ThemeSelector = () => {
    const { theme, toggleTheme } = useSettingsStore();
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <div className="flex items-center">
                <IoMoonOutline className="w-6 h-6 mr-3 text-blue-500 dark:text-yellow-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">{t('settings.appearance.dark_mode')}</span>
            </div>
            <button
                onClick={toggleTheme}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={theme === 'dark' ? t('settings.appearance.theme_toggle_label_dark') : t('settings.appearance.theme_toggle_label_light')}
            >
                <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
                >
                    {theme === 'dark' ? <IoMoonOutline className="w-5 h-5 m-0.5 text-blue-600" /> : <IoSunnyOutline className="w-5 h-5 m-0.5 text-yellow-500" />}
                </div>
            </button>
        </div>
    );
};