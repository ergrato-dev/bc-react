// ============================================
// SOLUCIÓN: Configuración de BrowserRouter
// ============================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// BrowserRouter provee el contexto de navegación a toda la app
// Debe estar en el nivel más alto de la aplicación
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
