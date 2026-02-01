import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// TODO: Importar ThemeProvider cuando lo implementes
// import { ThemeProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* TODO: Envolver App con ThemeProvider */}
    <App />
  </React.StrictMode>,
);
