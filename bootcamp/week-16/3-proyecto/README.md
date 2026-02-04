# 🚀 Proyecto Semana 16: Dashboard Optimizado

## 🎯 Objetivo

Aplicar todas las técnicas de optimización de renders aprendidas en esta semana (React.memo, useMemo, useCallback) para construir un **Dashboard de alto rendimiento** que maneje grandes cantidades de datos sin problemas de performance.

---

## 🏛️ Tu Dominio Asignado

**Dominio**: _[El instructor te asignará tu dominio único]_

Adapta el Dashboard genérico a tu dominio específico:

| Dominio               | Entidad Principal | Métricas                             |
| --------------------- | ----------------- | ------------------------------------ |
| 📖 Biblioteca         | Libros            | Préstamos, disponibilidad, géneros   |
| 💊 Farmacia           | Medicamentos      | Stock, ventas, vencimientos          |
| 🏋️ Gimnasio           | Miembros          | Asistencias, membresías, horarios    |
| 🏫 Escuela            | Estudiantes       | Calificaciones, asistencia, materias |
| 🏬 Tienda de mascotas | Productos         | Inventario, ventas, categorías       |
| 🍽️ Restaurante        | Platillos         | Pedidos, ingredientes, mesas         |

---

## 📋 Requisitos Funcionales

### 1. Lista Virtualizada de Elementos (400 puntos)

El Dashboard debe mostrar **al menos 500 elementos** de tu dominio:

- [ ] Usar `React.memo` en cada item para evitar re-renders innecesarios
- [ ] Implementar filtros (mínimo 3 criterios de tu dominio)
- [ ] Mostrar contador de elementos filtrados vs total
- [ ] Los filtros deben usar `useMemo` para cálculos costosos

### 2. Panel de Estadísticas (300 puntos)

Mostrar estadísticas agregadas que se actualicen con los filtros:

- [ ] Mínimo 4 métricas calculadas (promedios, totales, máximos, etc.)
- [ ] Usar `useMemo` para memorizar los cálculos
- [ ] Las estadísticas solo deben recalcularse cuando cambian los datos relevantes

### 3. Acciones sobre Elementos (300 puntos)

Implementar funciones de gestión optimizadas:

- [ ] Agregar nuevo elemento
- [ ] Editar elemento existente
- [ ] Eliminar elemento
- [ ] Marcar/destacar elemento
- [ ] **Todas las funciones deben usar `useCallback`**

### 4. Búsqueda en Tiempo Real (200 puntos)

- [ ] Input de búsqueda que filtre elementos
- [ ] Debounce de 300ms para optimizar búsquedas
- [ ] Resaltar término buscado en los resultados

### 5. Medición de Performance (300 puntos)

- [ ] Incluir Profiler API para medir renders
- [ ] Documentar métricas en README (antes/después de optimizar)
- [ ] Screenshots de React DevTools Profiler

---

## 🛠️ Requisitos Técnicos

### Optimizaciones Obligatorias

```typescript
// Cada función handler debe usar useCallback
const handleDelete = useCallback((id: number) => {
  setItems((prev) => prev.filter((item) => item.id !== id));
}, []);

// Cálculos costosos con useMemo
const statistics = useMemo(() => {
  return calculateStats(filteredItems);
}, [filteredItems]);

// Componentes con memo y comparadores personalizados
const ItemCard = memo(
  ({ item, onDelete, onEdit }: ItemCardProps) => {
    // ...
  },
  (prevProps, nextProps) => {
    return (
      prevProps.item.id === nextProps.item.id &&
      prevProps.item.updatedAt === nextProps.item.updatedAt
    );
  },
);
```

### Estructura de Componentes

```
src/
├── components/
│   ├── Dashboard.tsx        # Componente principal
│   ├── ItemList.tsx         # Lista con memo
│   ├── ItemCard.tsx         # Card con memo y comparador
│   ├── Stats.tsx            # Estadísticas con memo
│   ├── Filters.tsx          # Filtros
│   ├── SearchBar.tsx        # Búsqueda con debounce
│   └── AddItemForm.tsx      # Formulario con memo
├── hooks/
│   ├── useDebounce.ts       # Hook de debounce
│   └── usePerformance.ts    # Hook para métricas
├── utils/
│   ├── generateData.ts      # Generador de datos de prueba
│   └── calculations.ts      # Funciones de cálculo
└── types/
    └── index.ts             # Interfaces TypeScript
```

---

## 📊 Criterios de Evaluación

| Criterio                 | Puntos   | Descripción                             |
| ------------------------ | -------- | --------------------------------------- |
| Lista optimizada         | 400      | React.memo, key props, evita re-renders |
| Estadísticas memorizadas | 300      | useMemo correctamente implementado      |
| Handlers optimizados     | 300      | useCallback en todas las funciones      |
| Búsqueda con debounce    | 200      | Implementación eficiente                |
| Métricas documentadas    | 300      | Profiler, screenshots, comparativas     |
| **Total**                | **1500** |                                         |

### Escala de Calificación

- **Excelente (90-100%)**: 1350-1500 puntos
- **Bueno (80-89%)**: 1200-1349 puntos
- **Aceptable (70-79%)**: 1050-1199 puntos
- **Insuficiente (<70%)**: < 1050 puntos

---

## 📅 Entregables

1. **Código fuente** en carpeta `3-proyecto/mi-proyecto/`
2. **README.md** con:
   - Descripción del dominio elegido
   - Instrucciones de instalación y ejecución
   - Screenshots del dashboard funcionando
   - **Métricas de rendimiento** (antes vs después)
   - Capturas de React DevTools Profiler
3. **Documentación** de decisiones de optimización

---

## 💡 Consejos

### Generador de Datos

Crea una función para generar datos de prueba:

```typescript
// utils/generateData.ts
export const generateItems = (count: number): Item[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Elemento ${i + 1}`,
    // ... propiedades de tu dominio
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }));
};
```

### Hook de Debounce

```typescript
// hooks/useDebounce.ts
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
```

### Medir con Profiler

```tsx
<Profiler
  id="Dashboard"
  onRender={onRenderCallback}>
  <Dashboard />
</Profiler>
```

---

## 🔗 Recursos

- [React.memo - React Docs](https://react.dev/reference/react/memo)
- [useMemo - React Docs](https://react.dev/reference/react/useMemo)
- [useCallback - React Docs](https://react.dev/reference/react/useCallback)
- [Profiler API - React Docs](https://react.dev/reference/react/Profiler)
- [React DevTools Profiler](https://react.dev/learn/react-developer-tools#profiling-components-with-the-react-profiler)

---

## ⏱️ Tiempo Estimado

- **Planificación**: 30 min
- **Implementación base**: 60 min
- **Optimizaciones**: 45 min
- **Testing y métricas**: 30 min
- **Documentación**: 25 min
- **Total**: ~3 horas

---

**¡Buena suerte! 🎉**
