// ============================================
// EJERCICIO 04: Simple Form - SOLUCIÓN
// ============================================
// Formulario controlado con validación
// ============================================

import React, { useState } from 'react';

/**
 * Componente SimpleForm
 * Demuestra formularios controlados y validación en React
 */
export const SimpleForm: React.FC = () => {
  // ============================================
  // PASO 1: Estados del Formulario
  // ============================================

  // Cada campo tiene su propio estado
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // ============================================
  // PASO 2: Función handleSubmit
  // ============================================

  /**
   * Maneja el envío del formulario
   * @param e - Evento del formulario
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // Prevenir comportamiento por defecto (recarga de página)
    e.preventDefault();

    // ============================================
    // PASO 3: Validación de Campos Vacíos
    // ============================================

    // Validar que ningún campo esté vacío
    // trim() elimina espacios en blanco al inicio/final
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Todos los campos son requeridos');
      return; // Detener ejecución si hay campos vacíos
    }

    // ============================================
    // PASO 4: Validación de Email
    // ============================================

    // Regex básico para validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor ingresa un email válido');
      return; // Detener si el email es inválido
    }

    // ============================================
    // PASO 5: Procesar y Limpiar
    // ============================================

    // Aquí iría la lógica para enviar los datos (fetch, axios, etc.)
    console.log('Formulario enviado:', {
      name,
      email,
      message,
    });

    // Mostrar confirmación al usuario
    alert(`Gracias ${name}! Tu mensaje ha sido enviado.`);

    // Limpiar todos los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  // ============================================
  // PASO 6: Renderizar JSX
  // ============================================

  return (
    <form
      onSubmit={handleSubmit}
      className="simple-form">
      <h2 className="simple-form__title">Formulario de Contacto</h2>

      {/* Campo de Nombre */}
      <div className="simple-form__field">
        <label
          htmlFor="name"
          className="simple-form__label">
          Nombre *
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          className="simple-form__input"
          placeholder="Tu nombre"
        />
      </div>

      {/* Campo de Email */}
      <div className="simple-form__field">
        <label
          htmlFor="email"
          className="simple-form__label">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          className="simple-form__input"
          placeholder="tu@email.com"
        />
      </div>

      {/* Campo de Mensaje */}
      <div className="simple-form__field">
        <label
          htmlFor="message"
          className="simple-form__label">
          Mensaje *
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
          className="simple-form__textarea"
          placeholder="Tu mensaje"
          rows={5}
        />
      </div>

      {/* Botón de Submit */}
      <button
        type="submit"
        className="simple-form__submit">
        Enviar Mensaje
      </button>
    </form>
  );
};

// ============================================
// EXPLICACIÓN DETALLADA
// ============================================

/*
1. FORMULARIOS CONTROLADOS
   - React controla el valor del input (no el DOM)
   - value={state} hace que React sea la fuente de verdad
   - onChange actualiza el estado en cada cambio
   - Single source of truth: el estado es la única fuente

2. PREVENTDEFAULT
   - e.preventDefault() evita que el formulario recargue la página
   - Comportamiento por defecto: <form> hace submit y recarga
   - Sin preventDefault, perderíamos el estado al recargar

3. VALIDACIÓN
   - Validar campos vacíos con !value.trim()
   - trim() elimina espacios: "   " se convierte en ""
   - Validar email con regex básico
   - Mostrar mensajes de error con alert (en producción: UI mejor)

4. TIPOS DE EVENTOS EN TYPESCRIPT
   - React.ChangeEvent<HTMLInputElement>: para inputs
   - React.ChangeEvent<HTMLTextAreaElement>: para textarea
   - React.FormEvent<HTMLFormElement>: para form submit
   - El generic (<...>) especifica el tipo de elemento

5. E.TARGET.VALUE
   - e.target es el elemento que disparó el evento
   - e.target.value es el valor actual del elemento
   - TypeScript infiere el tipo correcto con los generics

6. LIMPIAR FORMULARIO
   - Después de envío exitoso, resetear estados
   - setName(''), setEmail(''), setMessage('')
   - Los inputs se vacían porque value={state}

7. HTMLFOR VS FOR
   - En React: htmlFor (no for)
   - for es palabra reservada en JavaScript
   - htmlFor asocia el label con el input (accesibilidad)

8. TYPE="EMAIL" VS VALIDACIÓN MANUAL
   - type="email" da validación básica del navegador
   - Pero no es confiable (varía entre navegadores)
   - Mejor: validar manualmente con regex en handleSubmit

9. PLACEHOLDER
   - Texto de ayuda dentro del input
   - Desaparece cuando el usuario escribe
   - No reemplaza al label (accesibilidad)

10. ROWS EN TEXTAREA
    - rows={5} define altura inicial
    - resize: vertical en CSS permite redimensionar
    - No afecta la funcionalidad, solo UX
*/

// ============================================
// EJEMPLO DE USO EN APP.TSX
// ============================================

/*
import { SimpleForm } from './SimpleForm';

function App() {
  return (
    <div className="app">
      <h1>Contáctanos</h1>
      <SimpleForm />
    </div>
  );
}

export default App;
*/

// ============================================
// MEJORAS OPCIONALES (AVANZADO)
// ============================================

/*
// 1. Estado de error para cada campo
const [errors, setErrors] = useState<{
  name?: string;
  email?: string;
  message?: string;
}>({});

// 2. Mostrar errores en UI
{errors.name && <span className="error">{errors.name}</span>}

// 3. Deshabilitar botón mientras se envía
const [isSubmitting, setIsSubmitting] = useState(false);
<button disabled={isSubmitting}>
  {isSubmitting ? 'Enviando...' : 'Enviar'}
</button>

// 4. Validación en tiempo real
const validateEmail = (email: string) => {
  // Validar mientras el usuario escribe
};

// 5. Usar librerías de formularios
// - React Hook Form
// - Formik
// - Zod para validación
*/
