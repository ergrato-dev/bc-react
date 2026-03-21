// src/app/hooks.ts - SOLUCIÓN

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Hook de dispatch tipado
// Incluye tipos para thunks async
export const useAppDispatch: () => AppDispatch = useDispatch;

// Hook de selector tipado
// El state tiene tipo RootState automáticamente
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
