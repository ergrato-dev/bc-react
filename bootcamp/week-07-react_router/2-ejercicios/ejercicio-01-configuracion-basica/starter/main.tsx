// ============================================
// EJERCICIO 01: Configuración de BrowserRouter
// ============================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ============================================
// PASO 1: Importar BrowserRouter
// ============================================
console.log('--- Paso 1: Importar BrowserRouter ---');

// BrowserRouter provee el contexto de navegación a toda la app
// Descomenta la siguiente línea:
// import { BrowserRouter } from 'react-router-dom';

// ============================================
// PASO 2: Envolver App con BrowserRouter
// ============================================
console.log('--- Paso 2: Envolver App con BrowserRouter ---');

// BrowserRouter debe estar en el nivel más alto de la app
// Descomenta y reemplaza el ReactDOM.createRoot actual:

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Reemplázalo por:
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

console.log('');
