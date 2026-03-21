// src/main.tsx

// ============================================
// PASO 5: Conectar el Provider
// ============================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('--- Paso 5: Conectar el Provider ---');

// ============================================
// 5.1 Importar Provider y Store
// ============================================
// Descomenta las siguientes líneas:

// import { Provider } from 'react-redux';
// import { store } from './app/store';

// ============================================
// 5.2 Envolver App con Provider
// ============================================
// Reemplaza el render actual con:

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// ============================================
// Código actual (sin Redux) - REEMPLAZAR
// ============================================

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
