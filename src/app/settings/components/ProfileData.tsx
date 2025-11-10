import { t } from "i18next";
import UserNameChanger from "./UserNameChanger";
import { useState } from "react";

export default function ProfileData() {
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [profileImageUrl, setProfileImageUrl] = useState('/profile.jpg');


    return (
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                {t('settings.profile.title')}
            </h2>

            {/* IMAGEN DE PERFIL */}
            <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md">
                    {/* Muestra la imagen actual */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={profileImageUrl}
                        alt="Foto de Perfil"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('settings.profile.change_photo')}</p>
                    <input
                        aria-label={t('settings.profile.change_photo')}
                        type="file"
                        accept="image/*"
                        onChange={() => setStatusMessage(t('settings.profile.status_photo_ready'))}
                        className="block w-full text-sm text-gray-500 dark:text-gray-300
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-blue-50 file:text-blue-700
                                                hover:file:bg-blue-100
                                            "
                    />
                </div>
            </div>
        </div>
    );
}