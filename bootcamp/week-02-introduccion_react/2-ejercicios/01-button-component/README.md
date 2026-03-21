# 🔘 Ejercicio 01: Button Component

## ⏱️ Tiempo: 20 minutos

## 🎯 Objetivo

Crear un componente `Button` reutilizable con **props tipados** usando TypeScript.

## 📚 Concepto Teórico

Revisa estos archivos de teoría:

- [Props Tipado](../../1-teoria/04-props-tipado-validacion.md)
- [Componentes Funcionales](../../1-teoria/03-componentes-funcionales-typescript.md)

## 📝 Requisitos del Componente

Un botón debe ser flexible y reutilizable:

```typescript
// El botón puede tener diferentes estilos
<Button text="Enviar" onClick={handleSubmit} variant="primary" />
<Button text="Cancelar" onClick={handleCancel} variant="secondary" />

// El botón puede estar deshabilitado
<Button text="Guardar" onClick={handleSave} disabled />

// Diferentes tamaños (opcional)
<Button text="Click" onClick={handleClick} size="large" />
```

## 🔍 Desglose del Ejercicio

### Paso 1: Definir Props con TypeScript

Necesitamos una **interfaz** que describa qué datos recibe el botón:

- `text` (string): el texto que muestra el botón
- `onClick` (función): qué ocurre cuando haces click
- `variant` (opcional): tipo de botón (primary, secondary)
- `disabled` (opcional): si está deshabilitado

**Abre `starter/Button.tsx`** y descomenta la sección "PASO 1".

### Paso 2: Crear el Componente Funcional

Crear una función que reciba las props y retorne JSX:

```typescript
export const Button: React.FC<ButtonProps> = ({ text, onClick, ... }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

**Descomenta la sección "PASO 2"** en el mismo archivo.

### Paso 3: Agregar Estilos Dinámicos

Usando la prop `variant` para cambiar el estilo:

```typescript
const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
```

**Descomenta la sección "PASO 3"**.

### Paso 4: Agregar Estados Dinámicos

Usar `disabled` para desabilitar el botón:

```typescript
disabled={disabled}
className={`btn ${variantClass} ${disabled ? 'disabled' : ''}`}
```

**Descomenta la sección "PASO 4"**.

### Paso 5: Usar el Componente

En `App.tsx`, importa y usa el botón:

```typescript
import { Button } from './components/Button';

const App = () => {
  const handleClick = () => alert('¡Botón clickeado!');

  return (
    <div>
      <Button text="Primary" onClick={handleClick} variant="primary" />
      <Button text="Secondary" onClick={handleClick} variant="secondary" />
      <Button text="Disabled" onClick={handleClick} disabled />
    </div>
  );
};
```

**Descomenta la sección "PASO 5"** en `starter/App.tsx`.

## 🎨 CSS para estilos

Agrega esta CSS a tu `App.css` o crea `Button.css`:

```css
.btn {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #61dafb;
  color: #000;
}

.btn-primary:hover:not(.disabled) {
  background-color: #4fc9d8;
}

.btn-secondary {
  background-color: #646cff;
  color: #fff;
}

.btn-secondary:hover:not(.disabled) {
  background-color: #525ae8;
}

.btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## ✅ Verificación

Cuando termines, tu botón debe:

- ✅ Mostrar el texto pasado por props
- ✅ Ejecutar la función onClick cuando se clickea
- ✅ Cambiar de color según `variant`
- ✅ Estar deshabilitado si `disabled={true}`
- ✅ Tener tipos TypeScript correctos (sin errores)

## 🧪 Prueba Rápida

Ejecuta en la terminal:

```bash
pnpm dev
```

Luego:

1. Haz click en cada botón - ¿se ejecuta onClick?
2. Intenta clickear el botón deshabilitado - ¿no hace nada?
3. Verifica los tipos - ¿TypeScript da errores?

## 💡 Tips

- Las props marcadas con `?` son **opcionales**
- Usa desestructuración en el argumento del componente: `({ text, onClick, ... })`
- Los valores por defecto se asignan en la desestructuración: `variant = 'primary'`
- TypeScript debería sugerir qué props puedes pasar

## 🔗 Próximo Paso

→ [Ejercicio 02: Counter Hook](../02-counter-hook/README.md)

## 📚 Recursos Adicionales

- [React Docs: Components and Props](https://react.dev/learn/passing-props-to-a-component)
- [TypeScript: Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Teoría: Props Tipado](../../1-teoria/04-props-tipado-validacion.md)

---

_Ver solución: [solution/Button.tsx](./solution/Button.tsx)_
