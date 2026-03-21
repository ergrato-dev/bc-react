# 04 - Formularios Avanzados

## 🎯 Objetivos

- Implementar campos dinámicos con useFieldArray
- Crear formularios multi-paso (wizard forms)
- Usar watch para campos condicionales
- Manejar estados complejos de formulario

---

## 📋 Contenido

### 1. useFieldArray: Campos Dinámicos

`useFieldArray` permite manejar arrays de campos (agregar, eliminar, reordenar):

```tsx
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Esquema con array
const orderSchema = z.object({
  customerName: z.string().min(1, 'Nombre requerido'),
  items: z
    .array(
      z.object({
        productName: z.string().min(1, 'Producto requerido'),
        quantity: z.number().min(1, 'Cantidad mínima: 1'),
        price: z.number().positive('Precio debe ser positivo'),
      }),
    )
    .min(1, 'Agrega al menos un producto'),
});

type OrderFormData = z.infer<typeof orderSchema>;

const OrderForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      customerName: '',
      items: [{ productName: '', quantity: 1, price: 0 }],
    },
  });

  // Hook para manejar el array de items
  const { fields, append, remove, prepend, move } = useFieldArray({
    control,
    name: 'items', // Nombre del array en el esquema
  });

  const onSubmit = (data: OrderFormData) => {
    const total = data.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    );
    console.log('Pedido:', data, 'Total:', total);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Nombre del Cliente</label>
        <input {...register('customerName')} />
        {errors.customerName && (
          <span className="error">{errors.customerName.message}</span>
        )}
      </div>

      <fieldset>
        <legend>Productos</legend>

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="item-row">
            <input
              {...register(`items.${index}.productName`)}
              placeholder="Producto"
            />
            {errors.items?.[index]?.productName && (
              <span className="error">
                {errors.items[index]?.productName?.message}
              </span>
            )}

            <input
              type="number"
              {...register(`items.${index}.quantity`, { valueAsNumber: true })}
              placeholder="Cantidad"
            />

            <input
              type="number"
              step="0.01"
              {...register(`items.${index}.price`, { valueAsNumber: true })}
              placeholder="Precio"
            />

            <button
              type="button"
              onClick={() => remove(index)}
              disabled={fields.length === 1}>
              🗑️ Eliminar
            </button>
          </div>
        ))}

        {errors.items?.root && (
          <span className="error">{errors.items.root.message}</span>
        )}

        <div className="actions">
          <button
            type="button"
            onClick={() => append({ productName: '', quantity: 1, price: 0 })}>
            ➕ Agregar Producto
          </button>
        </div>
      </fieldset>

      <button type="submit">Crear Pedido</button>
    </form>
  );
};
```

#### Métodos de useFieldArray

| Método    | Descripción             | Ejemplo                        |
| --------- | ----------------------- | ------------------------------ |
| `append`  | Agrega al final         | `append({ name: '' })`         |
| `prepend` | Agrega al inicio        | `prepend({ name: '' })`        |
| `insert`  | Inserta en posición     | `insert(2, { name: '' })`      |
| `remove`  | Elimina por índice      | `remove(0)`                    |
| `swap`    | Intercambia posiciones  | `swap(0, 1)`                   |
| `move`    | Mueve a posición        | `move(0, 2)`                   |
| `update`  | Actualiza en posición   | `update(0, { name: 'Nuevo' })` |
| `replace` | Reemplaza todo el array | `replace([{ name: 'A' }])`     |

---

### 2. Formularios Multi-Paso (Wizard)

Los wizard forms dividen formularios largos en pasos manejables:

