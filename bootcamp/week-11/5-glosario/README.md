# 📖 Glosario - Semana 11

Términos clave ordenados alfabéticamente.

---

## A

### append()

Método de `useFieldArray` que añade un nuevo elemento al final del array.

```typescript
append({ name: '', price: 0 });
```

---

## C

### componentDidCatch

Método de ciclo de vida de Error Boundaries que se ejecuta después de capturar un error. Se usa para logging y side effects.

```typescript
componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  logErrorToService(error, errorInfo);
}
```

### control

Objeto que `useForm` retorna para controlar el formulario. Se usa principalmente con `useFieldArray` y `useController`.

```typescript
const { control } = useForm();
useFieldArray({ control, name: 'items' });
```

---

## D

### defaultValues

Valores iniciales del formulario definidos al configurar `useForm`.

```typescript
useForm({
  defaultValues: {
    name: '',
    email: '',
  },
});
```

---

## E

### Error Boundary

Componente de React (clase) que captura errores de JavaScript en su árbol de componentes hijo y muestra una UI de fallback.

### errors

Objeto del `formState` que contiene los errores de validación de cada campo.

```typescript
const {
  formState: { errors },
} = useForm();
// errors.email?.message
```

---

## F

### Fallback UI

Interfaz alternativa que se muestra cuando ocurre un error en un Error Boundary.

### fields

Array retornado por `useFieldArray` que contiene los elementos actuales con su `id` único.

```typescript
const { fields } = useFieldArray({ control, name: 'items' });
fields.map((field) => <Input key={field.id} />);
```

### formState

Estado del formulario que incluye: `errors`, `isDirty`, `isValid`, `isSubmitting`, `touchedFields`, etc.

```typescript
const {
  formState: { isDirty, isSubmitting },
} = useForm();
```

### FormProvider

Componente de contexto de React Hook Form que comparte los métodos del formulario con componentes hijos.

```typescript
<FormProvider {...methods}>
  <ChildComponent />
</FormProvider>
```

---

## G

### getDerivedStateFromError

Método estático de Error Boundaries que actualiza el estado cuando ocurre un error. Se usa para mostrar la UI de fallback.

```typescript
static getDerivedStateFromError(error: Error) {
  return { hasError: true, error };
}
```

---

## H

### handleSubmit

Método de `useForm` que envuelve la función de submit para manejar validación y prevención de default.

```typescript
<form onSubmit={handleSubmit(onSubmit)}>
```

---

## I

### isDirty

Propiedad del `formState` que indica si algún campo ha sido modificado respecto a los valores iniciales.

### isSubmitting

Propiedad del `formState` que indica si el formulario está en proceso de envío.

### isValid

Propiedad del `formState` que indica si el formulario pasa todas las validaciones.

---

## M

### mode

Configuración de `useForm` que define cuándo se ejecuta la validación: `'onSubmit'`, `'onBlur'`, `'onChange'`, `'onTouched'`, `'all'`.

```typescript
useForm({ mode: 'onChange' });
```

### move()

Método de `useFieldArray` que mueve un elemento de una posición a otra.

```typescript
move(0, 2); // Mueve el primer elemento a la tercera posición
```

---

## O

### onBlur

Evento que se dispara cuando un campo pierde el foco. Usado para validación en modo `'onBlur'`.

---

## P

### parse()

Método de Zod que valida datos y lanza error si falla.

```typescript
const result = schema.parse(data); // Lanza ZodError si falla
```

### prepend()

Método de `useFieldArray` que añade un elemento al inicio del array.

```typescript
prepend({ name: '', price: 0 });
```

---

## R

### refine()

Método de Zod para añadir validaciones personalizadas.

```typescript
z.string().refine((val) => val.includes('@'), 'Debe contener @');
```

### register

Método de `useForm` que conecta un input al formulario.

```typescript
<input {...register('email')} />
```

### remove()

Método de `useFieldArray` que elimina un elemento por índice.

```typescript
remove(2); // Elimina el tercer elemento
```

### reset()

Método de `useForm` que resetea el formulario a los valores iniciales.

```typescript
reset(); // Resetea todo
reset({ name: 'Nuevo' }); // Resetea con nuevos valores
```

### resolver

Función que conecta una librería de validación externa (como Zod) con React Hook Form.

```typescript
useForm({ resolver: zodResolver(schema) });
```

---

## S

### safeParse()

Método de Zod que valida datos sin lanzar error, retorna un objeto con `success` y `data` o `error`.

```typescript
const result = schema.safeParse(data);
if (result.success) {
  console.log(result.data);
}
```

### setValue()

Método de `useForm` para establecer el valor de un campo programáticamente.

```typescript
setValue('email', 'nuevo@email.com');
```

---

## T

### transform()

Método de Zod que transforma el valor después de validarlo.

```typescript
z.string().transform((val) => val.trim().toLowerCase());
```

### trigger()

Método de `useForm` para disparar validación manualmente de campos específicos.

```typescript
await trigger(['email', 'password']); // Valida solo estos campos
```

---

## U

### useFieldArray

Hook de React Hook Form para manejar arrays dinámicos de campos.

```typescript
const { fields, append, remove } = useFieldArray({
  control,
  name: 'items',
});
```

### useForm

Hook principal de React Hook Form que retorna métodos y estado del formulario.

```typescript
const { register, handleSubmit, formState } = useForm<FormData>();
```

### useFormContext

Hook para acceder al formulario desde componentes hijos envueltos en `FormProvider`.

```typescript
const { register } = useFormContext<FormData>();
```

---

## V

### valueAsNumber

Opción de `register` que convierte el valor del input a número.

```typescript
<input type="number" {...register('age', { valueAsNumber: true })} />
```

---

## W

### watch

Método de `useForm` para observar cambios en campos específicos.

```typescript
const email = watch('email');
const allValues = watch(); // Todos los valores
```

---

## Z

### z.infer

Utilidad de Zod para inferir el tipo TypeScript de un schema.

```typescript
const schema = z.object({ name: z.string() });
type FormData = z.infer<typeof schema>; // { name: string }
```

### z.object

Método de Zod para definir un schema de objeto.

```typescript
const schema = z.object({
  name: z.string(),
  email: z.string().email(),
});
```

### zodResolver

Función de `@hookform/resolvers` que conecta un schema de Zod con React Hook Form.

```typescript
import { zodResolver } from '@hookform/resolvers/zod';

useForm({
  resolver: zodResolver(mySchema),
});
```

### ZodError

Error que Zod lanza cuando la validación falla. Contiene un array `issues` con los detalles.

```typescript
try {
  schema.parse(data);
} catch (error) {
  if (error instanceof ZodError) {
    console.log(error.issues);
  }
}
```

---

_Última actualización: Enero 2026_
