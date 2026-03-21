# 🏋️ Ejercicio 02: Mutations con useMutation

## 🎯 Objetivo

Aprender a usar `useMutation` para operaciones de escritura (crear, actualizar, eliminar) y entender la integración con invalidación de queries.

## 📋 Descripción

En este ejercicio crearás mutations para agregar y eliminar usuarios, integrando las operaciones con el caché de React Query.

## 📚 Conceptos Cubiertos

- Hook useMutation para operaciones de escritura
- Callbacks: onSuccess, onError, onSettled
- Invalidación de queries después de mutations
- Estados de mutation: isPending, isSuccess, isError
- Integración de formularios con mutations

## 🔧 Instrucciones

### Paso 1: Crear las Funciones de API

Abre `starter/api/users.ts` y descomenta las funciones `createUser` y `deleteUser`.

**Concepto**: Las mutation functions reciben datos y realizan operaciones POST, PUT, PATCH o DELETE.

### Paso 2: Crear el Hook useCreateUser

Abre `starter/hooks/useCreateUser.ts` y descomenta el hook.

**Concepto**: useMutation no se ejecuta automáticamente. Debes llamar `mutate()` para disparar la operación.

### Paso 3: Crear el Hook useDeleteUser

Abre `starter/hooks/useDeleteUser.ts` y descomenta el hook.

**Concepto**: Usa `useQueryClient` para acceder al cliente e invalidar queries después de una mutation exitosa.

### Paso 4: Implementar el Formulario

Abre `starter/components/UserForm.tsx` y descomenta el componente.

**Concepto**: `mutation.isPending` te permite deshabilitar el formulario mientras se procesa.

### Paso 5: Integrar Delete en la Lista

Abre `starter/components/UserList.tsx` y descomenta la funcionalidad de eliminar.

## ✅ Criterios de Completitud

- [ ] Función createUser implementada
- [ ] Función deleteUser implementada
- [ ] Hook useCreateUser con invalidación
- [ ] Hook useDeleteUser con invalidación
- [ ] Formulario funcional con estados de loading
- [ ] Botón eliminar funcional en cada usuario

## 🧪 Verificación

1. Crear un usuario debe agregarlo a la lista automáticamente
2. Eliminar un usuario debe removerlo de la lista
3. Durante la operación, debe mostrar estado de loading
4. Después de cada operación, la lista debe actualizarse

## 📁 Estructura de Archivos

```
ejercicio-02-mutations/
├── README.md
├── starter/
│   ├── main.tsx
│   ├── App.tsx
│   ├── api/
│   │   └── users.ts
│   ├── hooks/
│   │   ├── useUsers.ts
│   │   ├── useCreateUser.ts
│   │   └── useDeleteUser.ts
│   └── components/
│       ├── UserList.tsx
│       └── UserForm.tsx
└── solution/
    └── (misma estructura con código completo)
```

## 🔗 Recursos

- [useMutation Documentation](https://tanstack.com/query/latest/docs/framework/react/reference/useMutation)
- [Mutations Guide](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)
