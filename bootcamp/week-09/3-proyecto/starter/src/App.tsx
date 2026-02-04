// src/App.tsx

const App: React.FC = () => {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>📦 Gestor de [Tu Dominio]</h1>
        <p>Proyecto Semana 09 - Redux Toolkit</p>
      </header>

      <main style={styles.main}>
        {/* TODO: Agregar tus componentes aquí */}
        <p>Comienza implementando tu aplicación...</p>
        <p>1. Define tus entidades en los slices</p>
        <p>2. Crea los componentes de lista y formulario</p>
        <p>3. Conecta todo con useAppSelector y useAppDispatch</p>
      </main>

      <footer style={styles.footer}>
        <p>Abre Redux DevTools (F12 → Redux) para debugging</p>
      </footer>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  header: {
    padding: '2rem',
    textAlign: 'center',
    borderBottom: '1px solid #333',
  },
  main: {
    flex: 1,
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  footer: {
    padding: '1rem',
    textAlign: 'center',
    borderTop: '1px solid #333',
    color: '#888',
    fontSize: '0.875rem',
  },
};

export default App;
