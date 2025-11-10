/**
 * Configuración de colores para temas Claro (light) y Oscuro (dark).
 * * NOTA: Esta estructura está diseñada para que puedas acceder a los colores
 * directamente en tu componente basado en el tema activo (e.g., colors[theme].background).
 */
export const AppColors = {
  // === TEMA CLARO (LIGHT) ===
  light: {
    // Fondo Principal: Azul Cielo Muy Claro
    background: '#F0F9FF', // blue-50 de Tailwind o similar

    // Contenedores / Tarjetas: Blanco brillante
    surface: '#FFFFFF',

    // Texto Principal: Gris oscuro para alta legibilidad
    textPrimary: '#1F2937', // gray-800

    // Texto Secundario (etiquetas, placeholders)
    textSecondary: '#6B7280', // gray-500

    // Color de Acento/Interactivo (Botones, Iconos, Enlaces)
    primary: '#3B82F6', // blue-500

    // Color para Acciones Peligrosas (Eliminar cuenta)
    danger: '#DC2626', // red-600

    // Color para Éxito/Status Positivo
    success: '#10B981', // emerald-500

    // Bordes y Divisores
    border: '#E5E7EB', // gray-200
  },

  // === TEMA OSCURO (DARK) ===
  dark: {
    // Fondo Principal: Azul Oscuro Intenso (Cielo Nocturno)
    background: '#111827', // dark blue/gray-900

    // Contenedores / Tarjetas: Un tono más claro que el fondo para distinción
    surface: '#1F2937', // gray-800

    // Texto Principal: Blanco brillante o gris muy claro
    textPrimary: '#F3F4F6', // gray-100

    // Texto Secundario
    textSecondary: '#9CA3AF', // gray-400

    // Color de Acento/Interactivo (Debe seguir siendo vibrante)
    primary: '#60A5FA', // blue-400 (Más claro que en light para resaltar)

    // Color para Acciones Peligrosas (Mismo tono para mantener el significado)
    danger: '#F87171', // red-400

    // Color para Éxito/Status Positivo
    success: '#34D399', // emerald-400

    // Bordes y Divisores
    border: '#374151', // gray-700
  },
};