import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { UserProfile } from './UserProfile';
import { fetchUser } from '../services/api';

// ============================================
// PASO 1: Mock del módulo api.ts
// ============================================
vi.mock('../services/api');

describe('UserProfile', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // ============================================
  // PASO 2: Test de carga exitosa
  // ============================================
  test('muestra datos del usuario cuando la carga es exitosa', async () => {
    // Arrange - configurar mock
    vi.mocked(fetchUser).mockResolvedValue({
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
    });

    // Act
    render(<UserProfile userId={1} />);

    // Assert - esperar a que cargue
    await waitFor(() => {
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    });

    expect(screen.getByText('juan@example.com')).toBeInTheDocument();
    expect(fetchUser).toHaveBeenCalledWith(1);
  });

  // ============================================
  // PASO 3: Test de estado de carga
  // ============================================
  test('muestra estado de carga inicialmente', () => {
    // Mock que nunca resuelve
    vi.mocked(fetchUser).mockImplementation(() => new Promise(() => {}));

    render(<UserProfile userId={1} />);

    expect(screen.getByRole('status')).toHaveTextContent('Cargando...');
  });

  // ============================================
  // PASO 4: Test de error de API
  // ============================================
  test('muestra error cuando la API falla', async () => {
    // Arrange - mock que rechaza
    vi.mocked(fetchUser).mockRejectedValue(new Error('Error de red'));

    // Act
    render(<UserProfile userId={1} />);

    // Assert
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Error de red');
    });
  });

  // ============================================
  // PASO 5: spyOn de localStorage
  // ============================================
  test('guarda usuario en localStorage después de cargar', async () => {
    // Arrange
    const mockUser = { id: 1, name: 'Test', email: 'test@test.com' };
    vi.mocked(fetchUser).mockResolvedValue(mockUser);

    // Espiar localStorage.setItem
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    // Act
    render(<UserProfile userId={1} />);

    // Assert
    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith(
        'lastUser',
        JSON.stringify(mockUser),
      );
    });
  });

  // ============================================
  // PASO 6: Test con diferentes userIds
  // ============================================
  test('llama a fetchUser con el userId correcto', async () => {
    vi.mocked(fetchUser).mockResolvedValue({
      id: 42,
      name: 'User 42',
      email: 'user42@example.com',
    });

    render(<UserProfile userId={42} />);

    await waitFor(() => {
      expect(fetchUser).toHaveBeenCalledWith(42);
    });
  });
});
