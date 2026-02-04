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
