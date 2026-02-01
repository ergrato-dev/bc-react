// src/app/hooks.ts

// ============================================
// PASO 4: Crear Hooks Tipados
// ============================================

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

console.log('--- Paso 4: Crear Hooks Tipados ---');

// ============================================
// 4.1 Importar Tipos del Store
// ============================================
// Descomenta la siguiente línea:

// import type { RootState, AppDispatch } from './store';

// ============================================
// 4.2 Crear useAppDispatch Tipado
// ============================================
// Descomenta las siguientes líneas:

// Este hook reemplaza a useDispatch
// Incluye tipos para thunks async
// export const useAppDispatch: () => AppDispatch = useDispatch;

// ============================================
// 4.3 Crear useAppSelector Tipado
// ============================================
// Descomenta las siguientes líneas:

// Este hook reemplaza a useSelector
// El state tiene tipo RootState automáticamente
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

console.log('');
