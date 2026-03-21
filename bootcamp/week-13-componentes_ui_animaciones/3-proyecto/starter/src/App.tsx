// ============================================
// PROYECTO: Mini Design System
// App.tsx - starter
// ============================================

// import { ThemeProvider, ThemeToggle } from './components/theme';
// import { Button, Badge, Card, Input, Dialog } from './components/ui';
// import { FadeIn, AnimatedList } from './components/animated';

function App() {
  // TODO: Implementar demo del Design System
  // 1. Envolver con ThemeProvider
  // 2. Mostrar sección de Buttons con variantes
  // 3. Mostrar sección de Badges
  // 4. Mostrar sección de Cards
  // 5. Mostrar sección de Inputs
  // 6. Mostrar Dialog de ejemplo
  // 7. Mostrar componentes animados
  // 8. Incluir ThemeToggle en el header

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mini Design System</h1>
          {/* TODO: Agregar ThemeToggle */}
        </div>
      </header>

      <main className="container mx-auto p-8">
        {/* TODO: Implementar secciones de demo */}
        <p className="text-muted-foreground">
          Implementa tu Mini Design System aquí...
        </p>
      </main>
    </div>
  );
}

export default App;
