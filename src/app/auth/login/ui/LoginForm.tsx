'use client';

import { authenticate } from '@/actions/auth/authenticate';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { IoInformationOutline } from 'react-icons/io5';


export default function LoginForm() {
    const router = useRouter();
    // useActionState recibe la Server Action y el estado inicial (undefined)
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    // Lógica de redirección y manejo de historial
    useEffect(() => {
        if (errorMessage === "success") {
            // Usa window.location.replace para un reinicio completo de la sesión.
            window.location.replace('/')
        }

        // Lógica para prevenir el 'go back' después del login (puede ser agresiva, se mantiene si es requerida)
        window.history.pushState(null, "", window.location.href);

        const handlePopState = () => {
            window.history.pushState(null, "", window.location.href);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [errorMessage, router]);

    // Helper para las clases base de los inputs (diseño moderno)
    const inputBaseClasses =
        "w-full px-4 py-2 border rounded-lg transition-all duration-300 " +
        "bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
        "placeholder-gray-400 text-gray-800";


    return (
        // Contenedor principal: Centrado y con ancho responsivo

        <div className="w-full max-w-md p-8 bg-sky-100 rounded-xl shadow-2xl border border-gray-100">

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Iniciar Sesión
            </h2>

            <form action={formAction} className="space-y-6">

                {/* Campo: Email */}
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        autoFocus
                        placeholder='example@correo.com'
                        className={inputBaseClasses}
                        type="email"
                        name='email'
                        required
                    />
                </div>


                {/* Campo: Password */}
                <div className="space-y-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        placeholder='********'
                        className={inputBaseClasses}
                        type="password"
                        name='password'
                        required
                    />
                </div>

                {/* Mensaje de Error (useActionState) */}
                <div
                    className="flex h-8 items-center space-x-2"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {(errorMessage && errorMessage !== "success") && (
                        <div className="flex items-center p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg w-full">
                            <IoInformationOutline className="h-5 w-5 mr-2" />
                            <p className="text-sm font-medium">{errorMessage}</p>
                        </div>
                    )}
                </div>

                <PendingButton pending={isPending} />


                {/* Divisor */}
                <div className="flex items-center pt-2">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <div className="px-3 text-gray-500 text-sm">O</div>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Botón de Registro */}
                <Link
                    href="/auth/register"
                    className="w-full text-center text-blue-600 font-semibold py-2.5 rounded-lg border border-blue-600 
                                   hover:bg-blue-50 transition-colors duration-200 block"
                >
                    Crear nueva cuenta
                </Link>


            </form>
        </div>

    );
}

// ⬇️ Componente Botón de Envío (con estilos aplicados) ⬇️
function PendingButton({ pending }: { pending: boolean }) {
    return (
        <button
            type='submit'
            className={clsx(
                "w-full text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 shadow-md",
                {
                    "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50": !pending,
                    "bg-gray-400 cursor-not-allowed": pending,
                }
            )}
            disabled={pending}
        >
            {pending ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
        </button>
    );
}