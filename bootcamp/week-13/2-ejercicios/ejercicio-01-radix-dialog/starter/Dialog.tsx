// ============================================
// EJERCICIO 01: Modal Accesible con Radix Dialog
// Archivo: Dialog.tsx (starter)
// ============================================

// import * as Dialog from '@radix-ui/react-dialog';
// import { X } from 'lucide-react';

// ============================================
// PASO 1: Estructura básica del Dialog
// ============================================
// Descomenta el código para crear la estructura del Dialog

// interface DialogProps {
//   trigger: React.ReactNode;
//   title: string;
//   description?: string;
//   children: React.ReactNode;
// }

// export function CustomDialog({ trigger, title, description, children }: DialogProps) {
//   return (
//     <Dialog.Root>
//       {/* TODO: Agregar Dialog.Trigger con asChild */}
//
//       <Dialog.Portal>
//         {/* TODO: Agregar Dialog.Overlay con estilos */}
//
//         {/* TODO: Agregar Dialog.Content */}
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }

// ============================================
// PASO 2: Agregar Header con Title y Description
// ============================================
// Dentro de Dialog.Content, agrega:
//
// <Dialog.Title className="...">
//   {title}
// </Dialog.Title>
//
// {description && (
//   <Dialog.Description className="...">
//     {description}
//   </Dialog.Description>
// )}

// ============================================
// PASO 3: Estilos y animaciones con data-attributes
// ============================================
// Usa estos estilos en Dialog.Overlay:
//
// className="
//   fixed inset-0 z-50
//   bg-black/50 backdrop-blur-sm
//   data-[state=open]:animate-in
//   data-[state=closed]:animate-out
//   data-[state=closed]:fade-out-0
//   data-[state=open]:fade-in-0
// "
//
// Y estos en Dialog.Content:
//
// className="
//   fixed left-1/2 top-1/2 z-50
//   w-full max-w-lg -translate-x-1/2 -translate-y-1/2
//   rounded-xl bg-gray-900 p-6
//   border border-gray-700 shadow-xl
//   data-[state=open]:animate-in
//   data-[state=closed]:animate-out
//   data-[state=closed]:fade-out-0
//   data-[state=open]:fade-in-0
//   data-[state=closed]:zoom-out-95
//   data-[state=open]:zoom-in-95
// "

// ============================================
// PASO 4: Botón de cerrar
// ============================================
// Agrega Dialog.Close con icono X:
//
// <Dialog.Close
//   className="
//     absolute right-4 top-4
//     rounded-full p-1.5
//     text-gray-400 hover:text-white
//     hover:bg-gray-700/50
//     transition-colors
//   "
//   aria-label="Cerrar"
// >
//   <X size={18} />
// </Dialog.Close>

// ============================================
// PASO 5: Componente ConfirmDialog
// ============================================
// Crea una variante para confirmaciones:

// interface ConfirmDialogProps {
//   trigger: React.ReactNode;
//   title: string;
//   description: string;
//   confirmLabel?: string;
//   cancelLabel?: string;
//   onConfirm: () => void;
//   variant?: 'danger' | 'default';
// }

// export function ConfirmDialog({
//   trigger,
//   title,
//   description,
//   confirmLabel = 'Confirmar',
//   cancelLabel = 'Cancelar',
//   onConfirm,
//   variant = 'default',
// }: ConfirmDialogProps) {
//   // TODO: Implementar usando CustomDialog o directamente con Dialog.*
//   return null;
// }

// ============================================
// EXPORTS para testing
// ============================================
export {};
