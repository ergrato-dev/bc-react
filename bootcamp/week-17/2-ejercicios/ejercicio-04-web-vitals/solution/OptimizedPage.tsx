// ============================================
// EJERCICIO 04: OptimizedPage.tsx (SOLUTION)
// ============================================
// Página con todas las optimizaciones aplicadas

import { useState, useEffect, type FC } from 'react';

// ============================================
// COMPONENTE OPTIMIZADO: Imagen con dimensiones
// ============================================

/**
 * Imagen con width y height especificados
 * El navegador reserva espacio ANTES de cargar la imagen
 * Esto previene CLS (Cumulative Layout Shift)
 */
const OptimizedImage: FC = () => {
  return (
    <img
      src="https://picsum.photos/800/400"
      alt="Hero"
      // SOLUCIÓN: Especificar dimensiones para reservar espacio
      width={800}
      height={400}
      // CSS para mantener responsividad
      style={{
        maxWidth: '100%',
        height: 'auto',
        aspectRatio: '800 / 400', // Mantiene proporción
      }}
    />
  );
};

// ============================================
// COMPONENTE OPTIMIZADO: Banner con espacio reservado
// ============================================

interface BannerProps {
  show: boolean;
}

/**
 * Banner con altura reservada siempre
 * El contenedor mantiene su altura aunque el banner no se muestre
 */
const OptimizedBanner: FC<BannerProps> = ({ show }) => {
  return (
    <div
      className="banner-container"
      style={{
        // SOLUCIÓN: Reservar altura siempre
        minHeight: '64px', // Altura del banner
        overflow: 'hidden',
        transition: 'opacity 0.3s ease',
      }}>
      {show && (
        <div
          className="banner"
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '20px',
          }}>
          ¡Oferta especial! (Sin layout shift)
        </div>
      )}
    </div>
  );
};

// ============================================
// HOOK OPTIMIZADO: Handler no bloqueante
// ============================================

/**
 * Hook que proporciona un handler optimizado
 * Usa requestIdleCallback para diferir trabajo pesado
 */
const useOptimizedHandler = () => {
  const handleClick = () => {
    // SOLUCIÓN: Respuesta inmediata al usuario
    console.log('Click recibido - respuesta instantánea');

    // Trabajo pesado diferido usando requestIdleCallback
    // Esto permite que el navegador priorice la interacción del usuario
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Simula trabajo pesado cuando el navegador está idle
        const start = Date.now();
        while (Date.now() - start < 500) {
          // Trabajo pesado
        }
        console.log('Trabajo pesado completado en background');
      });
    } else {
      // Fallback para navegadores que no soportan requestIdleCallback
      setTimeout(() => {
        const start = Date.now();
        while (Date.now() - start < 500) {
          // Trabajo pesado
        }
        console.log('Trabajo pesado completado en background');
      }, 0);
    }
  };

  return handleClick;
};

// ============================================
// COMPONENTE OPTIMIZADO: Lista con skeleton
// ============================================

interface DataListProps {
  data: string[];
  isLoading: boolean;
}

/**
 * Lista con skeleton placeholder
 * El skeleton tiene la misma altura que el contenido final
 * Esto previene CLS cuando los datos cargan
 */
const OptimizedDataList: FC<DataListProps> = ({ data, isLoading }) => {
  // Altura estimada por item para el skeleton
  const ITEM_HEIGHT = 24; // px
  const EXPECTED_ITEMS = 5;
  const SKELETON_HEIGHT = ITEM_HEIGHT * EXPECTED_ITEMS;

  return (
    <div
      className="data-list"
      style={{
        // SOLUCIÓN: Altura mínima reservada
        minHeight: `${SKELETON_HEIGHT}px`,
      }}>
      {isLoading ? (
        // Skeleton con misma altura que contenido final
        <div
          className="skeleton"
          style={{ height: `${SKELETON_HEIGHT}px` }}>
          <p>Cargando...</p>
          {/* Barras skeleton */}
          {Array.from({ length: EXPECTED_ITEMS }).map((_, i) => (
            <div
              key={i}
              className="skeleton-bar"
              style={{
                height: '20px',
                backgroundColor: '#e5e7eb',
                marginBottom: '4px',
                borderRadius: '4px',
                animation: 'pulse 1.5s infinite',
              }}
            />
          ))}
        </div>
      ) : (
        <ul>
          {data.map((item, i) => (
            <li
              key={i}
              style={{ height: `${ITEM_HEIGHT}px` }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export const OptimizedPage: FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = useOptimizedHandler();

  useEffect(() => {
    // Carga de datos
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
      setIsLoading(false);
    }, 1000);

    // Banner aparece después
    setTimeout(() => {
      setShowBanner(true);
    }, 500);
  }, []);

  return (
    <div className="optimized-page">
      <h2>Página Optimizada</h2>
      <p className="success">
        ✅ Esta página tiene todas las optimizaciones aplicadas
      </p>

      {/* Banner con espacio reservado */}
      <OptimizedBanner show={showBanner} />

      {/* Imagen con dimensiones */}
      <OptimizedImage />

      {/* Botón con handler optimizado */}
      <button
        onClick={handleClick}
        className="success-btn">
        Click me (handler no bloqueante)
      </button>

      {/* Lista con skeleton */}
      <OptimizedDataList
        data={data}
        isLoading={isLoading}
      />
    </div>
  );
};
