// ============================================
// EJERCICIO 01: Configuración de QueryClient
// ============================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// PASO 1: Importar React Query
// Descomenta las siguientes líneas:
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// PASO 2: Crear el QueryClient
// El QueryClient gestiona el caché y las configuraciones
// Descomenta las siguientes líneas:
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5, // 5 minutos
//       retry: 1,
//     },
//   },
// });

// PASO 3: Envolver la app con QueryClientProvider
// Descomenta y reemplaza el render actual:

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Por esto:
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   </React.StrictMode>
// );
