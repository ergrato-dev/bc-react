# 03 - Integración React Hook Form con Zod

## 🎯 Objetivos

- Integrar Zod con React Hook Form usando zodResolver
- Aprovechar la inferencia de tipos automática
- Manejar errores de validación de forma elegante
- Implementar formularios completamente tipados

---

## 📋 Contenido

### 1. Configuración Inicial

Primero, instalamos las dependencias necesarias:

```bash
pnpm add react-hook-form zod @hookform/resolvers
```

La integración se realiza mediante `@hookform/resolvers`, que proporciona adaptadores para múltiples librerías de validación.

---

### 2. zodResolver: El Puente

`zodResolver` conecta esquemas Zod con React Hook Form:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Definir el esquema de validación
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Ingresa un email válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

// 2. Inferir el tipo de TypeScript
type LoginFormData = z.infer<typeof loginSchema>;

// 3. Usar en el componente
const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema), // ← Aquí la magia
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    // data está completamente tipado
    console.log(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};

export default LoginForm;
```

---

### 3. Tipado Automático: El Poder de z.infer

La integración elimina la duplicación de tipos:

```tsx
// ❌ SIN Zod: Duplicamos la definición
interface FormData {
  name: string;
  email: string;
  age: number;
}

const schema = {
  name: { required: 'Nombre requerido' },
  email: { required: 'Email requerido', pattern: /.../ },
  age: { required: 'Edad requerida', min: 18 },
};
// ¡Mantenimiento doble!

// ✅ CON Zod: Una sola fuente de verdad
const formSchema = z.object({
  name: z.string().min(1, 'Nombre requerido'),
  email: z.string().email('Email inválido'),
  age: z.number().min(18, 'Debes ser mayor de edad'),
});

type FormData = z.infer<typeof formSchema>;
// El tipo se genera automáticamente del esquema
```

---

### 4. Manejo de Errores Elegante

Creamos un componente reutilizable para mostrar errores:

```tsx
import { FieldError } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  error?: FieldError;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, error, children }) => {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
      {error && (
        <span
          className="error-message"
          role="alert">
          {error.message}
        </span>
      )}
    </div>
  );
};

// Uso
const MyForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form>
      <FormField
        label="Nombre"
        error={errors.name}>
        <input {...register('name')} />
      </FormField>

      <FormField
        label="Email"
        error={errors.email}>
        <input
          type="email"
          {...register('email')}
        />
      </FormField>
    </form>
  );
};
```

---

### 5. Formulario Completo de Registro

Ejemplo completo con todas las características:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Esquema de validación completo
const registerSchema = z
  .object({
    // Información personal
    firstName: z
      .string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(50, 'El nombre no puede exceder 50 caracteres'),

    lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),

    email: z.string().email('Ingresa un email válido').toLowerCase(),

    // Contraseña con validaciones múltiples
    password: z
      .string()
      .min(8, 'Mínimo 8 caracteres')
      .regex(/[A-Z]/, 'Debe contener una mayúscula')
      .regex(/[0-9]/, 'Debe contener un número'),

    confirmPassword: z.string(),

    // Selección
    role: z.enum(['user', 'admin', 'moderator'], {
      errorMap: () => ({ message: 'Selecciona un rol válido' }),
    }),

    // Checkbox
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: 'Debes aceptar los términos' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur', // Validar al salir del campo
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'user',
      acceptTerms: false as unknown as true, // Truco para checkbox
    },
  });

  // Observar contraseña para indicador de fortaleza
  const password = watch('password');

  const getPasswordStrength = (pass: string): string => {
    if (!pass) return '';
    if (pass.length < 8) return 'Débil';
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[!@#$%^&*]/.test(pass);
    const score = [hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
    if (score === 3) return 'Fuerte';
    if (score === 2) return 'Media';
    return 'Débil';
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // Simular llamada API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Registro exitoso:', data);
      alert('¡Registro completado!');
    } catch (error) {
      console.error('Error en registro:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="register-form">
      <h2>Crear Cuenta</h2>

      {/* Nombre */}
      <div className="form-group">
        <label htmlFor="firstName">Nombre *</label>
        <input
          id="firstName"
          {...register('firstName')}
          className={errors.firstName ? 'input-error' : ''}
        />
        {errors.firstName && (
          <span className="error">{errors.firstName.message}</span>
        )}
      </div>

      {/* Apellido */}
      <div className="form-group">
        <label htmlFor="lastName">Apellido *</label>
        <input
          id="lastName"
          {...register('lastName')}
          className={errors.lastName ? 'input-error' : ''}
        />
        {errors.lastName && (
          <span className="error">{errors.lastName.message}</span>
        )}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      {/* Contraseña */}
      <div className="form-group">
        <label htmlFor="password">Contraseña *</label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className={errors.password ? 'input-error' : ''}
        />
        {password && (
          <span
            className={`strength strength-${getPasswordStrength(password).toLowerCase()}`}>
            Fortaleza: {getPasswordStrength(password)}
          </span>
        )}
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>

      {/* Confirmar Contraseña */}
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Contraseña *</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
          className={errors.confirmPassword ? 'input-error' : ''}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}
      </div>

      {/* Rol */}
      <div className="form-group">
        <label htmlFor="role">Rol *</label>
        <select
          id="role"
          {...register('role')}
          className={errors.role ? 'input-error' : ''}>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
          <option value="moderator">Moderador</option>
        </select>
        {errors.role && <span className="error">{errors.role.message}</span>}
      </div>

      {/* Términos */}
      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            {...register('acceptTerms')}
          />
          Acepto los términos y condiciones *
        </label>
        {errors.acceptTerms && (
          <span className="error">{errors.acceptTerms.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="submit-btn">
        {isSubmitting ? 'Registrando...' : 'Crear Cuenta'}
      </button>
    </form>
  );
};

export default RegisterForm;
```

