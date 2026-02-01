// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Form/Form.tsx
// ============================================

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type FormEvent,
  type InputHTMLAttributes,
} from 'react';

// ============================================
// CONTEXT INTERNO
// ============================================

// TODO: Crea un contexto interno para el Form
// interface FormContextValue {
//   values: Record<string, string>;
//   errors: Record<string, string>;
//   touched: Record<string, boolean>;
//   setValue: (name: string, value: string) => void;
//   setError: (name: string, error: string) => void;
//   setTouched: (name: string) => void;
// }
// const FormContext = createContext<FormContextValue | undefined>(undefined);

// ============================================
// FIELD CONTEXT
// ============================================

// TODO: Contexto para cada Field individual
// interface FieldContextValue {
//   name: string;
// }
// const FieldContext = createContext<FieldContextValue | undefined>(undefined);

// ============================================
// FORM ROOT
// ============================================

// TODO: Implementa el componente raíz del Form
// interface FormRootProps {
//   children: ReactNode;
//   onSubmit: (values: Record<string, string>) => void;
//   initialValues?: Record<string, string>;
// }
//
// const FormRoot = ({ children, onSubmit, initialValues = {} }: FormRootProps) => {
//   // Manejar estado del formulario
//   // Proporcionar FormContext
//   // Manejar submit
// };

// ============================================
// FORM FIELD
// ============================================

// TODO: Contenedor de campo que proporciona contexto
// interface FormFieldProps {
//   children: ReactNode;
//   name: string;
// }
//
// const FormField = ({ children, name }: FormFieldProps) => {
//   // Proporcionar FieldContext con el nombre del campo
// };

// ============================================
// FORM LABEL
// ============================================

// TODO: Etiqueta del campo
// interface FormLabelProps {
//   children: ReactNode;
//   required?: boolean;
// }
//
// const FormLabel = ({ children, required }: FormLabelProps) => {
//   // Usar FieldContext para obtener el name y crear el htmlFor
// };

// ============================================
// FORM INPUT
// ============================================

// TODO: Input del formulario
// interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
//   // name viene del FieldContext
// }
//
// const FormInput = (props: FormInputProps) => {
//   // Usar FormContext para values y setValue
//   // Usar FieldContext para el name
//   // Usar useConfig para aplicar estilos según configuración
// };

// ============================================
// FORM ERROR
// ============================================

// TODO: Mensaje de error del campo
// interface FormErrorProps {
//   children?: ReactNode;
// }
//
// const FormError = ({ children }: FormErrorProps) => {
//   // Usar FormContext para obtener errores
//   // Usar FieldContext para el name
//   // Mostrar error si existe
// };

// ============================================
// FORM ACTIONS
// ============================================

// TODO: Contenedor para botones del formulario
// interface FormActionsProps {
//   children: ReactNode;
// }
//
// const FormActions = ({ children }: FormActionsProps) => { ... };

// ============================================
// FORM SUBMIT
// ============================================

// TODO: Botón de submit
// interface FormSubmitProps {
//   children: ReactNode;
//   disabled?: boolean;
// }
//
// const FormSubmit = ({ children, disabled }: FormSubmitProps) => { ... };

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

// TODO: Usa Object.assign para crear el compound component
// export const Form = Object.assign(FormRoot, {
//   Field: FormField,
//   Label: FormLabel,
//   Input: FormInput,
//   Error: FormError,
//   Actions: FormActions,
//   Submit: FormSubmit,
// });

// Exportación temporal
export const Form = Object.assign(
  ({ children, onSubmit }: { children: ReactNode; onSubmit: () => void }) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}>
      {children}
    </form>
  ),
  {
    Field: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    Label: ({ children }: { children: ReactNode }) => <label>{children}</label>,
    Input: (props: InputHTMLAttributes<HTMLInputElement>) => (
      <input {...props} />
    ),
    Error: ({ children }: { children?: ReactNode }) =>
      children ? <span>{children}</span> : null,
    Actions: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    Submit: ({ children }: { children: ReactNode }) => (
      <button type="submit">{children}</button>
    ),
  },
);
