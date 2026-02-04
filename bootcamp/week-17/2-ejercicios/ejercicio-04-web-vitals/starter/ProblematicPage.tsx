// ============================================
// EJERCICIO 04: ProblematicPage.tsx (STARTER)
// ============================================
// Esta página tiene PROBLEMAS INTENCIONALES de rendimiento
// El estudiante debe identificarlos

import { useState, useEffect, type FC } from 'react';

// ============================================
// PROBLEMA 1: Imagen sin dimensiones (causa CLS)
// ============================================

// ============================================
// PROBLEMA 2: Layout shift por contenido dinámico
// ============================================

// ============================================
// PROBLEMA 3: JavaScript bloqueante (causa FID)
// ============================================

export const ProblematicPage: FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [showBanner, setShowBanner] = useState(false);

  // PROBLEMA: Efecto que bloquea y causa layout shift
  useEffect(() => {
    // Simula carga de datos que tarda
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
    }, 1000);

    // Banner que aparece después y empuja contenido
    setTimeout(() => {
      setShowBanner(true);
    }, 500);
  }, []);

  // PROBLEMA: Handler costoso que bloquea el thread
  const handleClick = () => {
    // Simula operación bloqueante
    const start = Date.now();
    while (Date.now() - start < 500) {
      // Bloquea intencionalmente
    }
    console.log('Click procesado');
  };

  return (
    <div className="problematic-page">
      <h2>Página con Problemas</h2>

      {/* PROBLEMA 1: CLS - Banner que aparece y empuja contenido */}
      {showBanner && (
        <div
          className="banner"
          style={{
            backgroundColor: 'red',
            padding: '20px',
            // Sin height reservada!
          }}>
          ¡Oferta especial! Este banner empuja el contenido
        </div>
      )}

      {/* PROBLEMA 2: CLS - Imagen sin dimensiones */}
      <img
        src="https://picsum.photos/800/400"
        alt="Hero"
        // Sin width ni height!
      />

      {/* PROBLEMA 3: FID - Botón con handler costoso */}
      <button onClick={handleClick}>Click me (handler lento)</button>

      {/* PROBLEMA 4: CLS - Lista que aparece sin espacio reservado */}
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
