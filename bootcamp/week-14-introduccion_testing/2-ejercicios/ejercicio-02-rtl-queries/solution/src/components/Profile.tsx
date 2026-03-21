// ============================================
// Componente Profile para practicar queries
// ============================================

interface ProfileProps {
  name: string;
  email: string;
  bio: string;
  avatarUrl: string;
  isVerified: boolean;
  socialLinks: { name: string; url: string }[];
}

export function Profile({
  name,
  email,
  bio,
  avatarUrl,
  isVerified,
  socialLinks,
}: ProfileProps) {
  return (
    <article>
      <header>
        <h1>{name}</h1>
        {isVerified && <span title="Usuario verificado">✓</span>}
      </header>

      <img
        src={avatarUrl}
        alt={`Avatar de ${name}`}
      />

      <section>
        <h2>Información</h2>
        <p>{bio}</p>

        <label>
          Email
          <input
            type="email"
            value={email}
            readOnly
          />
        </label>
      </section>

      <section>
        <h2>Redes Sociales</h2>
        {socialLinks.length > 0 ? (
          <ul>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay redes sociales configuradas</p>
        )}
      </section>

      <footer>
        <button>Editar Perfil</button>
        <button>Compartir</button>
      </footer>

      <div data-testid="profile-stats">
        <span>Seguidores: 100</span>
        <span>Siguiendo: 50</span>
      </div>
    </article>
  );
}
