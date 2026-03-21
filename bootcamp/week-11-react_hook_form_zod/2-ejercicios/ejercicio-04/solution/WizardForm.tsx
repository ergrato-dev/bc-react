// ============================================
// EJERCICIO 04: Formulario Multi-paso (Wizard)
// SOLUCIÓN COMPLETA
// ============================================

import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1: Schema Completo del Wizard
// ============================================

const wizardSchema = z.object({
  // Paso 1: Información Personal
  firstName: z.string().min(1, 'El nombre es requerido'),
  lastName: z.string().min(1, 'El apellido es requerido'),
  birthDate: z.string().min(1, 'La fecha de nacimiento es requerida'),

  // Paso 2: Información de Contacto
  email: z.string().email('Email no válido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  address: z.string().min(5, 'La dirección es requerida'),

  // Paso 3: Preferencias
  newsletter: z.boolean(),
  theme: z.enum(['light', 'dark', 'system']),
  language: z.enum(['es', 'en', 'pt']),
});

type WizardFormData = z.infer<typeof wizardSchema>;

// Definimos qué campos pertenecen a cada paso
// Esto permite validar solo los campos del paso actual
const stepFields: Record<number, (keyof WizardFormData)[]> = {
  0: ['firstName', 'lastName', 'birthDate'],
  1: ['email', 'phone', 'address'],
  2: ['newsletter', 'theme', 'language'],
};

// ============================================
// PASO 3: Componentes de Pasos
// ============================================

// Estilos compartidos
const inputStyle = {
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box' as const,
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginTop: '4px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '4px',
  fontWeight: 'bold' as const,
};

const errorStyle = {
  color: '#ef4444',
  fontSize: '12px',
  marginTop: '4px',
  display: 'block',
};

// Paso 1: Información Personal
const PersonalInfoStep: React.FC = () => {
  // useFormContext accede al formulario compartido por FormProvider
  const {
    register,
    formState: { errors },
  } = useFormContext<WizardFormData>();

  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>📝 Información Personal</h3>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Nombre:</label>
        <input
          {...register('firstName')}
          placeholder="Tu nombre"
          style={inputStyle}
        />
        {errors.firstName && (
          <span style={errorStyle}>{errors.firstName.message}</span>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Apellido:</label>
        <input
          {...register('lastName')}
          placeholder="Tu apellido"
          style={inputStyle}
        />
        {errors.lastName && (
          <span style={errorStyle}>{errors.lastName.message}</span>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Fecha de Nacimiento:</label>
        <input
          type="date"
          {...register('birthDate')}
          style={inputStyle}
        />
        {errors.birthDate && (
          <span style={errorStyle}>{errors.birthDate.message}</span>
        )}
      </div>
    </div>
  );
};

// Paso 2: Información de Contacto
const ContactInfoStep: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WizardFormData>();

  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>📞 Información de Contacto</h3>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          {...register('email')}
          placeholder="tu@email.com"
          style={inputStyle}
        />
        {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Teléfono:</label>
        <input
          type="tel"
          {...register('phone')}
          placeholder="+1234567890"
          style={inputStyle}
        />
        {errors.phone && <span style={errorStyle}>{errors.phone.message}</span>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Dirección:</label>
        <input
          {...register('address')}
          placeholder="Calle, número, ciudad"
          style={inputStyle}
        />
        {errors.address && (
          <span style={errorStyle}>{errors.address.message}</span>
        )}
      </div>
    </div>
  );
};

// Paso 3: Preferencias
const PreferencesStep: React.FC = () => {
  const { register } = useFormContext<WizardFormData>();

  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>⚙️ Preferencias</h3>

      <div style={{ marginBottom: '16px' }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}>
          <input
            type="checkbox"
            {...register('newsletter')}
          />
          📧 Recibir newsletter con novedades
        </label>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Tema de la interfaz:</label>
        <select
          {...register('theme')}
          style={inputStyle}>
          <option value="light">☀️ Claro</option>
          <option value="dark">🌙 Oscuro</option>
          <option value="system">💻 Según el sistema</option>
        </select>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Idioma preferido:</label>
        <select
          {...register('language')}
          style={inputStyle}>
          <option value="es">🇪🇸 Español</option>
          <option value="en">🇺🇸 English</option>
          <option value="pt">🇧🇷 Português</option>
        </select>
      </div>
    </div>
  );
};

// ============================================
// PASOS 2 y 4: Componente Principal del Wizard
// ============================================

const WizardForm: React.FC = () => {
  // Estado para controlar el paso actual
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  // Configuración del formulario
  const methods = useForm<WizardFormData>({
    resolver: zodResolver(wizardSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      phone: '',
      address: '',
      newsletter: false,
      theme: 'system',
      language: 'es',
    },
    mode: 'onChange', // Validar mientras el usuario escribe
  });

  // Array de componentes de pasos
  const steps = [
    <PersonalInfoStep key="personal" />,
    <ContactInfoStep key="contact" />,
    <PreferencesStep key="preferences" />,
  ];

  // PASO 4: Validar el paso actual antes de avanzar
  const handleNext = async (): Promise<void> => {
    const fields = stepFields[currentStep];

    // trigger() valida solo los campos especificados
    const isValid = await methods.trigger(fields);

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const handlePrev = (): void => {
    // No necesitamos validar al ir hacia atrás
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (data: WizardFormData): void => {
    console.log('Datos completos del wizard:', data);
    alert(
      `¡Registro completado!\n\nBienvenido, ${data.firstName} ${data.lastName}`,
    );
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>🧙‍♂️ Wizard de Registro</h2>

      {/* Indicador de progreso visual */}
      <div
        style={{
          display: 'flex',
          marginBottom: '8px',
          gap: '4px',
        }}>
        {[0, 1, 2].map((step) => (
          <div
            key={step}
            style={{
              flex: 1,
              height: '6px',
              backgroundColor: step <= currentStep ? '#3178C6' : '#e0e0e0',
              borderRadius: '3px',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </div>

      <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>
        Paso {currentStep + 1} de {totalSteps}
      </p>

      {/* PASO 2: FormProvider comparte el formulario con los componentes hijos */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* Contenedor del paso actual con animación suave */}
          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              minHeight: '250px',
            }}>
            {steps[currentStep]}
          </div>

          {/* Botones de navegación */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '24px',
            }}>
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                style={{
                  flex: 1,
                  padding: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}>
                ← Anterior
              </button>
            )}

            {currentStep < totalSteps - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                style={{
                  flex: 1,
                  padding: '14px',
                  backgroundColor: '#3178C6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}>
                Siguiente →
              </button>
            ) : (
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '14px',
                  backgroundColor: '#4ade80',
                  color: '#1a1a1a',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}>
                ✅ Completar Registro
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default WizardForm;
