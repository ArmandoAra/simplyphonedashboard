"use client";

import { I18nClientProvider } from "@/providers/i18n-provider";
import { SettingsSynchronizer } from "../components/SettigsSynchronizer";
import UserNameChanger from "../components/UserNameChanger";
import { ThemeSelector } from "../components/ThemeSelector";
import DeleteAccount from "../components/DeleteAccount";
import { LanguageSelector } from "../components/LanguageSelector";
import ProfileData from "../components/ProfileData";

export default function SettingsContainer() {
    return (
        <div className="min-h-screen  flex justify-center py-10 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-4xl">
                <I18nClientProvider>
                    <SettingsSynchronizer />
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProfileData />
                        <UserNameChanger />
                    </div>
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ThemeSelector />
                        <LanguageSelector />
                    </div>
                    <DeleteAccount />
                </I18nClientProvider>
            </div>
        </div>
    );
}