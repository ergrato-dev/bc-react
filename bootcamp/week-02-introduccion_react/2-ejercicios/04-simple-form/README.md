# 📝 Ejercicio 04: Simple Form

## 🎯 Objetivos

- Crear formularios controlados en React
- Manejar eventos `onChange` y `onSubmit`
- Usar `preventDefault()` para evitar recarga de página
- Validar datos antes de enviar
- Tipar eventos sintéticos con TypeScript
- Limpiar formulario después de envío

## 📖 Concepto: Formularios Controlados

En React, los **formularios controlados** son aquellos donde React controla el valor del input:

```typescript
const [value, setValue] = useState('');

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

**Ventajas:**

- Single source of truth (el estado es la única fuente)
- Validación en tiempo real
- Fácil manipular/limpiar valores
- Control total sobre el input

## 🛠️ Desglose del Ejercicio

Construirás un formulario de contacto con:

1. **Input de nombre** (requerido)
2. **Input de email** (requerido, validación)
3. **Textarea de mensaje** (requerido)
4. **Botón de submit**
5. **Validación** antes de enviar
6. **Limpiar** formulario después de envío

### 📝 Requisitos Funcionales

✅ Tres campos de entrada controlados por estado  
✅ Validación de campos requeridos  
✅ Validación de formato de email  
✅ Prevenir submit con campos vacíos  
✅ preventDefault para evitar recarga  
✅ Limpiar formulario después de envío exitoso  
✅ Tipado de eventos con TypeScript

---

## 📚 Pasos del Tutorial

### Paso 1: Declarar Estados para Cada Campo

Cada input necesita su propio estado:

```typescript
const [name, setName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [message, setMessage] = useState<string>('');
```

### Paso 2: Evento onChange

El evento `onChange` se dispara cada vez que el usuario escribe:

```typescript
<input
  type="text"
  value={name}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }}
/>
```

**💡 Tip**: `e.target.value` contiene el texto actual del input.

### Paso 3: Función handleSubmit

El submit debe:

1. Prevenir comportamiento por defecto (recarga)
2. Validar datos
3. Procesar datos
4. Limpiar formulario

```typescript
const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault(); // Evita recarga de página

  // Validar...
  // Procesar...
  // Limpiar...
};
```

### Paso 4: Validación Básica

Verificar que los campos no estén vacíos:

```typescript
if (!name.trim() || !email.trim() || !message.trim()) {
  alert('Todos los campos son requeridos');
  return;
}
```

**💡 Tip**: `.trim()` elimina espacios en blanco al inicio/final.

### Paso 5: Validación de Email

Usar expresión regular para validar formato:

```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  alert('Email inválido');
  return;
}
```

### Paso 6: Limpiar Formulario

Después de envío exitoso, resetear todos los estados:

```typescript
setName('');
setEmail('');
setMessage('');
```

---

## 🎨 CSS (Opcional)

```css
.simple-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.simple-form__title {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  color: #333;
}

.simple-form__field {
  margin-bottom: 1.5rem;
}

.simple-form__label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
}

.simple-form__input,
.simple-form__textarea {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  transition: border-color 0.2s;
}

.simple-form__input:focus,
.simple-form__textarea:focus {
  outline: none;
  border-color: #61dafb;
}

.simple-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.simple-form__submit {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.simple-form__submit:hover {
  background-color: #4fa8c5;
}

.simple-form__submit:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
```

---

## ✅ Verificación

Asegúrate de que tu formulario:

- [ ] Los inputs están controlados por estado
- [ ] onChange actualiza el estado correctamente
- [ ] onSubmit previene recarga con preventDefault
- [ ] Valida campos vacíos antes de enviar
- [ ] Valida formato de email
- [ ] Limpia el formulario después de envío exitoso
- [ ] Los eventos están tipados con TypeScript
- [ ] No hay errores en consola

---

## 💡 Tips

### Tipos de Eventos en React

```typescript
// Input/Select
React.ChangeEvent<HTMLInputElement>;
React.ChangeEvent<HTMLSelectElement>;

// Textarea
React.ChangeEvent<HTMLTextAreaElement>;

// Form
React.FormEvent<HTMLFormElement>;

// Button
React.MouseEvent<HTMLButtonElement>;
```

### Prevenir Submit por Defecto

```typescript
// ✅ BIEN - previene recarga
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // ...
};

// ❌ MAL - página se recarga
const handleSubmit = () => {
  // sin preventDefault
};
```

### Validación con Regex

```typescript
// Email básico
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Solo números
/^\d+$/

// Solo letras
/^[a-zA-Z]+$/
```

### Estado vs Uncontrolled

```typescript
// ✅ Controlado (React controla el valor)
<input value={name} onChange={e => setName(e.target.value)} />

// ❌ Uncontrolled (DOM controla el valor)
<input defaultValue="John" />
```

---

## 📚 Recursos Adicionales

- [React Docs - Forms](https://react.dev/reference/react-dom/components/input)
- [React Docs - Controlled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- [MDN - FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [TypeScript - Event Types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/)

---

## 🔗 Navegación

- [← Volver a Ejercicios](../README.md)
- [← Ejercicio Anterior: User Card](../03-user-card/README.md)
- [→ Siguiente Ejercicio: Todo List](../05-todo-list/README.md)
- [📖 Teoría: Eventos Sintéticos React](../../1-teoria/06-eventos-sinteticos-react.md)
