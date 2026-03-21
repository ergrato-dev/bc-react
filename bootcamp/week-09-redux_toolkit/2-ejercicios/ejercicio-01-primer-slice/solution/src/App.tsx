// src/App.tsx - SOLUCIÓN

import { Counter } from './features/counter/Counter';

const App: React.FC = () => {
  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>Redux Toolkit - Ejercicio 01</h1>
      <Counter />
      <p style={styles.hint}>
        Abre Redux DevTools (F12 → Redux) para ver las acciones
      </p>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242424',
    padding: '2rem',
  },
  heading: {
    color: '#ffffff',
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  hint: {
    color: '#888888',
    marginTop: '2rem',
    fontSize: '0.875rem',
  },
};

export default App;
