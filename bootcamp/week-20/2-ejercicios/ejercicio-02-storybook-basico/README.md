# Ejercicio 02: Storybook Básico

## 🎯 Objetivo

Configurar Storybook para documentar componentes de UI en un proyecto React con TypeScript.

## ⏱️ Duración

45 minutos

## 📋 Descripción

Storybook es una herramienta para desarrollar y documentar componentes de UI de forma aislada. En este ejercicio, configurarás Storybook y crearás stories para tus componentes principales.

---

## 📦 Paso 1: Instalación de Storybook

```bash
# Inicializar Storybook en el proyecto
pnpm dlx storybook@latest init

# Esto instalará:
# - @storybook/react-vite
# - @storybook/addon-essentials
# - @storybook/addon-interactions
# - @storybook/test
```

Storybook detectará automáticamente que usas Vite y configurará todo correctamente.

---

## 🚀 Paso 2: Ejecutar Storybook

```bash
# Iniciar Storybook en modo desarrollo
pnpm storybook
```

Abre http://localhost:6006 para ver Storybook.

---

## 📝 Paso 3: Crear tu Primera Story

### Estructura de Archivos

```
src/
├── components/
│   └── ui/
│       ├── Button.tsx
│       └── Button.stories.tsx   # ← Story junto al componente
```

### Ejemplo: Button Component

**starter/Button.tsx:**

```tsx
// ============================================
// COMPONENTE: Button
// Botón reutilizable con variantes
// ============================================

// Descomenta el código para implementar el componente:

// interface ButtonProps {
//   /** Texto del botón */
//   children: React.ReactNode;
//   /** Variante visual del botón */
//   variant?: 'primary' | 'secondary' | 'danger';
//   /** Tamaño del botón */
//   size?: 'sm' | 'md' | 'lg';
//   /** Estado deshabilitado */
//   disabled?: boolean;
//   /** Callback al hacer click */
//   onClick?: () => void;
// }
//
// export const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = 'primary',
//   size = 'md',
//   disabled = false,
//   onClick,
// }) => {
//   // Clases base
//   const baseClasses = 'font-medium rounded transition-colors focus:outline-none focus:ring-2';
//
//   // Clases por variante
//   const variantClasses = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
//     secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
//     danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
//   };
//
//   // Clases por tamaño
//   const sizeClasses = {
//     sm: 'px-3 py-1.5 text-sm',
//     md: 'px-4 py-2 text-base',
//     lg: 'px-6 py-3 text-lg',
//   };
//
//   return (
//     <button
//       className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}
//                   ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };
```

### Crear Story para Button

**starter/Button.stories.tsx:**

```tsx
// ============================================
// STORIES: Button
// Documentación del componente Button
// ============================================

// Descomenta el código para crear las stories:

// import type { Meta, StoryObj } from '@storybook/react';
// import { Button } from './Button';
//
// // Metadata del componente
// const meta: Meta<typeof Button> = {
//   title: 'UI/Button',           // Categoría/Nombre en Storybook
//   component: Button,
//   parameters: {
//     layout: 'centered',         // Centrar en el canvas
//   },
//   tags: ['autodocs'],           // Generar documentación automática
//   argTypes: {
//     variant: {
//       control: 'select',
//       options: ['primary', 'secondary', 'danger'],
//       description: 'Variante visual del botón',
//     },
//     size: {
//       control: 'radio',
//       options: ['sm', 'md', 'lg'],
//       description: 'Tamaño del botón',
//     },
//     disabled: {
//       control: 'boolean',
//       description: 'Estado deshabilitado',
//     },
//     onClick: {
//       action: 'clicked',        // Loguear clicks en panel de acciones
//     },
//   },
// };
//
// export default meta;
// type Story = StoryObj<typeof meta>;
//
// // Story por defecto
// export const Default: Story = {
//   args: {
//     children: 'Button',
//     variant: 'primary',
//     size: 'md',
//   },
// };
//
// // Story de variante Primary
// export const Primary: Story = {
//   args: {
//     children: 'Primary Button',
//     variant: 'primary',
//   },
// };
//
// // Story de variante Secondary
// export const Secondary: Story = {
//   args: {
//     children: 'Secondary Button',
//     variant: 'secondary',
//   },
// };
//
// // Story de variante Danger
// export const Danger: Story = {
//   args: {
//     children: 'Delete',
//     variant: 'danger',
//   },
// };
//
// // Story de tamaños
// export const Sizes: Story = {
//   render: () => (
//     <div className="flex items-center gap-4">
//       <Button size="sm">Small</Button>
//       <Button size="md">Medium</Button>
//       <Button size="lg">Large</Button>
//     </div>
//   ),
// };
//
// // Story de estado disabled
// export const Disabled: Story = {
//   args: {
//     children: 'Disabled Button',
//     disabled: true,
//   },
// };
```

---

## 🎨 Paso 4: Story para un Componente de Formulario

**starter/Input.tsx:**

