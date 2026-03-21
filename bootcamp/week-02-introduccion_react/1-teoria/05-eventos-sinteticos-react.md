# Eventos Sintéticos en React

## 🎯 Objetivos de Aprendizaje

- Entender qué son los eventos sintéticos
- Manejar eventos del DOM con TypeScript
- Tipar event handlers correctamente
- Trabajar con formularios y inputs
- Prevenir comportamientos por defecto
- Pasar argumentos a event handlers
- Optimizar event handlers

---

## � Diagrama: Manejo de Eventos

![Manejo de Eventos](../0-assets/06-event-handling.svg)

---

## �📋 ¿Qué son los Eventos Sintéticos?

Los **eventos sintéticos** (SyntheticEvent) son objetos que React crea para envolver eventos nativos del navegador, proporcionando una API consistente entre navegadores.

```tsx
// QUÉ: Diferencia entre eventos nativos y sintéticos
// PARA: Entender la abstracción que proporciona React
// IMPACTO: API uniforme sin preocuparse por compatibilidad

import React from 'react';

const EventExample: React.FC = () => {
  // Evento nativo del DOM (JavaScript vanilla)
  // document.getElementById('btn').addEventListener('click', function(event) {
  //   console.log(event);  // MouseEvent nativo
  // });

  // Evento sintético de React (más consistente)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event); // SyntheticEvent que envuelve MouseEvent
    // Propiedades y métodos son iguales en todos los navegadores
  };

  return <button onClick={handleClick}>Click</button>;
};
```

**Ventajas de eventos sintéticos:**

- ✅ **Consistencia**: Misma API en todos los navegadores
- ✅ **Rendimiento**: React optimiza la gestión de eventos
- ✅ **Pooling**: Reutiliza objetos de eventos (mejora performance)
- ✅ **Delegación**: React usa event delegation automáticamente

---

## 🖱️ Eventos de Mouse

```tsx
// QUÉ: Eventos de mouse tipados con TypeScript
// PARA: Manejar clicks, hover, drag, etc.
// IMPACTO: Interacciones de usuario con mouse

import React, { useState } from 'react';

const MouseEvents: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Click en:', e.clientX, e.clientY);
    setMessage('Click');
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Doble click');
    setMessage('Doble click');
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse enter');
    setMessage('Mouse entró');
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse leave');
    setMessage('Mouse salió');
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevenir menú contextual por defecto
    setMessage('Click derecho');
  };

  return (
    <div>
      <button onClick={handleClick}>Click aquí</button>

      <div
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onContextMenu={handleContextMenu}
        style={{
          padding: '20px',
          border: '1px solid gray',
          marginTop: '10px',
        }}>
        Área interactiva
      </div>

      <p>Último evento: {message}</p>
    </div>
  );
};

export default MouseEvents;
```

**Eventos de mouse comunes:**

- `onClick`: Click con botón izquierdo
- `onDoubleClick`: Doble click
- `onMouseDown` / `onMouseUp`: Presionar/soltar botón
- `onMouseEnter` / `onMouseLeave`: Entrar/salir del elemento
- `onMouseMove`: Mover el mouse sobre el elemento
- `onContextMenu`: Click derecho (menú contextual)

---

## ⌨️ Eventos de Teclado

```tsx
// QUÉ: Eventos de teclado tipados
// PARA: Manejar teclas, shortcuts, formularios
// IMPACTO: Interacciones con teclado

import React, { useState } from 'react';

const KeyboardEvents: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [log, setLog] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('Key down:', e.key);

    // Detectar teclas especiales
    if (e.key === 'Enter') {
      console.log('Enter presionado');
    }

    if (e.key === 'Escape') {
      setText('');
    }

    // Detectar modificadores
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      console.log('Ctrl+S presionado (guardar)');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // ⚠️ Deprecado, usar keyDown en su lugar
    console.log('Key press:', e.key);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('Key up:', e.key);
    setLog((prev) => [...prev, `${e.key} released`]);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Escribe algo (Esc para limpiar)"
      />

      <p>Texto: {text}</p>

      <ul>
        {log.slice(-5).map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyboardEvents;
```

**Propiedades útiles de KeyboardEvent:**

- `e.key`: La tecla presionada ('a', 'Enter', 'Escape', etc.)
- `e.code`: Código físico de la tecla ('KeyA', 'Enter', etc.)
- `e.ctrlKey`: Si Ctrl está presionado
- `e.shiftKey`: Si Shift está presionado
- `e.altKey`: Si Alt está presionado
- `e.metaKey`: Si Cmd (Mac) o Win está presionado

---

## 📝 Eventos de Formularios

### onChange - Inputs de Texto

