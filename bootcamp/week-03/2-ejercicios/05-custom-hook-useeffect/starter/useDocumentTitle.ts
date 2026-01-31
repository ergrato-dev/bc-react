import { useEffect } from 'react';

// ============================================
// SECCIÓN 1: useDocumentTitle
// ============================================
console.log('--- Sección 1: useDocumentTitle ---');

// QUÉ: Custom hook para actualizar título del documento
// PARA: Reutilizar lógica de cambio de título en múltiples componentes
// IMPACTO: Título se actualiza cuando cambia el parámetro

// Descomenta las siguientes líneas:
// /**
//  * QUÉ: Hook que actualiza document.title
//  * PARA: Cambiar el título de la pestaña del navegador
//  * IMPACTO: Mejora UX mostrando contexto en la pestaña
//  *
//  * @param title - Nuevo título para el documento
//  *
//  * @example
//  * useDocumentTitle('Mi Página - Dashboard');
//  */
// export const useDocumentTitle = (title: string): void => {
//   useEffect(() => {
//     // QUÉ: Guardar título anterior
//     // PARA: Poder restaurarlo al desmontar
//     // IMPACTO: No contamina el título global al salir del componente
//     const previousTitle = document.title;
//
//     // QUÉ: Actualizar título con el nuevo valor
//     // PARA: Reflejar el contenido actual en la pestaña
//     // IMPACTO: Usuario ve contexto sin mirar la página
//     document.title = title;
//     console.log(`📄 Título actualizado: "${title}"`);
//
//     // QUÉ: Cleanup que restaura título anterior
//     // PARA: Volver al título original al desmontar
//     // IMPACTO: Limpieza correcta del side effect
//     return () => {
//       document.title = previousTitle;
//       console.log(`🧹 Título restaurado: "${previousTitle}"`);
//     };
//   }, [title]); // Re-ejecutar cuando title cambia
// };

console.log('');

// ============================================
// EJEMPLO DE USO
// ============================================

// Descomenta para ver ejemplo:
// import React from 'react';
//
// export const ProductPage: React.FC<{ productName: string }> = ({
//   productName,
// }) => {
//   // QUÉ: Usar el custom hook
//   // PARA: Actualizar título con nombre del producto
//   // IMPACTO: Título muestra producto actual
//   useDocumentTitle(`${productName} - Mi Tienda`);
//
//   return (
//     <div>
//       <h1>{productName}</h1>
//       <p>Detalles del producto...</p>
//     </div>
//   );
// };
