// ============================================
// SOLUCIÓN: Queries de RTL
// ============================================

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Profile } from './Profile';

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
  // PASO 1: getByRole con heading
  test('renderiza el nombre en un h1', () => {
    render(<Profile {...mockProfile} />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('María García');
  });

  // PASO 2: getByRole con button y name
  test('renderiza los botones de acción', () => {
    render(<Profile {...mockProfile} />);

    const editButton = screen.getByRole('button', { name: /editar perfil/i });
    const shareButton = screen.getByRole('button', { name: /compartir/i });

    expect(editButton).toBeInTheDocument();
    expect(shareButton).toBeInTheDocument();
  });

  // PASO 3: getByLabelText para inputs
  test('renderiza el input de email con su valor', () => {
    render(<Profile {...mockProfile} />);

    const emailInput = screen.getByLabelText(/email/i);

    expect(emailInput).toHaveValue('maria@example.com');
  });

  // PASO 4: getByText para contenido de texto
  test('renderiza la biografía', () => {
    render(<Profile {...mockProfile} />);

    const bio = screen.getByText(/desarrolladora frontend/i);

    expect(bio).toBeInTheDocument();
  });

  // PASO 5: getByAltText para imágenes
  test('renderiza el avatar con alt text correcto', () => {
    render(<Profile {...mockProfile} />);

    const avatar = screen.getByAltText(/avatar de maría/i);

    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  // PASO 6: getByTitle para elementos con title
  test('muestra el badge de verificado', () => {
    render(<Profile {...mockProfile} />);

    const verifiedBadge = screen.getByTitle(/usuario verificado/i);

    expect(verifiedBadge).toBeInTheDocument();
  });

  // PASO 7: getByRole con links
  test('renderiza los links de redes sociales', () => {
    render(<Profile {...mockProfile} />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

    expect(githubLink).toHaveAttribute('href', 'https://github.com/maria');
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/maria',
    );
  });

  // PASO 8: getAllByRole para múltiples elementos
  test('renderiza la lista de redes sociales', () => {
    render(<Profile {...mockProfile} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
  });

  // PASO 9: getByTestId como último recurso
  test('renderiza las estadísticas del perfil', () => {
    render(<Profile {...mockProfile} />);

    const stats = screen.getByTestId('profile-stats');

    expect(stats).toHaveTextContent('Seguidores: 100');
    expect(stats).toHaveTextContent('Siguiendo: 50');
  });

  // PASO 10: queryByRole para elementos opcionales
  test('no muestra badge de verificado si no está verificado', () => {
    render(
      <Profile
        {...mockProfile}
        isVerified={false}
      />,
    );

    const verifiedBadge = screen.queryByTitle(/usuario verificado/i);

    expect(verifiedBadge).not.toBeInTheDocument();
  });

  test('muestra mensaje cuando no hay redes sociales', () => {
    render(
      <Profile
        {...mockProfile}
        socialLinks={[]}
      />,
    );

    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();

    expect(screen.getByText(/no hay redes sociales/i)).toBeInTheDocument();
  });
});
