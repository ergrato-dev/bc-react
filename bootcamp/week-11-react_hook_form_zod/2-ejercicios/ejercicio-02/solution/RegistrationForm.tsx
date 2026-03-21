// ============================================
// EJERCICIO 02: Validación con Zod
// SOLUCIÓN COMPLETA
// ============================================

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1 y 2: Schema de Zod con Validaciones
// ============================================

// Definimos el schema base
const registrationSchema = z.object({
  username: z
    .string()
    .min(3, 'El usuario debe tener al menos 3 caracteres')
    .max(20, 'El usuario no puede exceder 20 caracteres')
    .regex(/^[a-zA-Z0-9_]+$/, 'Solo letras, números y guion bajo'),

  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Ingresa un email válido'),

  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número'),

  confirmPassword: z.string().min(1, 'Confirma tu contraseña'),

  age: z
    .number({ invalid_type_error: 'La edad debe ser un número' })
    .min(18, 'Debes ser mayor de 18 años')
    .max(120, 'Edad no válida'),

  terms: z
    .boolean()
    .refine((val) => val === true, 'Debes aceptar los términos'),
});

// Añadimos validación de contraseñas a nivel de objeto
const registrationSchemaWithRefine = registrationSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  },
);

// Tipo inferido automáticamente del schema
type RegistrationFormData = z.infer<typeof registrationSchemaWithRefine>;

// ============================================
// PASO 3: Componente RegistrationForm
// ============================================

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    // zodResolver conecta el schema de Zod con React Hook Form
    resolver: zodResolver(registrationSchemaWithRefine),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: undefined,
      terms: false,
    },
  });

  const onSubmit = async (data: RegistrationFormData): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Usuario registrado:', data);
    alert('¡Registro exitoso!');
  };

  // Componente auxiliar para mostrar errores
  const ErrorMessage: React.FC<{ message?: string }> = ({ message }) => {
    if (!message) return null;
    return (
      <span
        style={{
          color: '#ef4444',
          fontSize: '12px',
          marginTop: '4px',
          display: 'block',
        }}>
        {message}
      </span>
    );
  };

  // Estilos comunes para inputs
  const inputStyle = (hasError: boolean) => ({
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box' as const,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: hasError ? '#ef4444' : '#ccc',
    borderRadius: '4px',
  });

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Registro de Usuario</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="username"
            style={{ display: 'block', marginBottom: '4px' }}>
            Usuario:
          </label>
          <input
            id="username"
            {...register('username')}
            placeholder="tu_usuario"
            style={inputStyle(!!errors.username)}
          />
          <ErrorMessage message={errors.username?.message} />
        </div>

        {/* Email */}
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
            style={inputStyle(!!errors.email)}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="password"
            style={{ display: 'block', marginBottom: '4px' }}>
            Contraseña:
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            placeholder="Mínimo 8 caracteres"
            style={inputStyle(!!errors.password)}
          />
          <ErrorMessage message={errors.password?.message} />
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="confirmPassword"
            style={{ display: 'block', marginBottom: '4px' }}>
            Confirmar Contraseña:
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            placeholder="Repite tu contraseña"
            style={inputStyle(!!errors.confirmPassword)}
          />
          <ErrorMessage message={errors.confirmPassword?.message} />
        </div>

        {/* Age */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="age"
            style={{ display: 'block', marginBottom: '4px' }}>
            Edad:
          </label>
          <input
            id="age"
            type="number"
            // valueAsNumber convierte el string del input a número
            {...register('age', { valueAsNumber: true })}
            placeholder="18"
            style={inputStyle(!!errors.age)}
          />
          <ErrorMessage message={errors.age?.message} />
        </div>

        {/* Terms */}
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
              {...register('terms')}
            />
            Acepto los términos y condiciones
          </label>
          <ErrorMessage message={errors.terms?.message} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#4ade80',
            color: isSubmitting ? '#666' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}>
          {isSubmitting ? '⏳ Registrando...' : '✅ Registrarse'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
