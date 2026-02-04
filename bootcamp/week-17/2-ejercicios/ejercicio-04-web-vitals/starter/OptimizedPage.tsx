// ============================================
// EJERCICIO 04: OptimizedPage.tsx (STARTER)
// ============================================
// Implementa las optimizaciones para cada problema

import { useState, useEffect, type FC } from 'react';

// ============================================
// PASO 1: Optimizar CLS de imágenes
// ============================================
console.log('--- Paso 1: CLS en imágenes ---');

// Descomenta y completa:
// const OptimizedImage: FC = () => {
//   return (
//     <img
//       src="https://picsum.photos/800/400"
//       alt="Hero"
//       // TODO: Agregar width y height para reservar espacio
//       // width={???}
//       // height={???}
//       style={{ maxWidth: '100%', height: 'auto' }}
//     />
//   );
// };

// ============================================
// PASO 2: Optimizar CLS del banner
// ============================================
console.log('--- Paso 2: CLS en banner ---');

// Descomenta y completa:
// interface BannerProps {
//   show: boolean;
// }
//
// const OptimizedBanner: FC<BannerProps> = ({ show }) => {
//   return (
//     <div
//       className="banner-container"
//       style={{
//         // TODO: Reservar altura aunque el banner no se muestre
//         // minHeight: ???,
//         overflow: 'hidden',
//       }}
//     >
//       {show && (
//         <div className="banner" style={{ backgroundColor: 'green', padding: '20px' }}>
//           ¡Oferta especial! (Sin layout shift)
//         </div>
//       )}
//     </div>
//   );
// };

// ============================================
// PASO 3: Optimizar FID del handler
// ============================================
console.log('--- Paso 3: FID en handlers ---');

// Descomenta:
// const useOptimizedHandler = () => {
//   // Usa requestIdleCallback o setTimeout para no bloquear
//   const handleClick = () => {
//     // Respuesta inmediata al usuario
//     console.log('Click recibido');
//
//     // Trabajo pesado diferido
//     requestIdleCallback(() => {
//       // Simula trabajo pesado
//       const start = Date.now();
//       while (Date.now() - start < 500) {
//         // Trabajo pesado
//       }
//       console.log('Trabajo completado en background');
//     });
//   };
//
//   return handleClick;
// };

// ============================================
// COMPONENTE OPTIMIZADO
// ============================================

export const OptimizedPage: FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
    }, 1000);

    setTimeout(() => {
      setShowBanner(true);
    }, 500);
  }, []);

  return (
    <div className="optimized-page">
      <h2>Página Optimizada</h2>

      {/* TODO: Implementar los componentes optimizados */}
      <p>
        Implementa las optimizaciones descomentando y completando el código
        arriba.
      </p>
      <p>Show banner: {showBanner.toString()}</p>
      <p>Data items: {data.length}</p>
    </div>
  );
};
