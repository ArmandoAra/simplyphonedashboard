'use client'

import { loginAfterRegister, registerUser } from "@/actions/auth";
import clsx from "clsx";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"

// Define los tipos de entrada del formulario
type FormInputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// Helper para las clases base de los inputs (mejorado para diseño)
const inputBaseClasses =
    "w-full px-4 py-2 border rounded-lg transition-all duration-300 " +
    "bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
    "placeholder-gray-400 text-gray-800";

// Helper para el mensaje de error de validación de RHF
const ErrorMessage = ({ message }: { message: string | undefined }) => {
    if (!message) return null;
    return <span className="text-red-500 text-sm mt-1">{message}</span>;
};

export const RegisterForm = () => {
    // Inicializa React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false); // Estado para deshabilitar el botón

    // Función de envío (mantiene tu lógica)
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setError(null);
        setIsLoading(true);

        const { name, email, password, confirmPassword } = data;

        // 1. Validar coincidencia de contraseñas (lado del cliente)
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            setIsLoading(false);
            return;
        }

        // 2. Registrar usuario (Server Action)
        const result = await registerUser(
            name,
            email.toLowerCase(),
            password
        );

        if (!result.ok) {
            setError(result.message);
            setIsLoading(false);
            return;
        }

        // 3. Iniciar sesión después del registro (Server Action)
        const loginResult = await loginAfterRegister(email.toLowerCase(), password);

        if (!loginResult.ok) {
            // Si falla el login, mostramos error, pero el usuario ya está creado
            setError('Registro exitoso, pero el inicio de sesión falló. Intenta iniciar sesión manualmente.');
            setIsLoading(false);
            return;
        }

        // 4. Redirigir al Home si todo fue bien
        window.location.replace('/');
        // Nota: La redirección en el cliente no necesita setIsLoading(false)

    }

    return (
        // Contenedor principal: Centrado y con ancho responsivo (diseño aplicado)
        <div className="w-full max-w-md p-8 bg-sky-100 rounded-xl shadow-2xl border border-gray-100">

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Crea tu Cuenta
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                {/* Campo: Name */}
                <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        autoFocus
                        placeholder='John Doe'
                        className={clsx(inputBaseClasses, {
                            'border-red-500 focus:ring-red-500': errors.name,
                        })}
                        type="text"
                        disabled={isLoading}
                        {...register('name', { required: 'El nombre es obligatorio' })}
                    />
                    <ErrorMessage message={errors.name?.message as string} />
                </div>

                {/* Campo: Email */}
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        placeholder='example@correo.com'
                        className={clsx(inputBaseClasses, {
                            'border-red-500 focus:ring-red-500': errors.email,
                        })}
                        type="email"
                        disabled={isLoading}
                        {...register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Formato de email inválido'
                            }
                        })}
                    />
                    <ErrorMessage message={errors.email?.message as string} />
                </div>

                {/* Campo: Password */}
                <div className="space-y-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        placeholder='********'
                        className={clsx(inputBaseClasses, {
                            'border-red-500 focus:ring-red-500': errors.password,
                        })}
                        type="password"
                        disabled={isLoading}
                        {...register('password', { required: 'La contraseña es obligatoria', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })}
                    />
                    <ErrorMessage message={errors.password?.message as string} />
                </div>

                {/* Campo: Confirm Password */}
                <div className="space-y-1">
                    <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">Confirmar Contraseña</label>
                    <input
                        placeholder='********'
                        className={clsx(inputBaseClasses, {
                            'border-red-500 focus:ring-red-500': errors.confirmPassword,
                        })}
                        type="password"
                        disabled={isLoading}
                        {...register('confirmPassword', { required: 'La confirmación es obligatoria' })}
                    />
                    <ErrorMessage message={errors.confirmPassword?.message as string} />
                </div>

                {/* Mensaje de Error General (Server/Global) */}
                {
                    error &&
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                }

                {/* Botón de Enviar */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={clsx(
                        "w-full text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 shadow-md",
                        {
                            "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50": !isLoading,
                            "bg-gray-400 cursor-not-allowed": isLoading,
                        }
                    )}
                >
                    {isLoading ? 'Creando Cuenta...' : 'Crear Cuenta'}
                </button>

                {/* Enlace a Login */}
                <div className="text-center text-sm text-gray-600 pt-2">
                    ¿Ya tienes una cuenta? <a href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">Inicia Sesión</a>
                </div>
            </form>

        </div>
    );
};