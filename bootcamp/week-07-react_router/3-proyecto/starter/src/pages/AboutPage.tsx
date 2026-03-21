// ============================================
// PROYECTO SEMANA 07: AboutPage
// ============================================
// TODO: Personaliza según tu dominio

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* TODO: Personaliza la información */}
      <h2>Acerca de Nosotros</h2>

      <section>
        <h3>Nuestra Misión</h3>
        <p>
          Descripción de la misión de tu aplicación según el dominio asignado.
        </p>
      </section>

      <section>
        <h3>Contacto</h3>
        <ul>
          <li>Email: contacto@ejemplo.com</li>
          <li>Teléfono: +1 234 567 890</li>
          <li>Dirección: Tu Ciudad, País</li>
        </ul>
      </section>
    </div>
  );
};
