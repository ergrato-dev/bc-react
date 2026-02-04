# Ejercicio 01: Modal Accesible con Radix Dialog

## 🎯 Objetivo

Crear un modal (Dialog) completamente accesible usando Radix UI primitives y estilizado con Tailwind CSS.

## ⏱️ Duración

~45 minutos

## 📋 Requisitos

- Implementar Dialog con todas las partes de Radix
- Aplicar estilos con Tailwind CSS
- Agregar animaciones de entrada/salida
- Manejar cierre con Escape y click en overlay

## 🛠️ Tecnologías

```bash
pnpm add @radix-ui/react-dialog lucide-react
```

## 📝 Pasos del Ejercicio

### Paso 1: Estructura básica del Dialog

Descomenta el código en `starter/Dialog.tsx` para crear la estructura del Dialog con Root, Trigger, Portal, Overlay y Content.

### Paso 2: Agregar Header con Title y Description

Implementa el header del Dialog con Dialog.Title y Dialog.Description para accesibilidad.

### Paso 3: Estilos y animaciones

Aplica clases Tailwind con data-attributes para animaciones de fade y zoom.

### Paso 4: Botón de cerrar

Agrega Dialog.Close con icono X y estilos apropiados.

### Paso 5: Componente ConfirmDialog

Crea una variante del Dialog para confirmaciones con botones de acción.

## ✅ Criterios de Éxito

- [ ] Dialog se abre y cierra correctamente
- [ ] Focus trap funciona (Tab queda dentro del modal)
- [ ] Escape key cierra el dialog
- [ ] Click en overlay cierra el dialog
- [ ] Animaciones suaves de entrada/salida
- [ ] Accesible con lectores de pantalla

## 🔗 Recursos

- [Radix Dialog Docs](https://www.radix-ui.com/docs/primitives/components/dialog)
- [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