---

### 6. Validación Asíncrona

Para validaciones que requieren llamadas a API (ej: verificar email único):

```tsx
import { z } from 'zod';

// Función que verifica si el email existe
const checkEmailAvailable = async (email: string): Promise<boolean> => {
  const response = await fetch(`/api/check-email?email=${email}`);
  const data = await response.json();
  return data.available;
};

// Esquema con validación asíncrona
const signupSchema = z.object({
  email: z
    .string()
    .email('Email inválido')
    .refine(async (email) => {
      // Solo validar si el email tiene formato correcto
      if (!email.includes('@')) return true;
      return await checkEmailAvailable(email);
    }, 'Este email ya está registrado'),
  password: z.string().min(8),
});

// En el componente
const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur', // Importante para async validation
  });

  return (
    <form>
      <input {...register('email')} />
      {isValidating && <span>Verificando email...</span>}
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  );
};
```

---

### 7. Formularios con Datos Anidados

```tsx
import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().min(1, 'Calle requerida'),
  city: z.string().min(1, 'Ciudad requerida'),
  zipCode: z.string().regex(/^\d{5}$/, 'Código postal inválido'),
});

const orderSchema = z
  .object({
    customer: z.object({
      name: z.string().min(1, 'Nombre requerido'),
      email: z.string().email('Email inválido'),
    }),
    shippingAddress: addressSchema,
    billingAddress: addressSchema.optional(),
    useSameAddress: z.boolean(),
  })
  .refine((data) => data.useSameAddress || data.billingAddress !== undefined, {
    message: 'Ingresa una dirección de facturación',
    path: ['billingAddress'],
  });

type OrderFormData = z.infer<typeof orderSchema>;

const OrderForm: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const useSameAddress = watch('useSameAddress');

  return (
    <form>
      {/* Datos del cliente */}
      <fieldset>
        <legend>Datos del Cliente</legend>
        <input
          {...register('customer.name')}
          placeholder="Nombre"
        />
        {errors.customer?.name && <span>{errors.customer.name.message}</span>}

        <input
          {...register('customer.email')}
          placeholder="Email"
        />
        {errors.customer?.email && <span>{errors.customer.email.message}</span>}
      </fieldset>

      {/* Dirección de envío */}
      <fieldset>
        <legend>Dirección de Envío</legend>
        <input
          {...register('shippingAddress.street')}
          placeholder="Calle"
        />
        <input
          {...register('shippingAddress.city')}
          placeholder="Ciudad"
        />
        <input
          {...register('shippingAddress.zipCode')}
          placeholder="CP"
        />
      </fieldset>

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          {...register('useSameAddress')}
        />
        Usar la misma dirección para facturación
      </label>

      {/* Dirección de facturación (condicional) */}
      {!useSameAddress && (
        <fieldset>
          <legend>Dirección de Facturación</legend>
          <input
            {...register('billingAddress.street')}
            placeholder="Calle"
          />
          <input
            {...register('billingAddress.city')}
            placeholder="Ciudad"
          />
          <input
            {...register('billingAddress.zipCode')}
            placeholder="CP"
          />
        </fieldset>
      )}
    </form>
  );
};
```

---

### 8. Custom Hook para Formularios

Encapsulamos la lógica en un hook reutilizable:

```tsx
import { useForm, UseFormReturn, FieldValues, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Hook genérico para formularios con Zod
const useZodForm = <T extends z.ZodType>(
  schema: T,
  defaultValues?: DefaultValues<z.infer<T>>
): UseFormReturn<z.infer<T>> => {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });
};

// Uso
const mySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

const MyComponent: React.FC = () => {
  const { register, handleSubmit, formState } = useZodForm(mySchema, {
    name: '',
    email: '',
  });

  return (/* ... */);
};
```

---

## 📚 Resumen

| Concepto               | Descripción                          |
| ---------------------- | ------------------------------------ |
| `zodResolver`          | Conecta esquemas Zod con RHF         |
| `z.infer<T>`           | Infiere tipos del esquema            |
| `errors.field.message` | Accede a mensajes de error           |
| `mode: 'onBlur'`       | Recomendado para async validation    |
| Objetos anidados       | Usa notación punto: `'address.city'` |

---

## ✅ Checklist de Verificación

- [ ] Puedo integrar Zod con React Hook Form usando zodResolver
- [ ] Sé inferir tipos automáticamente con z.infer
- [ ] Puedo manejar errores y mostrar mensajes personalizados
- [ ] Sé implementar validación asíncrona
- [ ] Puedo trabajar con formularios de datos anidados

---

## 🔗 Recursos

- [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- [React Hook Form - Schema Validation](https://react-hook-form.com/get-started#SchemaValidation)
- [Zod + RHF Examples](https://github.com/react-hook-form/resolvers#zod)