```tsx
// QUÉ: Manejar inputs de texto con onChange
// PARA: Inputs controlados por React
// IMPACTO: Formularios interactivos con validación en tiempo real

import React, { useState } from 'react';

const TextInputs: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Input de texto
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Input de email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Textarea
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          rows={4}
        />
      </div>

      <p>Nombre: {name}</p>
      <p>Email: {email}</p>
      <p>Mensaje: {message}</p>
    </form>
  );
};

export default TextInputs;
```

### onChange - Otros Inputs

```tsx
// QUÉ: Manejar diferentes tipos de inputs
// PARA: Checkboxes, radios, selects
// IMPACTO: Formularios completos

import React, { useState } from 'react';

const OtherInputs: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  // Checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked); // Usa .checked, no .value
  };

  // Radio buttons
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  // Select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  return (
    <form>
      {/* Checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          Acepto los términos
        </label>
      </div>

      {/* Radio buttons */}
      <div>
        <p>Género:</p>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleRadioChange}
          />
          Masculino
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleRadioChange}
          />
          Femenino
        </label>
      </div>

      {/* Select */}
      <div>
        <label htmlFor="country">País:</label>
        <select
          id="country"
          value={country}
          onChange={handleSelectChange}>
          <option value="">Selecciona...</option>
          <option value="es">España</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
        </select>
      </div>

      <p>Términos aceptados: {checked ? 'Sí' : 'No'}</p>
      <p>Género: {gender}</p>
      <p>País: {country}</p>
    </form>
  );
};

export default OtherInputs;
```

### onSubmit - Envío de Formularios

```tsx
// QUÉ: Manejar envío de formularios
// PARA: Procesar datos del formulario
// IMPACTO: Validación y envío de datos

import React, { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const FormSubmit: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Computed property name
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ⚠️ IMPORTANTE: Prevenir recarga de página

    // Validación
    if (!formData.username || !formData.email || !formData.password) {
      alert('Todos los campos son requeridos');
      return;
    }

    // Procesar datos
    console.log('Formulario enviado:', formData);

    // Enviar a API, etc.
    // ...

    // Resetear formulario
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default FormSubmit;
```

---

## 🛑 Prevenir Comportamientos Por Defecto

```tsx
// QUÉ: Usar preventDefault para prevenir acciones por defecto
// PARA: Controlar comportamiento de links, formularios, etc.
// IMPACTO: Mayor control sobre la UI

import React from 'react';

const PreventDefault: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // No navegar a la URL
    console.log('Link clickeado pero sin navegación');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // No recargar la página
    console.log('Formulario enviado sin recarga');
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // No mostrar menú contextual
    console.log('Menú contextual deshabilitado');
  };

  return (
    <div>
      <a
        href="https://example.com"
        onClick={handleLinkClick}>
        Click (sin navegar)
      </a>

      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <button type="submit">Enviar (sin recarga)</button>
      </form>

      <div onContextMenu={handleContextMenu}>Click derecho aquí (sin menú)</div>
    </div>
  );
};

export default PreventDefault;
```

---

## 🎯 Pasar Argumentos a Event Handlers

```tsx
// QUÉ: Pasar argumentos adicionales a handlers
// PARA: Identificar qué elemento disparó el evento
// IMPACTO: Handlers reutilizables

import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const PassingArguments: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // Opción 1: Arrow function inline
  const handleDelete1 = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Opción 2: Función que retorna función
  const handleDelete2 = (id: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log('Evento:', e);
      setItems(items.filter((item) => item.id !== id));
    };
  };

  // Opción 3: Función con parámetros adicionales
  const handleEdit = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Editar item:', id, 'Evento:', e);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}

          {/* Opción 1: Arrow function inline */}
          <button onClick={() => handleDelete1(item.id)}>Eliminar (1)</button>

          {/* Opción 2: Función que retorna función */}
          <button onClick={handleDelete2(item.id)}>Eliminar (2)</button>

          {/* Opción 3: Arrow function con evento */}
          <button onClick={(e) => handleEdit(item.id, e)}>Editar</button>
        </li>
      ))}
    </ul>
  );
};

export default PassingArguments;
```

---

## ⚡ Optimización de Event Handlers

```tsx
// QUÉ: Optimizar event handlers para mejorar rendimiento
// PARA: Evitar re-creación innecesaria de funciones
// IMPACTO: Mejor rendimiento en listas grandes

import React, { useState, useCallback } from 'react';

interface Item {
  id: number;
  name: string;
}

const OptimizedHandlers: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]);

  // ❌ PROBLEMA: Se crea una nueva función en cada render
  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // ✅ MEJOR: useCallback memoiza la función
  const handleDeleteOptimized = useCallback((id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []); // Dependencias vacías porque usa updater function

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleDeleteOptimized(item.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OptimizedHandlers;
```