```tsx
import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Esquemas por paso
const step1Schema = z.object({
  firstName: z.string().min(1, 'Nombre requerido'),
  lastName: z.string().min(1, 'Apellido requerido'),
  email: z.string().email('Email inválido'),
});

const step2Schema = z.object({
  street: z.string().min(1, 'Calle requerida'),
  city: z.string().min(1, 'Ciudad requerida'),
  zipCode: z.string().regex(/^\d{5}$/, 'Código postal inválido'),
});

const step3Schema = z.object({
  cardNumber: z.string().length(16, 'Número de tarjeta inválido'),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Formato: MM/YY'),
  cvv: z.string().length(3, 'CVV inválido'),
});

// Esquema completo
const fullSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
});

type WizardFormData = z.infer<typeof fullSchema>;

// Esquemas por paso para validación parcial
const stepSchemas = [step1Schema, step2Schema, step3Schema];

// Componente del Paso 1
const Step1: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WizardFormData>();

  return (
    <div className="step">
      <h3>Paso 1: Información Personal</h3>

      <div className="form-group">
        <label>Nombre</label>
        <input {...register('firstName')} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div className="form-group">
        <label>Apellido</label>
        <input {...register('lastName')} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
    </div>
  );
};

// Componente del Paso 2
const Step2: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WizardFormData>();

  return (
    <div className="step">
      <h3>Paso 2: Dirección de Envío</h3>

      <div className="form-group">
        <label>Calle</label>
        <input {...register('street')} />
        {errors.street && <span>{errors.street.message}</span>}
      </div>

      <div className="form-group">
        <label>Ciudad</label>
        <input {...register('city')} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>

      <div className="form-group">
        <label>Código Postal</label>
        <input {...register('zipCode')} />
        {errors.zipCode && <span>{errors.zipCode.message}</span>}
      </div>
    </div>
  );
};

// Componente del Paso 3
const Step3: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WizardFormData>();

  return (
    <div className="step">
      <h3>Paso 3: Información de Pago</h3>

      <div className="form-group">
        <label>Número de Tarjeta</label>
        <input
          {...register('cardNumber')}
          maxLength={16}
        />
        {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
      </div>

      <div className="form-group">
        <label>Fecha de Expiración</label>
        <input
          {...register('expiry')}
          placeholder="MM/YY"
        />
        {errors.expiry && <span>{errors.expiry.message}</span>}
      </div>

      <div className="form-group">
        <label>CVV</label>
        <input
          type="password"
          {...register('cvv')}
          maxLength={3}
        />
        {errors.cvv && <span>{errors.cvv.message}</span>}
      </div>
    </div>
  );
};

// Componente de Resumen
const Summary: React.FC = () => {
  const { getValues } = useFormContext<WizardFormData>();
  const data = getValues();

  return (
    <div className="summary">
      <h3>Resumen del Pedido</h3>

      <div className="section">
        <h4>Información Personal</h4>
        <p>
          {data.firstName} {data.lastName}
        </p>
        <p>{data.email}</p>
      </div>

      <div className="section">
        <h4>Dirección de Envío</h4>
        <p>{data.street}</p>
        <p>
          {data.city}, {data.zipCode}
        </p>
      </div>

      <div className="section">
        <h4>Método de Pago</h4>
        <p>**** **** **** {data.cardNumber.slice(-4)}</p>
      </div>
    </div>
  );
};

// Componente Principal del Wizard
const WizardForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4; // 3 pasos + resumen

  const methods = useForm<WizardFormData>({
    resolver: zodResolver(fullSchema),
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    },
  });

  const { handleSubmit, trigger } = methods;

  // Validar paso actual antes de avanzar
  const validateCurrentStep = async (): Promise<boolean> => {
    const fieldsToValidate = Object.keys(
      stepSchemas[currentStep]?.shape || {},
    ) as (keyof WizardFormData)[];

    return await trigger(fieldsToValidate);
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = (data: WizardFormData) => {
    console.log('Pedido completado:', data);
    alert('¡Pedido realizado con éxito!');
  };

  // Renderizar paso actual
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="wizard-form">
        {/* Indicador de progreso */}
        <div className="progress-bar">
          {['Personal', 'Dirección', 'Pago', 'Confirmar'].map(
            (label, index) => (
              <div
                key={label}
                className={`step-indicator ${index <= currentStep ? 'active' : ''}`}>
                <span className="step-number">{index + 1}</span>
                <span className="step-label">{label}</span>
              </div>
            ),
          )}
        </div>

        {/* Contenido del paso */}
        <div className="step-content">{renderStep()}</div>

        {/* Navegación */}
        <div className="navigation">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}>
            ← Anterior
          </button>

          {currentStep < totalSteps - 1 ? (
            <button
              type="button"
              onClick={nextStep}>
              Siguiente →
            </button>
          ) : (
            <button type="submit">✓ Confirmar Pedido</button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default WizardForm;
```

---

### 3. Campos Condicionales con watch

