'use client';
import { SPDashboardRoutes } from "@/constants/routes";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function WelcomeComponent() {
    const { t } = useTranslation();

    return (
        <div className="mb-8">
            <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-gray-200">
                {t("welcome")}
            </h1>
            <Link href={SPDashboardRoutes.Register} className="mt-8 inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                {t("register")}
            </Link>
            <Link href={SPDashboardRoutes.LogIn} className="mt-8 ml-4 inline-block rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700">
                {t("login")}
            </Link>
        </div>
    );
}