**Nota**: `useCallback` y optimizaciones avanzadas se cubrirán en detalle en semanas futuras. Por ahora, enfócate en la sintaxis básica de event handlers.

---

## 📊 Tipos de Eventos Comunes

```tsx
// QUÉ: Referencia de tipos de eventos en React con TypeScript
// PARA: Usar los tipos correctos en tus handlers
// IMPACTO: Type safety completo

import React from 'react';

const EventTypes: React.FC = () => {
  // Mouse events
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {};

  // Keyboard events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  // Form events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {};
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  // Focus events
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {};
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {};

  // Clipboard events
  const handleCopy = (e: React.ClipboardEvent<HTMLDivElement>) => {};
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {};

  // Drag events
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {};
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {};

  return <div>Event types reference</div>;
};
```

**Tipos genéricos:**

- `React.MouseEvent<T>`: Eventos de mouse
- `React.KeyboardEvent<T>`: Eventos de teclado
- `React.ChangeEvent<T>`: Cambios en inputs
- `React.FormEvent<T>`: Envío de formularios
- `React.FocusEvent<T>`: Focus/blur
- `React.ClipboardEvent<T>`: Copiar/pegar
- `React.DragEvent<T>`: Drag and drop

---

## 🚀 Ejemplo Completo: Formulario de Registro

```tsx
// QUÉ: Formulario completo con validación y manejo de eventos
// PARA: Integrar todos los conceptos de eventos
// IMPACTO: Patrón real de formularios en aplicaciones

import React, { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  acceptTerms: boolean;
  country: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  age?: string;
  acceptTerms?: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 0,
    acceptTerms: false,
    country: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Manejar cambios en inputs de texto
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpiar error del campo
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Manejar cambios en select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, country: e.target.value }));
  };

  // Manejar cambios en checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, acceptTerms: e.target.checked }));
    if (errors.acceptTerms) {
      setErrors((prev) => ({ ...prev, acceptTerms: undefined }));
    }
  };

  // Validar formulario
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.username.length < 3) {
      newErrors.username = 'El usuario debe tener al menos 3 caracteres';
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (formData.age < 18) {
      newErrors.age = 'Debes ser mayor de 18 años';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log('Formulario válido:', formData);
      // Enviar a API...
      alert('¡Registro exitoso!');

      // Resetear formulario
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: 0,
        acceptTerms: false,
        country: '',
      });
    } else {
      console.log('Formulario inválido');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="registration-form">
      <h2>Registro</h2>

      <div className="form-group">
        <label htmlFor="username">Usuario:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleTextChange}
          className={errors.username ? 'error' : ''}
        />
        {errors.username && (
          <span className="error-message">{errors.username}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleTextChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleTextChange}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleTextChange}
          className={errors.confirmPassword ? 'error' : ''}
        />
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="age">Edad:</label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, age: Number(e.target.value) }))
          }
          className={errors.age ? 'error' : ''}
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="country">País:</label>
        <select
          id="country"
          value={formData.country}
          onChange={handleSelectChange}>
          <option value="">Selecciona...</option>
          <option value="es">España</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={handleCheckboxChange}
          />
          Acepto los términos y condiciones
        </label>
        {errors.acceptTerms && (
          <span className="error-message">{errors.acceptTerms}</span>
        )}
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistrationForm;
```

---

## ✅ Checklist de Verificación

Después de estudiar este tema, debes ser capaz de:

- [ ] Entender qué son los eventos sintéticos
- [ ] Manejar eventos de mouse con tipos correctos
- [ ] Manejar eventos de teclado (keyDown, keyUp)
- [ ] Crear inputs controlados con onChange
- [ ] Tipar diferentes tipos de inputs (text, checkbox, select)
- [ ] Manejar envío de formularios con onSubmit
- [ ] Usar preventDefault para controlar comportamientos
- [ ] Pasar argumentos adicionales a event handlers
- [ ] Validar formularios en tiempo real
- [ ] Crear formularios completos con múltiples tipos de inputs

---

## 📚 Recursos Adicionales

- **React Docs - Events**: https://react.dev/learn/responding-to-events
- **SyntheticEvent**: https://react.dev/reference/react-dom/components/common#react-event-object
- **TypeScript + Events**: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events

---

## 🔗 Navegación

[⬅️ Atrás: Estado con useState](./05-estado-local-usestate.md) | [➡️ Siguiente: Ejercicios Prácticos](../2-ejercicios/README.md)
