import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SettingsButton() {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center items-center  border-t bg-primary-color border-gray-200 dark:border-gray-700 rounded-lg p-2 hover:bg-primary-color-dark ">
            <Link
                href="/settings"
                className="flex items-center text-sm font-medium w-full h-full text-center justify-center"
            >
                {t('buttons.settings')}
            </Link>
        </div>
    );
}