'use client';
import { useTranslation } from "react-i18next";
import { IoAdd } from "react-icons/io5";

export default function AsideItems() {
    const { t } = useTranslation();
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">
                {t('aside.users')}
            </h2>
            <br />
            <ul className="space-y-2">
                <li className="  dark:hover:bg-gray-700 hover:text-white p-2 rounded-lg cursor-pointer">
                    Abuelo Carlos
                </li>
                <li className="  dark:hover:bg-gray-700 hover:text-white p-2 rounded-lg cursor-pointer">
                    Hijo Miguel
                </li>
                <br />
                <li className="  dark:hover:bg-gray-700 hover:text-white p-2 rounded-lg cursor-pointer bg-primary-color">
                    Agregar Familiar <IoAdd className="inline-block ml-1" />
                </li>

            </ul>
        </div>
    );
}