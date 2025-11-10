'use client';

import { IoTrashOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

export default function DeleteAccount() {
    const { t } = useTranslation();
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    // Lógica para el botón de ELIMINAR CUENTA
    const handleDeleteAccount = async () => {
        if (!window.confirm(t('settings.delete_account.confirmation_dialog'))) {
            return;
        }
        setIsDeleting(true);
        try {
            // Lógica real: await deleteAccount();
            setStatusMessage(t('settings.delete_account.deleted_success'));
            // Simular redirección después de un breve retraso
            setTimeout(() => {
                // window.location.replace('/auth/register'); 
            }, 2000);
        } catch (error) {
            setStatusMessage(t('settings.delete_account.error_message'));
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 shadow-xl rounded-xl p-6">
            <h2 className="text-xl font-bold text-red-700 dark:text-red-300 mb-4 border-b pb-2 border-red-200 dark:border-red-700">
                {t('settings.delete_account.title')}
            </h2>
            <p className="text-sm text-red-600 dark:text-red-300 mb-4">
                {t('settings.delete_account.warning')}
            </p>
            <button
                onClick={handleDeleteAccount}
                disabled={isDeleting}
                className={`flex items-center px-4 py-2 text-white font-semibold rounded-lg transition-colors ${isDeleting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
            >
                <IoTrashOutline className="w-5 h-5 mr-2" />
                {isDeleting ? t('settings.delete_account.deleting') : t('settings.delete_account.button')}
            </button>
        </div>
    );
}