# 📘 Week 04: Renderizado Condicional y Listas

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Aplicar renderizado condicional con operadores ternarios y lógicos
- ✅ Usar patrones avanzados de condicionales (early return, guard clauses)
- ✅ Renderizar listas de datos con `.map()` tipado
- ✅ Usar la prop `key` correctamente para optimizar renders
- ✅ Filtrar y ordenar datos en tiempo real
- ✅ Manejar estados vacíos, loading y error en listas
- ✅ Implementar búsqueda y paginación básica

---

## 📚 Requisitos Previos

Antes de comenzar esta semana, debes dominar:

- ✅ Week 01: TypeScript fundamentos (interfaces, generics)
- ✅ Week 02: Componentes, props, useState, eventos
- ✅ Week 03: useEffect, fetch de datos, cleanup
- ✅ JavaScript: .map(), .filter(), .sort(), .find()
- ✅ Conceptos: inmutabilidad, spread operator

---

## 🗂️ Estructura de la Semana

```
week-04-renderizado_condicional_listas/
├── README.md                          # ← Estás aquí
├── rubrica-evaluacion.md              # Criterios de evaluación
├── 0-assets/                          # Diagramas y recursos visuales
│   ├── 01-conditional-patterns.svg
│   ├── 02-list-rendering.svg
│   ├── 03-key-importance.svg
│   ├── 04-filter-sort-flow.svg
│   ├── 05-empty-states.svg
│   └── 06-pagination-pattern.svg
├── 1-teoria/                          # Material teórico (~2.5-3h)
│   ├── 01-renderizado-condicional.md
│   ├── 02-renderizado-listas.md
│   ├── 03-keys-optimizacion.md
│   └── 04-filtrado-ordenamiento-busqueda.md
├── 2-ejercicios/                      # Ejercicios prácticos (~2.5-3h)
│   ├── 01-condicionales-basicos/
│   ├── 02-renderizado-listas/
│   ├── 03-keys-y-actualizaciones/
│   ├── 04-filtrado-busqueda/
│   └── 05-lista-completa/
├── 3-proyecto/                        # Proyecto integrador (~2-2.5h)
│   ├── README.md
│   ├── starter/
│   └── solution/
├── 4-recursos/                        # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                        # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5-3 horas)

#### [01 - Renderizado Condicional](./1-teoria/01-renderizado-condicional.md)

- Operador ternario en JSX
- Operadores lógicos && y ||
- Patrones: early return, guard clauses
- Componentes condicionales y null
- Ternarios anidados vs componentes separados

#### [02 - Renderizado de Listas](./1-teoria/02-renderizado-listas.md)

- .map() para renderizar arrays
- Tipar arrays y elementos
- Componentes de lista e ítem
- Renderizado de objetos complejos
- Listas vacías y estados por defecto

#### [03 - Keys y Optimización](./1-teoria/03-keys-optimizacion.md)

- ¿Por qué React necesita keys?
- Algoritmo de reconciliación (diffing)
- Keys correctas vs index como key
- Problemas comunes con keys incorrectas
- Generar keys únicas

#### [04 - Filtrado, Ordenamiento y Búsqueda](./1-teoria/04-filtrado-ordenamiento-busqueda.md)

- Filtrar datos con .filter()
- Ordenar con .sort() (sin mutar)
- Implementar búsqueda con estado
- Combinar filtros múltiples
- Debounce en búsqueda

---

### 2️⃣ Ejercicios (2.5-3 horas)

Ejercicios progresivos formato tutorial guiado:

1. **Condicionales Básicos** (20-25 min): Mostrar/ocultar elementos, estados de UI
2. **Renderizado de Listas** (25-30 min): Mapear arrays a componentes
3. **Keys y Actualizaciones** (25-35 min): Entender impacto de keys en renders
4. **Filtrado y Búsqueda** (30-40 min): Implementar filtros y search box
5. **Lista Completa** (35-45 min): Combinar todo: lista, filtros, búsqueda, ordenamiento

---

### 3️⃣ Proyecto Semanal (2-2.5 horas)

**Título**: Catálogo Interactivo con Filtros y Búsqueda

**Requisitos**:

- Listado de elementos del dominio desde datos locales o API
- Búsqueda en tiempo real (por nombre/título)
- Filtros por categoría/tipo
- Ordenamiento (A-Z, Z-A, fecha, etc.)
- Estados vacíos y de carga
- Paginación o scroll infinito básico

**Dominios únicos** (asignados por instructor):

| Dominio           | Elementos          | Filtros sugeridos             |
| ----------------- | ------------------ | ----------------------------- |
| 📖 Biblioteca     | Libros             | Género, autor, disponibilidad |
| 💊 Farmacia       | Medicamentos       | Categoría, precio, receta     |
| 🏋️ Gimnasio       | Miembros/Rutinas   | Plan, estado, instructor      |
| 🏫 Escuela        | Estudiantes/Cursos | Grado, materia, turno         |
| 🍕 Restaurante    | Platillos/Menú     | Categoría, precio, vegano     |
| 🏨 Hotel          | Habitaciones       | Tipo, capacidad, precio       |
| 🚗 Concesionario  | Vehículos          | Marca, año, tipo              |
| 👗 Tienda de Ropa | Productos          | Categoría, talla, color       |

---

## ⏱️ Distribución del Tiempo

| Componente     | Tiempo Estimado | Descripción                            |
| -------------- | --------------- | -------------------------------------- |
| **Teoría**     | 2.5-3h          | Leer 4 archivos .md con ejemplos       |
| **Ejercicios** | 2.5-3h          | Completar 5 ejercicios (20-45 min c/u) |
| **Proyecto**   | 2-2.5h          | Implementar catálogo con filtros       |
| **Buffer**     | +30 min         | Setup, debugging, revisión             |
| **TOTAL**      | **~8 horas**    | Dedicación semanal completa            |

---

## 📌 Entregable

Al finalizar la semana, debes entregar:

### Proyecto Semanal 📦 (100%)

- Proyecto de catálogo funcional
- README con descripción del dominio
- Búsqueda y filtros implementados
- Keys únicas y correctas en todas las listas
- Estados vacíos manejados apropiadamente

> 💡 **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## ✅ Checklist de Verificación

Antes de considerar la semana completa:

### Preparación (No evaluada)

- [ ] Teoría: Leídos los 4 archivos de teoría
- [ ] Ejercicio 01: Condicionales básicos completado
- [ ] Ejercicio 02: Renderizado de listas completado
- [ ] Ejercicio 03: Keys y actualizaciones completado
- [ ] Ejercicio 04: Filtrado y búsqueda completado
- [ ] Ejercicio 05: Lista completa completado

### Entregable (Evaluado)

- [ ] Proyecto: Catálogo con datos renderizados
- [ ] Proyecto: Búsqueda funcional
- [ ] Proyecto: Filtros implementados
- [ ] Proyecto: Ordenamiento funcional
- [ ] Proyecto: Estados vacíos/loading/error manejados
- [ ] Código: Keys únicas en todas las listas
- [ ] Código: Nomenclatura inglés (técnico) + español (comentarios)

---

## 🔗 Navegación

| Anterior                                     | Siguiente                                      |
| -------------------------------------------- | ---------------------------------------------- |
| [← Week 03: useEffect](../week-03-useeffect_efectos_secundarios/README.md) | [Week 05: Composición →](../week-05-composicion_context_api/README.md) |

---

## 💡 Tips para Esta Semana

> **Tip 1**: Nunca uses `index` como key si los elementos pueden reordenarse, eliminarse o insertarse.

> **Tip 2**: Si un condicional tiene más de 2-3 niveles, considera extraerlo a un componente separado.

> **Tip 3**: Siempre crea una copia del array antes de ordenar: `[...items].sort()` en lugar de `items.sort()`.

> **Tip 4**: Para búsqueda, usa `.toLowerCase()` tanto en el input como en los datos para comparación case-insensitive.

---

_Semana 4 de 20 · Etapa 2: Fundamentos de React_
