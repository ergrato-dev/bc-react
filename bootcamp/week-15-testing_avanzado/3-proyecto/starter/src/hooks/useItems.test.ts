import { renderHook, waitFor, act } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { useItems } from './useItems';
import * as api from '../services/api';

// TODO: Mock del módulo api
// vi.mock('../services/api');

describe('useItems', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ============================================
  // TODO: Test de carga inicial
  // ============================================
  // test('carga items al montar', async () => {
  //   const mockItems = [
  //     { id: 1, name: 'Item 1', description: 'Desc 1' },
  //     { id: 2, name: 'Item 2', description: 'Desc 2' },
  //   ];
  //   vi.mocked(api.fetchItems).mockResolvedValue(mockItems);
  //
  //   const { result } = renderHook(() => useItems());
  //
  //   // Inicialmente está cargando
  //   expect(result.current.loading).toBe(true);
  //
  //   // Esperar a que cargue
  //   await waitFor(() => {
  //     expect(result.current.loading).toBe(false);
  //   });
  //
  //   expect(result.current.items).toEqual(mockItems);
  //   expect(result.current.error).toBeNull();
  // });

  // ============================================
  // TODO: Test de error de carga
  // ============================================
  // test('maneja error al cargar', async () => {
  //   vi.mocked(api.fetchItems).mockRejectedValue(new Error('Error de red'));
  //
  //   const { result } = renderHook(() => useItems());
  //
  //   await waitFor(() => {
  //     expect(result.current.loading).toBe(false);
  //   });
  //
  //   expect(result.current.error).toBe('Error de red');
  //   expect(result.current.items).toEqual([]);
  // });

  // ============================================
  // TODO: Test de agregar item
  // ============================================
  // test('agrega item correctamente', async () => {
  //   vi.mocked(api.fetchItems).mockResolvedValue([]);
  //   vi.mocked(api.createItem).mockResolvedValue({
  //     id: 1,
  //     name: 'Nuevo',
  //     description: 'Descripción',
  //   });
  //
  //   const { result } = renderHook(() => useItems());
  //
  //   await waitFor(() => {
  //     expect(result.current.loading).toBe(false);
  //   });
  //
  //   await act(async () => {
  //     await result.current.addItem({ name: 'Nuevo', description: 'Descripción' });
  //   });
  //
  //   expect(result.current.items).toHaveLength(1);
  //   expect(result.current.items[0].name).toBe('Nuevo');
  // });

  // ============================================
  // TODO: Test de eliminar item
  // ============================================
  // test('elimina item correctamente', async () => {
  //   vi.mocked(api.fetchItems).mockResolvedValue([
  //     { id: 1, name: 'Item 1', description: 'Desc' },
  //   ]);
  //   vi.mocked(api.deleteItem).mockResolvedValue(undefined);
  //
  //   const { result } = renderHook(() => useItems());
  //
  //   await waitFor(() => {
  //     expect(result.current.items).toHaveLength(1);
  //   });
  //
  //   await act(async () => {
  //     await result.current.removeItem(1);
  //   });
  //
  //   expect(result.current.items).toHaveLength(0);
  // });

  // ============================================
  // TODO: Test de error al agregar
  // ============================================
  // test('maneja error al agregar', async () => {
  //   vi.mocked(api.fetchItems).mockResolvedValue([]);
  //   vi.mocked(api.createItem).mockRejectedValue(new Error('Error al crear'));
  //
  //   const { result } = renderHook(() => useItems());
  //
  //   await waitFor(() => {
  //     expect(result.current.loading).toBe(false);
  //   });
  //
  //   await expect(
  //     act(async () => {
  //       await result.current.addItem({ name: 'Test', description: 'Test' });
  //     })
  //   ).rejects.toThrow();
  //
  //   expect(result.current.error).toBe('Error al crear');
  // });

  // ============================================
  // TODO: Test de error al eliminar
  // ============================================
  // test('maneja error al eliminar', async () => {
  //   vi.mocked(api.fetchItems).mockResolvedValue([
  //     { id: 1, name: 'Item', description: 'Desc' },
  //   ]);
  //   vi.mocked(api.deleteItem).mockRejectedValue(new Error('Error al eliminar'));
  //
  //   const { result } = renderHook(() => useItems());
  //
  //   await waitFor(() => {
  //     expect(result.current.items).toHaveLength(1);
  //   });
  //
  //   await expect(
  //     act(async () => {
  //       await result.current.removeItem(1);
  //     })
  //   ).rejects.toThrow();
  //
  //   expect(result.current.error).toBe('Error al eliminar');
  //   // El item no debe eliminarse si hubo error
  //   expect(result.current.items).toHaveLength(1);
  // });

  // Placeholder temporal (borrar cuando descomentes los tests)
  test.skip('placeholder - descomenta los tests reales', () => {});
});
