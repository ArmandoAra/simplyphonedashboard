'use client'; // Sigue siendo necesario si usa useTranslation o Link de Next.js
// Asumo que el I18nClientProvider está en el layout raíz o superior
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import { IoAdd } from "react-icons/io5";
import { I18nClientProvider } from "@/providers/i18n-provider";
import SettingsButton from "./components/settingsButton";
import { SettingsSynchronizer } from "@/app/settings/components/SettigsSynchronizer";
import AsideItems from "./components/AsideItems";


export default function AsideContainer() {
    const { t } = useTranslation();

    return (
        <I18nClientProvider>
            <SettingsSynchronizer />
            <aside
                className={`hidden xl:flex flex-col xl:w-52 p-4  absolute h-full transition-all duration-100 bg-surface border-r-text-primary border-r justify-between`}
            // style={{ backgroundColor: CurrentThemeColors.surface, borderColor: CurrentThemeColors.border }}
            >
                {/* Contenido del Aside */}
                <AsideItems />
                <SettingsButton />
            </aside>
        </I18nClientProvider>
    );
}

const AsideTitle = () => {
    const { t } = useTranslation();
    return (
        <h2 className="text-xl font-semibold mb-4">
            {t('aside.users')}
        </h2>
    );
}