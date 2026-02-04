// ============================================
// EJERCICIO 01: Modal Accesible con Radix Dialog
// Archivo: Dialog.tsx (solution)
// ============================================

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

// ============================================
// PASO 1-4: Dialog Component Completo
// ============================================

interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function CustomDialog({
  trigger,
  title,
  description,
  children,
}: DialogProps) {
  return (
    <Dialog.Root>
      {/* Trigger: el elemento que abre el modal */}
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      {/* Portal: renderiza fuera del DOM principal */}
      <Dialog.Portal>
        {/* Overlay: fondo oscuro con blur */}
        <Dialog.Overlay
          className="
            fixed inset-0 z-50 
            bg-black/50 backdrop-blur-sm
            data-[state=open]:animate-in 
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 
            data-[state=open]:fade-in-0
          "
        />

        {/* Content: el modal en sí */}
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 z-50
            w-full max-w-lg -translate-x-1/2 -translate-y-1/2
            rounded-xl bg-gray-900 p-6
            border border-gray-700 shadow-xl
            data-[state=open]:animate-in 
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 
            data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-95 
            data-[state=open]:zoom-in-95
          ">
          {/* Title - requerido para accesibilidad */}
          <Dialog.Title className="text-xl font-semibold text-white">
            {title}
          </Dialog.Title>

          {/* Description - opcional pero mejora a11y */}
          {description && (
            <Dialog.Description className="mt-2 text-gray-400">
              {description}
            </Dialog.Description>
          )}

          {/* Contenido del modal */}
          <div className="mt-4">{children}</div>

          {/* Botón de cerrar */}
          <Dialog.Close
            className="
              absolute right-4 top-4 
              rounded-full p-1.5
              text-gray-400 hover:text-white
              hover:bg-gray-700/50
              transition-colors
            "
            aria-label="Cerrar">
            <X size={18} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// ============================================
// PASO 5: ConfirmDialog Component
// ============================================

interface ConfirmDialogProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  variant?: 'danger' | 'default';
}

export function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  variant = 'default',
}: ConfirmDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed inset-0 z-50 
            bg-black/50 backdrop-blur-sm
            data-[state=open]:animate-in 
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 
            data-[state=open]:fade-in-0
          "
        />

        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 z-50
            w-full max-w-md -translate-x-1/2 -translate-y-1/2
            rounded-xl bg-gray-900 p-6
            border border-gray-700 shadow-xl
            data-[state=open]:animate-in 
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 
            data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-95 
            data-[state=open]:zoom-in-95
          ">
          <Dialog.Title className="text-xl font-semibold text-white">
            {title}
          </Dialog.Title>

          <Dialog.Description className="mt-2 text-gray-400">
            {description}
          </Dialog.Description>

          {/* Botones de acción */}
          <div className="mt-6 flex justify-end gap-3">
            <Dialog.Close asChild>
              <button
                className="
                  px-4 py-2 rounded-lg
                  bg-gray-700 text-white
                  hover:bg-gray-600
                  transition-colors
                ">
                {cancelLabel}
              </button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <button
                onClick={onConfirm}
                className={`
                  px-4 py-2 rounded-lg text-white
                  transition-colors
                  ${
                    variant === 'danger'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }
                `}>
                {confirmLabel}
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close
            className="
              absolute right-4 top-4 
              rounded-full p-1.5
              text-gray-400 hover:text-white
              hover:bg-gray-700/50
              transition-colors
            "
            aria-label="Cerrar">
            <X size={18} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
