# Ejercicio 03: Optimizar con useMemo

## 🎯 Objetivo

Aprender a usar `useMemo` para memorizar cálculos costosos y objetos/arrays.

## ⏱️ Tiempo Estimado

45 minutos

## 📋 Descripción

En este ejercicio aprenderás a:

1. Identificar cálculos costosos que se repiten
2. Aplicar `useMemo` para memorizar resultados
3. Usar `useMemo` para estabilizar objetos pasados como props
4. Definir dependencias correctamente

## 🚀 Instrucciones

### Paso 1: Instalar y Ejecutar

```bash
cd starter
pnpm install
pnpm dev
```

### Paso 2: Observar el Problema

1. Abre la consola del navegador
2. Escribe en el campo de búsqueda
3. Observa el log: "Calculando estadísticas..." aparece en CADA keystroke
4. Haz click en el contador - ¡también recalcula!

### Paso 3: Memorizar el Filtrado

Abre `src/components/Dashboard.tsx` y descomenta:

```typescript
// ============================================
// PASO 3: Memorizar filtrado
// ============================================
// Descomenta las siguientes líneas:
// const filteredItems = useMemo(() => {
//   console.log('Filtrando items...');
//   return items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );
// }, [items, filter]);
```

### Paso 4: Memorizar Estadísticas

```typescript
// ============================================
// PASO 4: Memorizar estadísticas
// ============================================
// Descomenta las siguientes líneas:
// const stats = useMemo(() => {
//   console.log('Calculando estadísticas...');
//   return {
//     total: filteredItems.length,
//     completed: filteredItems.filter(i => i.completed).length,
//   };
// }, [filteredItems]);
```

### Paso 5: Verificar Mejora

- Escribir en búsqueda: recalcula filtrado y stats (correcto)
- Click en contador: NO recalcula nada (optimizado ✅)

## ✅ Criterios de Aceptación

- [ ] `useMemo` aplicado al filtrado
- [ ] `useMemo` aplicado a las estadísticas
- [ ] Click en contador NO ejecuta "Calculando estadísticas..."
- [ ] Filtrado sigue funcionando correctamente

## 💡 Tips

- Las dependencias deben incluir TODO lo que se usa dentro de `useMemo`
- `useMemo` retorna un valor, no una función
- Usa `useMemo` para objetos pasados a componentes memorizados

## 🔗 Siguiente Ejercicio

➡️ [Ejercicio 04: Estabilizar con useCallback](../ejercicio-04-usecallback/)
