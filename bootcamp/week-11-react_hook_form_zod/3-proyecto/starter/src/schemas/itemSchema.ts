// ============================================
// SCHEMA GENÉRICO DE VALIDACIÓN
// Adapta este schema a tu dominio asignado
// ============================================

import { z } from 'zod';

// TODO: Adapta este schema a tu dominio
// Ejemplo para Biblioteca: BookSchema
// Ejemplo para Farmacia: MedicineSchema
// Ejemplo para Restaurante: OrderSchema

export const itemSchema = z.object({
  // Campo ID (generalmente auto-generado)
  id: z.string().optional(),

  // TODO: Añade campos específicos de tu dominio
  // Ejemplos:

  // Campo de texto requerido
  name: z
    .string()
    .min(1, 'El nombre es requerido')
    .max(100, 'Máximo 100 caracteres'),

  // Campo de texto largo
  description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(500, 'Máximo 500 caracteres'),

  // Campo numérico
  price: z
    .number({ invalid_type_error: 'Debe ser un número' })
    .positive('Debe ser mayor a 0')
    .max(999999, 'Precio demasiado alto'),

  // Campo de selección (enum)
  category: z.enum(['categoria1', 'categoria2', 'categoria3'], {
    errorMap: () => ({ message: 'Selecciona una categoría válida' }),
  }),

  // Campo de fecha
  date: z.string().min(1, 'La fecha es requerida'),

  // Campo booleano
  active: z.boolean().default(true),

  // Campo de email
  contactEmail: z
    .string()
    .email('Email no válido')
    .optional()
    .or(z.literal('')),
});

// Tipo inferido del schema
export type Item = z.infer<typeof itemSchema>;

// Schema para crear (sin ID)
export const createItemSchema = itemSchema.omit({ id: true });
export type CreateItemData = z.infer<typeof createItemSchema>;

// Schema para actualizar (parcial)
export const updateItemSchema = itemSchema.partial().required({ id: true });
export type UpdateItemData = z.infer<typeof updateItemSchema>;

// ============================================
// SCHEMAS PARA CAMPOS DINÁMICOS
// ============================================

// Schema para un item dentro de una lista
export const lineItemSchema = z.object({
  productName: z.string().min(1, 'Nombre requerido'),
  quantity: z.number().min(1, 'Mínimo 1'),
  unitPrice: z.number().min(0, 'Precio no válido'),
});

export type LineItem = z.infer<typeof lineItemSchema>;

// Schema con lista de items
export const orderSchema = z.object({
  customerName: z.string().min(1, 'Nombre del cliente requerido'),
  items: z.array(lineItemSchema).min(1, 'Agrega al menos un producto'),
  notes: z.string().optional(),
});

export type Order = z.infer<typeof orderSchema>;

// ============================================
// SCHEMA PARA WIZARD MULTI-PASO
// ============================================

export const wizardSchema = z.object({
  // Paso 1: Información básica
  basicInfo: z.object({
    name: z.string().min(1, 'Requerido'),
    type: z.string().min(1, 'Requerido'),
  }),

  // Paso 2: Detalles
  details: z.object({
    description: z.string().min(10, 'Mínimo 10 caracteres'),
    specifications: z.string().optional(),
  }),

  // Paso 3: Configuración
  config: z.object({
    priority: z.enum(['low', 'medium', 'high']),
    notifications: z.boolean(),
  }),
});

export type WizardData = z.infer<typeof wizardSchema>;

// Campos por paso para validación parcial
export const wizardStepFields = {
  0: ['basicInfo.name', 'basicInfo.type'],
  1: ['details.description'],
  2: ['config.priority', 'config.notifications'],
} as const;