```tsx
// ============================================
// COMPONENTE: Input
// Campo de entrada reutilizable
// ============================================

// Descomenta para implementar:

// interface InputProps {
//   /** ID único del input */
//   id: string;
//   /** Label del campo */
//   label: string;
//   /** Tipo de input */
//   type?: 'text' | 'email' | 'password' | 'number';
//   /** Placeholder */
//   placeholder?: string;
//   /** Mensaje de error */
//   error?: string;
//   /** Campo requerido */
//   required?: boolean;
//   /** Valor actual */
//   value?: string;
//   /** Callback de cambio */
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
//
// export const Input: React.FC<InputProps> = ({
//   id,
//   label,
//   type = 'text',
//   placeholder,
//   error,
//   required = false,
//   value,
//   onChange,
// }) => {
//   return (
//     <div className="flex flex-col gap-1">
//       <label htmlFor={id} className="text-sm font-medium text-gray-700">
//         {label}
//         {required && <span className="text-red-500 ml-1">*</span>}
//       </label>
//       <input
//         id={id}
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         aria-required={required}
//         aria-invalid={!!error}
//         aria-describedby={error ? `${id}-error` : undefined}
//         className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2
//                     ${error
//                       ? 'border-red-500 focus:ring-red-500'
//                       : 'border-gray-300 focus:ring-blue-500'}`}
//       />
//       {error && (
//         <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };
```

**starter/Input.stories.tsx:**

```tsx
// ============================================
// STORIES: Input
// ============================================

// Descomenta para crear las stories:

// import type { Meta, StoryObj } from '@storybook/react';
// import { Input } from './Input';
//
// const meta: Meta<typeof Input> = {
//   title: 'UI/Input',
//   component: Input,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     type: {
//       control: 'select',
//       options: ['text', 'email', 'password', 'number'],
//     },
//   },
// };
//
// export default meta;
// type Story = StoryObj<typeof meta>;
//
// export const Default: Story = {
//   args: {
//     id: 'email',
//     label: 'Email',
//     placeholder: 'tu@email.com',
//   },
// };
//
// export const Required: Story = {
//   args: {
//     id: 'name',
//     label: 'Nombre completo',
//     required: true,
//   },
// };
//
// export const WithError: Story = {
//   args: {
//     id: 'email',
//     label: 'Email',
//     value: 'invalid-email',
//     error: 'Por favor ingresa un email válido',
//   },
// };
//
// export const Password: Story = {
//   args: {
//     id: 'password',
//     label: 'Contraseña',
//     type: 'password',
//     placeholder: '••••••••',
//   },
// };
```

---

## 📦 Paso 5: Story para un Componente Card

**starter/Card.stories.tsx:**

```tsx
// ============================================
// STORIES: Card (Componente del dominio)
// ============================================

// Descomenta para crear las stories:

// import type { Meta, StoryObj } from '@storybook/react';
// import { Card } from './Card';
//
// const meta: Meta<typeof Card> = {
//   title: 'Features/Card',
//   component: Card,
//   tags: ['autodocs'],
// };
//
// export default meta;
// type Story = StoryObj<typeof meta>;
//
// // Ejemplo con datos del dominio (adapta a tu dominio)
// export const Default: Story = {
//   args: {
//     item: {
//       id: '1',
//       name: 'Item de Ejemplo',
//       description: 'Descripción del item para el dominio asignado.',
//       price: 29.99,
//     },
//   },
// };
//
// export const WithLongDescription: Story = {
//   args: {
//     item: {
//       id: '2',
//       name: 'Item con descripción larga',
//       description: 'Esta es una descripción muy larga que debería truncarse o manejarse de alguna manera para no romper el diseño del componente Card.',
//       price: 99.99,
//     },
//   },
// };
//
// export const WithActions: Story = {
//   args: {
//     item: {
//       id: '3',
//       name: 'Item con acciones',
//       description: 'Item que muestra botones de acción.',
//       price: 49.99,
//     },
//     onEdit: () => console.log('Edit clicked'),
//     onDelete: () => console.log('Delete clicked'),
//   },
// };
```

---

## 🏗️ Paso 6: Build de Storybook

Para generar una versión estática de Storybook:

```bash
# Generar build estático
pnpm build-storybook

# Los archivos se generan en storybook-static/
```

Puedes desplegar esta carpeta en cualquier hosting estático (GitHub Pages, Vercel, Netlify).

---

## 📁 Estructura Final

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Input.tsx
│   │   └── Input.stories.tsx
│   └── features/
│       ├── Card.tsx
│       └── Card.stories.tsx
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── storybook-static/          # Build generado
```

---

## ✅ Criterios de Éxito

- [ ] Storybook instalado y ejecutando
- [ ] Al menos 3 componentes documentados con stories
- [ ] Cada componente tiene múltiples stories (estados diferentes)
- [ ] Autodocs generando documentación
- [ ] Build estático generado correctamente

---

## 💡 Tips

1. **Organiza por categorías**: Usa el formato `Categoría/Componente` en el title
2. **Documenta props**: Usa JSDoc comments para que aparezcan en Autodocs
3. **Muestra estados**: Crea stories para loading, error, empty, etc.
4. **Usa controles**: Los argTypes permiten probar diferentes valores
5. **Integra con tests**: Storybook puede ejecutar tests de interacción

---

## 📚 Recursos

- [Storybook React Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Autodocs](https://storybook.js.org/docs/react/writing-docs/autodocs)

---

_Has completado los ejercicios. ¡Ahora ve al proyecto final!_
