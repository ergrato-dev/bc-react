// ============================================
// EJERCICIO: Queries de RTL
// ============================================
// Descomenta cada sección y usa la query
// apropiada según la prioridad de RTL
// ============================================

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Profile } from './Profile';

// Datos de prueba reutilizables
const mockProfile = {
  name: 'María García',
  email: 'maria@example.com',
  bio: 'Desarrolladora frontend apasionada por React y TypeScript',
  avatarUrl: 'https://example.com/avatar.jpg',
  isVerified: true,
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/maria' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/maria' },
  ],
};

describe('Profile', () => {
  // ============================================
  // PASO 1: getByRole con heading
  // ============================================
  console.log('--- Paso 1: getByRole con heading ---');

  // Descomenta las siguientes líneas:
  // test('renderiza el nombre en un h1', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getByRole es la query preferida
  //   // { level: 1 } especifica que buscamos un <h1>
  //   const heading = screen.getByRole('heading', { level: 1 });
  //
  //   expect(heading).toHaveTextContent('María García');
  // });

  // ============================================
  // PASO 2: getByRole con button y name
  // ============================================
  console.log('--- Paso 2: getByRole con button ---');

  // Descomenta las siguientes líneas:
  // test('renderiza los botones de acción', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // Usamos { name: /texto/i } para especificar qué botón
  //   const editButton = screen.getByRole('button', { name: /editar perfil/i });
  //   const shareButton = screen.getByRole('button', { name: /compartir/i });
  //
  //   expect(editButton).toBeInTheDocument();
  //   expect(shareButton).toBeInTheDocument();
  // });

  // ============================================
  // PASO 3: getByLabelText para inputs
  // ============================================
  console.log('--- Paso 3: getByLabelText ---');

  // Descomenta las siguientes líneas:
  // test('renderiza el input de email con su valor', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getByLabelText es la mejor opción para inputs con label
  //   const emailInput = screen.getByLabelText(/email/i);
  //
  //   expect(emailInput).toHaveValue('maria@example.com');
  // });

  // ============================================
  // PASO 4: getByText para contenido de texto
  // ============================================
  console.log('--- Paso 4: getByText ---');

  // Descomenta las siguientes líneas:
  // test('renderiza la biografía', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getByText para buscar texto visible
  //   const bio = screen.getByText(/desarrolladora frontend/i);
  //
  //   expect(bio).toBeInTheDocument();
  // });

  // ============================================
  // PASO 5: getByAltText para imágenes
  // ============================================
  console.log('--- Paso 5: getByAltText ---');

  // Descomenta las siguientes líneas:
  // test('renderiza el avatar con alt text correcto', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getByAltText para imágenes
  //   const avatar = screen.getByAltText(/avatar de maría/i);
  //
  //   expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  // });

  // ============================================
  // PASO 6: getByTitle para elementos con title
  // ============================================
  console.log('--- Paso 6: getByTitle ---');

  // Descomenta las siguientes líneas:
  // test('muestra el badge de verificado', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getByTitle para elementos con atributo title
  //   const verifiedBadge = screen.getByTitle(/usuario verificado/i);
  //
  //   expect(verifiedBadge).toBeInTheDocument();
  // });

  // ============================================
  // PASO 7: getByRole con links
  // ============================================
  console.log('--- Paso 7: getByRole con links ---');

  // Descomenta las siguientes líneas:
  // test('renderiza los links de redes sociales', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getByRole para links
  //   const githubLink = screen.getByRole('link', { name: /github/i });
  //   const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  //
  //   expect(githubLink).toHaveAttribute('href', 'https://github.com/maria');
  //   expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/maria');
  // });

  // ============================================
  // PASO 8: getAllByRole para múltiples elementos
  // ============================================
  console.log('--- Paso 8: getAllByRole ---');

  // Descomenta las siguientes líneas:
  // test('renderiza la lista de redes sociales', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getAllByRole para múltiples elementos del mismo tipo
  //   const listItems = screen.getAllByRole('listitem');
  //
  //   expect(listItems).toHaveLength(2);
  // });

  // ============================================
  // PASO 9: getByTestId como último recurso
  // ============================================
  console.log('--- Paso 9: getByTestId (último recurso) ---');

  // Descomenta las siguientes líneas:
  // test('renderiza las estadísticas del perfil', () => {
  //   render(<Profile {...mockProfile} />);
  //
  //   // getByTestId solo cuando no hay otra opción
  //   // En este caso, el div de stats no tiene un rol semántico
  //   const stats = screen.getByTestId('profile-stats');
  //
  //   expect(stats).toHaveTextContent('Seguidores: 100');
  //   expect(stats).toHaveTextContent('Siguiendo: 50');
  // });

  // ============================================
  // PASO 10: queryByRole para elementos opcionales
  // ============================================
  console.log('--- Paso 10: queryByRole (puede no existir) ---');

  // Descomenta las siguientes líneas:
  // test('no muestra badge de verificado si no está verificado', () => {
  //   render(<Profile {...mockProfile} isVerified={false} />);
  //
  //   // queryByTitle retorna null si no encuentra (no lanza error)
  //   const verifiedBadge = screen.queryByTitle(/usuario verificado/i);
  //
  //   expect(verifiedBadge).not.toBeInTheDocument();
  // });
  //
  // test('muestra mensaje cuando no hay redes sociales', () => {
  //   render(<Profile {...mockProfile} socialLinks={[]} />);
  //
  //   // queryByRole para verificar que la lista no existe
  //   const list = screen.queryByRole('list');
  //   expect(list).not.toBeInTheDocument();
  //
  //   // Y verificar que muestra el mensaje alternativo
  //   expect(screen.getByText(/no hay redes sociales/i)).toBeInTheDocument();
  // });
});

console.log('');
console.log('✅ Descomenta cada sección y ejecuta: pnpm test');
