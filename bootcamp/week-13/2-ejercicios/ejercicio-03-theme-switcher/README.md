# Ejercicio 03: Theme Switcher con Context

## 🎯 Objetivo

Implementar un sistema de theming completo con React Context, CSS Custom Properties y persistencia en localStorage.

## ⏱️ Duración

45 minutos

## 📋 Descripción

Crearás un `ThemeProvider` que gestiona dark/light mode con transiciones suaves y persistencia.

## 🛠️ Requisitos Previos

- Teoría: `03-theming-dark-mode.md`
- Conocimiento de React Context

## 📝 Pasos

### Paso 1: Definir tipos y constantes (5 min)

Define:

- Type `Theme = 'light' | 'dark' | 'system'`
- Interface `ThemeContextType` con:
  - `theme`: tema actual
  - `setTheme`: función para cambiar tema
  - `resolvedTheme`: tema efectivo (light/dark)

### Paso 2: ThemeProvider con Context (15 min)

Implementa `ThemeProvider` que:

- Lee preferencia inicial de localStorage o usa 'system'
- Detecta preferencia del sistema con `matchMedia`
- Actualiza clase `dark` en `document.documentElement`
- Persiste cambios en localStorage

### Paso 3: Hook useTheme (5 min)

Crea un hook `useTheme()` que:

- Consume el ThemeContext
- Lanza error si se usa fuera del Provider
- Retorna `{ theme, setTheme, resolvedTheme }`

### Paso 4: Componente ThemeToggle (10 min)

Crea un botón toggle que:

- Muestra icono según tema actual (Sol/Luna/Monitor)
- Cicla entre: light → dark → system
- Incluye animación de transición del icono
- Muestra tooltip con tema actual

### Paso 5: CSS Variables (10 min)

Configura Tailwind con CSS variables:

```css
:root {
  --background: 255 255 255;
  --foreground: 10 10 10;
  --card: 250 250 250;
  --primary: 59 130 246;
}

.dark {
  --background: 10 10 10;
  --foreground: 250 250 250;
  --card: 23 23 23;
  --primary: 96 165 250;
}
```

## ✅ Criterios de Éxito

- [ ] Tema persiste al recargar página
- [ ] 'system' respeta preferencia del OS
- [ ] Transición suave al cambiar tema
- [ ] Sin flash de tema incorrecto al cargar
- [ ] Hook lanza error descriptivo si falta Provider
- [ ] Toggle muestra icono correcto

## 🎨 Resultado Esperado

```tsx
// En App.tsx
<ThemeProvider defaultTheme="system">
  <div className="min-h-screen bg-background text-foreground">
    <header className="flex justify-between p-4">
      <h1>Mi App</h1>
      <ThemeToggle />
    </header>
    {/* contenido */}
  </div>
</ThemeProvider>;

// En cualquier componente
const { theme, setTheme, resolvedTheme } = useTheme();
```

## 💡 Tips

- Usa `useEffect` para sincronizar con el DOM
- `window.matchMedia('(prefers-color-scheme: dark)')` detecta preferencia
- Añade listener para cambios de preferencia del sistema
- Considera usar `useLayoutEffect` para evitar flash

## 📚 Recursos

- [MDN: matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [Tailwind: Dark Mode](https://tailwindcss.com/docs/dark-mode)
