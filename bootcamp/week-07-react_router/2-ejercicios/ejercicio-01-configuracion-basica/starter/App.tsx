// ============================================
// EJERCICIO 01: Configuración de Routes
// ============================================

// ============================================
// PASO 3: Importar componentes de React Router
// ============================================
console.log('--- Paso 3: Importar Routes y Route ---');

// Descomenta las siguientes líneas:
// import { Routes, Route } from 'react-router-dom';
// import { HomePage } from './pages/HomePage';
// import { AboutPage } from './pages/AboutPage';
// import { ContactPage } from './pages/ContactPage';

// ============================================
// PASO 4: Configurar las rutas
// ============================================
console.log('--- Paso 4: Configurar las rutas ---');

const App: React.FC = () => {
  // Descomenta el return con las rutas:
  return (
    <div>
      <h1>App sin rutas configuradas</h1>
      <p>Descomenta el código en App.tsx para configurar las rutas.</p>
    </div>
  );

  // return (
  //   <div className="app">
  //     <header>
  //       <h1>Mi Primera App con Router</h1>
  //     </header>
  //
  //     <main>
  //       <Routes>
  //         {/* Ruta principal */}
  //         <Route path="/" element={<HomePage />} />
  //
  //         {/* Ruta about */}
  //         <Route path="/about" element={<AboutPage />} />
  //
  //         {/* Ruta contact */}
  //         <Route path="/contact" element={<ContactPage />} />
  //       </Routes>
  //     </main>
  //   </div>
  // );
};

export default App;
