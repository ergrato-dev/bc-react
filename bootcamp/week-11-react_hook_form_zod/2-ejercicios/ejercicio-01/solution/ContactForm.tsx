// ============================================
// EJERCICIO 01: Formulario Básico con React Hook Form
// SOLUCIÓN COMPLETA
// ============================================

import { useForm } from 'react-hook-form';

// ============================================
// PASO 1: Definir la Interface del Formulario
// ============================================

// En TypeScript, definimos una interface para tipar los datos del formulario.
// Esto nos da autocompletado y validación de tipos.

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ============================================
// PASO 4: Componente ContactForm
// ============================================

const ContactForm: React.FC = () => {
  // PASO 2: Configurar useForm
  // useForm retorna métodos y estado del formulario
  const {
    register, // Conecta inputs al formulario
    handleSubmit, // Maneja validación y submit
    formState: { isSubmitting, isDirty }, // Estado del formulario
    reset, // Resetea el formulario
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // PASO 3: Función onSubmit
  // Recibe los datos ya validados por handleSubmit
  const onSubmit = async (data: ContactFormData): Promise<void> => {
    // Simulamos un delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Datos enviados:', data);
    alert(`¡Gracias ${data.name}! Tu mensaje ha sido enviado.`);

    // Reseteamos el formulario después del envío exitoso
    reset();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Formulario de Contacto</h2>

      {/* handleSubmit envuelve onSubmit para manejar validación */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo Nombre */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="name"
            style={{ display: 'block', marginBottom: '4px' }}>
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            // register conecta el input al formulario
            // El spread operator pasa: onChange, onBlur, ref, name
            {...register('name')}
            placeholder="Tu nombre"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Campo Email */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '4px' }}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="tu@email.com"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Campo Mensaje */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="message"
            style={{ display: 'block', marginBottom: '4px' }}>
            Mensaje:
          </label>
          <textarea
            id="message"
            {...register('message')}
            placeholder="Escribe tu mensaje..."
            rows={4}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Estado del formulario */}
        <div style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          <p>Estado: {isDirty ? '📝 Modificado' : '✨ Sin cambios'}</p>
        </div>

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#3178C6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}>
          {isSubmitting ? '⏳ Enviando...' : '📨 Enviar Mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
