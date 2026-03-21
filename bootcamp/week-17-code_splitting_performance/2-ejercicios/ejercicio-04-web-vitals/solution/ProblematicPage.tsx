// ============================================
// EJERCICIO 04: ProblematicPage.tsx (SOLUTION)
// ============================================
// Esta página tiene PROBLEMAS INTENCIONALES de rendimiento
// Se incluye como ejemplo de lo que NO se debe hacer

import { useState, useEffect, type FC } from 'react';

/**
 * Página con problemas intencionales de rendimiento
 *
 * PROBLEMAS IDENTIFICADOS:
 * 1. CLS - Imagen sin dimensiones reservadas
 * 2. CLS - Banner que empuja contenido
 * 3. FID - Handler bloqueante
 * 4. CLS - Lista sin espacio reservado
 */
export const ProblematicPage: FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [showBanner, setShowBanner] = useState(false);

  // PROBLEMA: Efectos que causan layout shifts
  useEffect(() => {
    // Simula carga de datos
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
    }, 1000);

    // Banner que aparece después y empuja contenido (malo para CLS)
    setTimeout(() => {
      setShowBanner(true);
    }, 500);
  }, []);

  // PROBLEMA: Handler que bloquea el main thread (malo para FID)
  const handleClick = () => {
    const start = Date.now();
    while (Date.now() - start < 500) {
      // Bloquea intencionalmente el thread por 500ms
    }
    console.log('Click procesado');
  };

  return (
    <div className="problematic-page">
      <h2>Página con Problemas</h2>
      <p className="warning">
        ⚠️ Esta página tiene problemas intencionales de rendimiento
      </p>

      {/* PROBLEMA 1: CLS - Banner sin espacio reservado */}
      {showBanner && (
        <div
          className="banner"
          style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '20px',
            // SIN altura reservada - causa layout shift
          }}>
          ¡Oferta especial! Este banner empuja el contenido hacia abajo
        </div>
      )}

      {/* PROBLEMA 2: CLS - Imagen sin width/height */}
      <img
        src="https://picsum.photos/800/400"
        alt="Hero"
        // SIN width ni height - el navegador no puede reservar espacio
      />

      {/* PROBLEMA 3: FID - Botón con handler bloqueante */}
      <button
        onClick={handleClick}
        className="danger-btn">
        Click me (handler bloquea 500ms)
      </button>

      {/* PROBLEMA 4: CLS - Lista sin espacio reservado */}
      <div className="data-list">
        {data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {data.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