`watch` permite mostrar/ocultar campos basado en valores:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.discriminatedUnion('contactMethod', [
  z.object({
    contactMethod: z.literal('email'),
    email: z.string().email('Email inválido'),
  }),
  z.object({
    contactMethod: z.literal('phone'),
    phone: z.string().min(10, 'Teléfono inválido'),
    preferredTime: z.enum(['morning', 'afternoon', 'evening']),
  }),
  z.object({
    contactMethod: z.literal('mail'),
    address: z.string().min(10, 'Dirección muy corta'),
    city: z.string().min(1, 'Ciudad requerida'),
    zipCode: z.string().regex(/^\d{5}$/),
  }),
]);

type ContactFormData = z.infer<typeof contactSchema>;

const ConditionalForm: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      contactMethod: 'email',
    },
  });

  // Observar el método de contacto seleccionado
  const contactMethod = watch('contactMethod');

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="form-group">
        <label>Método de Contacto Preferido</label>
        <select {...register('contactMethod')}>
          <option value="email">Email</option>
          <option value="phone">Teléfono</option>
          <option value="mail">Correo Postal</option>
        </select>
      </div>

      {/* Campos condicionales según selección */}
      {contactMethod === 'email' && (
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      )}

      {contactMethod === 'phone' && (
        <>
          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              {...register('phone')}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>

          <div className="form-group">
            <label>Horario Preferido</label>
            <select {...register('preferredTime')}>
              <option value="morning">Mañana</option>
              <option value="afternoon">Tarde</option>
              <option value="evening">Noche</option>
            </select>
          </div>
        </>
      )}

      {contactMethod === 'mail' && (
        <>
          <div className="form-group">
            <label>Dirección</label>
            <input {...register('address')} />
            {errors.address && <span>{errors.address.message}</span>}
          </div>

          <div className="form-group">
            <label>Ciudad</label>
            <input {...register('city')} />
          </div>

          <div className="form-group">
            <label>Código Postal</label>
            <input {...register('zipCode')} />
          </div>
        </>
      )}

      <button type="submit">Enviar</button>
    </form>
  );
};
```

---

### 4. Formulario con Valores Calculados

```tsx
const InvoiceForm: React.FC = () => {
  const { register, watch, control } = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  // Observar todos los items para calcular totales
  const items = watch('items');
  const taxRate = watch('taxRate');

  // Cálculos derivados
  const subtotal =
    items?.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.unitPrice || 0),
      0,
    ) || 0;

  const tax = (subtotal * (taxRate || 0)) / 100;
  const total = subtotal + tax;

  return (
    <form>
      {/* Items */}
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="item-row">
          <input
            {...register(`items.${index}.description`)}
            placeholder="Descripción"
          />
          <input
            type="number"
            {...register(`items.${index}.quantity`, { valueAsNumber: true })}
            placeholder="Cantidad"
          />
          <input
            type="number"
            step="0.01"
            {...register(`items.${index}.unitPrice`, { valueAsNumber: true })}
            placeholder="Precio unitario"
          />
          <span className="line-total">
            $
            {(
              (items?.[index]?.quantity || 0) * (items?.[index]?.unitPrice || 0)
            ).toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => remove(index)}>
            🗑️
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ description: '', quantity: 1, unitPrice: 0 })}>
        + Agregar Item
      </button>

      {/* Tasa de impuesto */}
      <div className="form-group">
        <label>Tasa de Impuesto (%)</label>
        <input
          type="number"
          {...register('taxRate', { valueAsNumber: true })}
        />
      </div>

      {/* Totales calculados (solo lectura) */}
      <div className="totals">
        <div className="total-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span>Impuesto ({taxRate || 0}%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="total-row total-final">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </form>
  );
};
```

---

## 📚 Resumen

| Concepto         | Descripción                                |
| ---------------- | ------------------------------------------ |
| `useFieldArray`  | Manejar arrays de campos dinámicos         |
| `FormProvider`   | Compartir contexto en wizard forms         |
| `useFormContext` | Acceder al form en componentes hijos       |
| `watch`          | Observar valores para campos condicionales |
| `trigger`        | Validar campos específicos manualmente     |

---

## ✅ Checklist de Verificación

- [ ] Puedo implementar campos dinámicos con useFieldArray
- [ ] Sé crear formularios multi-paso con validación por paso
- [ ] Puedo usar watch para campos condicionales
- [ ] Sé compartir estado del formulario con FormProvider

---

## 🔗 Recursos

- [React Hook Form - useFieldArray](https://react-hook-form.com/api/usefieldarray)
- [React Hook Form - FormProvider](https://react-hook-form.com/api/formprovider)
- [Wizard Form Pattern](https://react-hook-form.com/advanced-usage#WizardFormFunnel)
