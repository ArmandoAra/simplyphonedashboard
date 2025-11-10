'use client';

import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';


export default function UserNameChanger() {
    const { t } = useTranslation();
    const [userName, setUserName] = React.useState('');
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    // Lógica para actualizar el nombre de usuario
    const handleNameUpdate = async () => {
        // Lógica real: await updateUserName(userName);
        setStatusMessage(t('settings.profile.status_name_updated'));
    };
    return (
        <div className="space-y-2 mb-6">
            <label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.profile.username')}</label>
            <div className="flex">
                <input
                    id="username"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-l-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                    onClick={handleNameUpdate}
                    className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                    {t('settings.profile.save_button')}
                </button>
            </div>
        </div>
    );
}