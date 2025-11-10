// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: 'class',
//     content: [
//         "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 // Colores principales
//                 background: 'var(--color-background)',
//                 surface: 'var(--color-surface)',
//                 primary: 'var(--color-primary)',
//                 danger: 'var(--color-danger)',
//                 success: 'var(--color-success)',
//                 border: 'var(--color-border)',

//                 // 🔥 SOLUCIÓN: Usa objetos anidados en lugar de guiones
//                 text: {
//                     primary: 'var(--color-text-primary)',
//                     secondary: 'var(--color-text-secondary)',
//                 },
//             },
//             fontFamily: {
//                 sans: ['Inter', 'sans-serif'],
//             }
//         },
//     },
//     plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector', // En v4 usa 'selector' en lugar de 'class'
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
}