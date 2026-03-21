// ============================================
// EJERCICIO 04: Simple Form
// ============================================
// Objetivo: Formularios controlados y validación
// Tiempo estimado: 35 minutos
// ============================================

// React y TypeScript
// import React, { useState } from 'react';

// ============================================
// PASO 1: Declarar Estados para los Campos
// ============================================
console.log('--- Paso 1: Estados del Formulario ---');

// Cada campo del formulario necesita su estado
// Descomenta las siguientes líneas:
// export const SimpleForm: React.FC = () => {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

console.log('Tres estados: name, email, message');
console.log('Todos inician como strings vacíos');
console.log('');

// ============================================
// PASO 2: Función handleSubmit
// ============================================
console.log('--- Paso 2: Función handleSubmit ---');

// Maneja el envío del formulario
// Descomenta las siguientes líneas:
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     // Prevenir recarga de página
//     e.preventDefault();

console.log('e.preventDefault() evita que la página se recargue');
console.log('FormEvent<HTMLFormElement> es el tipo del evento');
console.log('');

// ============================================
// PASO 3: Validación de Campos Vacíos
// ============================================
console.log('--- Paso 3: Validación de Campos ---');

// Verificar que los campos no estén vacíos
// Descomenta las siguientes líneas:
//     // Validar campos requeridos
//     if (!name.trim() || !email.trim() || !message.trim()) {
//       alert('Todos los campos son requeridos');
//       return;
//     }

console.log('.trim() elimina espacios en blanco');
console.log('!value.trim() es true si el campo está vacío o solo espacios');
console.log('');

// ============================================
// PASO 4: Validación de Email
// ============================================
console.log('--- Paso 4: Validación de Email ---');

// Validar formato de email con regex
// Descomenta las siguientes líneas:
//     // Validar formato de email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert('Por favor ingresa un email válido');
//       return;
//     }

console.log('Regex valida formato básico de email');
console.log('test() retorna true si el email es válido');
console.log('');

// ============================================
// PASO 5: Procesar y Limpiar Formulario
// ============================================
console.log('--- Paso 5: Procesar Datos ---');

// Enviar datos (simulado) y limpiar formulario
// Descomenta las siguientes líneas:
//     // Simular envío (aquí iría petición HTTP)
//     console.log('Formulario enviado:', { name, email, message });
//     alert(`Gracias ${name}! Tu mensaje ha sido enviado.`);
//
//     // Limpiar formulario
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

console.log('Después de envío exitoso:');
console.log('1. Procesar datos (console.log simula envío)');
console.log('2. Mostrar confirmación al usuario');
console.log('3. Limpiar todos los campos');
console.log('');

// ============================================
// PASO 6: Renderizar JSX del Formulario
// ============================================
console.log('--- Paso 6: JSX del Formulario ---');

// Formulario con inputs controlados
// Descomenta las siguientes líneas:
//   return (
//     <form onSubmit={handleSubmit} className="simple-form">
//       <h2 className="simple-form__title">Formulario de Contacto</h2>
//
//       {/* Campo de Nombre */}
//       <div className="simple-form__field">
//         <label htmlFor="name" className="simple-form__label">
//           Nombre
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             setName(e.target.value);
//           }}
//           className="simple-form__input"
//           placeholder="Tu nombre"
//         />
//       </div>
//
//       {/* Campo de Email */}
//       <div className="simple-form__field">
//         <label htmlFor="email" className="simple-form__label">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             setEmail(e.target.value);
//           }}
//           className="simple-form__input"
//           placeholder="tu@email.com"
//         />
//       </div>
//
//       {/* Campo de Mensaje */}
//       <div className="simple-form__field">
//         <label htmlFor="message" className="simple-form__label">
//           Mensaje
//         </label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
//             setMessage(e.target.value);
//           }}
//           className="simple-form__textarea"
//           placeholder="Tu mensaje"
//           rows={5}
//         />
//       </div>
//
//       {/* Botón de Submit */}
//       <button type="submit" className="simple-form__submit">
//         Enviar Mensaje
//       </button>
//     </form>
//   );
// };

console.log('Características del formulario:');
console.log('- onSubmit={handleSubmit} maneja el envío');
console.log('- value={state} hace inputs controlados');
console.log('- onChange actualiza el estado en cada tecla');
console.log('- type="submit" activa onSubmit al hacer click');
console.log('');

// ============================================
// NOTAS IMPORTANTES
// ============================================
console.log('--- Notas Importantes ---');
console.log('1. Formularios controlados: React controla el valor');
console.log('2. preventDefault() evita recarga de página');
console.log('3. Validar antes de procesar datos');
console.log('4. e.target.value obtiene el texto del input');
console.log('5. trim() elimina espacios en blanco');
console.log('6. Limpiar formulario después de envío exitoso');
console.log('');

// ============================================
// CONCEPTO: Tipos de Eventos
// ============================================
console.log('--- Concepto: Tipos de Eventos ---');

// React tiene tipos específicos para cada evento:
// - ChangeEvent<HTMLInputElement>: para inputs
// - ChangeEvent<HTMLTextAreaElement>: para textareas
// - FormEvent<HTMLFormElement>: para formularios
// - MouseEvent<HTMLButtonElement>: para buttons

console.log('TypeScript requiere tipar los eventos correctamente');
console.log('Cada tipo de elemento HTML tiene su propio tipo de evento');
console.log('');

// ============================================
// VERIFICACIÓN
// ============================================
console.log('--- Verificación ---');
console.log('✓ Inputs controlados por estado');
console.log('✓ onChange actualiza estados');
console.log('✓ onSubmit con preventDefault');
console.log('✓ Validación de campos vacíos');
console.log('✓ Validación de email con regex');
console.log('✓ Formulario se limpia después de envío');
console.log('');
