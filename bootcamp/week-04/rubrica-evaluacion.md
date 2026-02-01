# 📊 Rúbrica de Evaluación - Week 04

## Renderizado Condicional y Listas

---

## 📋 Resumen de Evaluación

| Tipo de Evidencia   | Peso | Descripción                                         |
| ------------------- | ---- | --------------------------------------------------- |
| **Conocimiento** 🧠 | 30%  | Comprensión teórica de condicionales, listas y keys |
| **Desempeño** 💪    | 40%  | Ejercicios prácticos completados                    |
| **Producto** 📦     | 30%  | Proyecto de catálogo funcional                      |

**Nota mínima aprobatoria**: 70% en cada tipo de evidencia

---

## 🧠 Evidencia de Conocimiento (30%)

### Criterio 1: Renderizado Condicional (10%)

| Nivel            | Puntos | Descripción                                                                   |
| ---------------- | ------ | ----------------------------------------------------------------------------- |
| **Excelente**    | 10     | Explica correctamente ternario, &&, \|\|, early return y cuándo usar cada uno |
| **Bueno**        | 8      | Conoce los patrones pero confunde casos de uso específicos                    |
| **Suficiente**   | 7      | Usa solo ternarios, desconoce otros patrones                                  |
| **Insuficiente** | <7     | No comprende renderizado condicional en JSX                                   |

**Preguntas de verificación**:

- ¿Cuál es la diferencia entre `condition && <Component />` y `condition ? <Component /> : null`?
- ¿Qué problema tiene `count && <Text>{count}</Text>` cuando count es 0?
- ¿Cuándo es preferible usar early return sobre ternario?

---

### Criterio 2: Renderizado de Listas y .map() (10%)

| Nivel            | Puntos | Descripción                                                        |
| ---------------- | ------ | ------------------------------------------------------------------ |
| **Excelente**    | 10     | Domina .map() con tipado, extrae componentes, maneja arrays vacíos |
| **Bueno**        | 8      | Usa .map() correctamente pero no extrae componentes de lista       |
| **Suficiente**   | 7      | Renderiza listas básicas, problemas con tipado                     |
| **Insuficiente** | <7     | No puede renderizar listas con .map()                              |

**Preguntas de verificación**:

- ¿Por qué usamos .map() y no for loops en JSX?
- ¿Cómo tipas un array de objetos User para usar con .map()?
- ¿Qué debes hacer si la lista está vacía?

---

### Criterio 3: Keys y Optimización (10%)

| Nivel            | Puntos | Descripción                                                             |
| ---------------- | ------ | ----------------------------------------------------------------------- |
| **Excelente**    | 10     | Explica reconciliación, sabe cuándo index es válido, genera keys únicas |
| **Bueno**        | 8      | Sabe que keys son necesarias pero no entiende el "por qué" profundo     |
| **Suficiente**   | 7      | Usa keys pero siempre con index                                         |
| **Insuficiente** | <7     | No entiende para qué sirven las keys                                    |

**Preguntas de verificación**:

- ¿Por qué React necesita la prop `key` en listas?
- ¿Qué problemas causa usar `index` como key en una lista que puede reordenarse?
- ¿Qué hace el algoritmo de reconciliación (diffing)?

---

## 💪 Evidencia de Desempeño (40%)

### Ejercicio 01: Condicionales Básicos (8%)

| Nivel            | Puntos | Descripción                                               |
| ---------------- | ------ | --------------------------------------------------------- |
| **Excelente**    | 8      | Implementa todos los patrones condicionales correctamente |
| **Bueno**        | 6.4    | Funciona pero usa solo un tipo de condicional             |
| **Suficiente**   | 5.6    | Implementación parcial con errores menores                |
| **Insuficiente** | <5.6   | No funciona o tiene errores críticos                      |

**Verificar**:

- [ ] Usa operador ternario en JSX
- [ ] Usa operador && correctamente
- [ ] Maneja el caso de valores falsy (0, "", null)
- [ ] Código limpio sin ternarios anidados excesivos

---

### Ejercicio 02: Renderizado de Listas (8%)

| Nivel            | Puntos | Descripción                                       |
| ---------------- | ------ | ------------------------------------------------- |
| **Excelente**    | 8      | Lista tipada, keys correctas, componente extraído |
| **Bueno**        | 6.4    | Funciona con keys pero todo en un componente      |
| **Suficiente**   | 5.6    | Lista renderiza pero keys incorrectas o faltantes |
| **Insuficiente** | <5.6   | No renderiza la lista correctamente               |

**Verificar**:

- [ ] Usa .map() para renderizar
- [ ] Interface/type definida para elementos
- [ ] Keys únicas y estables
- [ ] Componente de ítem extraído (ItemCard, etc.)

---

### Ejercicio 03: Keys y Actualizaciones (8%)

| Nivel            | Puntos | Descripción                                           |
| ---------------- | ------ | ----------------------------------------------------- |
| **Excelente**    | 8      | Demuestra impacto de keys, corrige problemas de index |
| **Bueno**        | 6.4    | Implementa correctamente pero no explica el "por qué" |
| **Suficiente**   | 5.6    | Usa keys pero no entiende diferencia id vs index      |
| **Insuficiente** | <5.6   | Keys incorrectas o problemas de re-render             |

**Verificar**:

- [ ] Identifica problema con index como key
- [ ] Usa id único como key
- [ ] Entiende cuándo index es aceptable
- [ ] Lista se actualiza correctamente al agregar/eliminar

---

### Ejercicio 04: Filtrado y Búsqueda (8%)

| Nivel            | Puntos | Descripción                                                 |
| ---------------- | ------ | ----------------------------------------------------------- |
| **Excelente**    | 8      | Filtros múltiples, búsqueda case-insensitive, código limpio |
| **Bueno**        | 6.4    | Filtro y búsqueda funcionan pero código mejorable           |
| **Suficiente**   | 5.6    | Solo filtro o solo búsqueda implementado                    |
| **Insuficiente** | <5.6   | No funciona filtrado ni búsqueda                            |

**Verificar**:

- [ ] Implementa .filter() correctamente
- [ ] Búsqueda por texto funcional
- [ ] Case-insensitive (toLowerCase)
- [ ] Estado vacío cuando no hay resultados

---

### Ejercicio 05: Lista Completa (8%)

| Nivel            | Puntos | Descripción                                          |
| ---------------- | ------ | ---------------------------------------------------- |
| **Excelente**    | 8      | Combina todo: lista, filtros, búsqueda, ordenamiento |
| **Bueno**        | 6.4    | Funciona pero falta alguna funcionalidad             |
| **Suficiente**   | 5.6    | Implementación parcial (2 de 4 funcionalidades)      |
| **Insuficiente** | <5.6   | Implementación incompleta o con errores              |

**Verificar**:

- [ ] Lista con keys correctas
- [ ] Filtro por categoría/tipo
- [ ] Búsqueda funcional
- [ ] Ordenamiento (al menos 2 opciones)
- [ ] Estados vacíos manejados

---

## 📦 Evidencia de Producto (30%)

### Proyecto: Catálogo Interactivo

#### Funcionalidad (15%)

| Nivel            | Puntos | Descripción                                    |
| ---------------- | ------ | ---------------------------------------------- |
| **Excelente**    | 15     | Todas las funcionalidades completas y sin bugs |
| **Bueno**        | 12     | Funciona con bugs menores                      |
| **Suficiente**   | 10.5   | Funcionalidades básicas, faltan algunas        |
| **Insuficiente** | <10.5  | No cumple requisitos mínimos                   |

**Requisitos funcionales**:

- [ ] Lista de elementos del dominio renderizada
- [ ] Búsqueda en tiempo real funcional
- [ ] Al menos 2 filtros implementados
- [ ] Ordenamiento con al menos 2 opciones
- [ ] Estado vacío cuando no hay resultados
- [ ] Estado de carga (loading) si usa API

---

#### Adaptación al Dominio (10%)

| Nivel            | Puntos | Descripción                                       |
| ---------------- | ------ | ------------------------------------------------- |
| **Excelente**    | 10     | Elementos, filtros y UI coherentes con el dominio |
| **Bueno**        | 8      | Mayormente coherente, algunos elementos genéricos |
| **Suficiente**   | 7      | Adaptación superficial, datos poco realistas      |
| **Insuficiente** | <7     | No adapta al dominio asignado                     |

**Verificar por dominio**:

- Biblioteca: Libros con título, autor, ISBN, género, disponibilidad
- Farmacia: Medicamentos con nombre, laboratorio, precio, categoría
- Gimnasio: Miembros con nombre, plan, fecha inscripción, estado
- etc.

---

#### Calidad del Código (5%)

| Nivel            | Puntos | Descripción                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| **Excelente**    | 5      | TypeScript estricto, comentarios educativos, código limpio |
| **Bueno**        | 4      | Bien tipado, pocos comentarios                             |
| **Suficiente**   | 3.5    | Algunos `any`, código mejorable                            |
| **Insuficiente** | <3.5   | Sin tipos, código desorganizado                            |

**Verificar**:

- [ ] Interfaces/types definidas para todos los datos
- [ ] Comentarios QUÉ/PARA/IMPACTO en funciones clave
- [ ] Nomenclatura: inglés (código) + español (comentarios)
- [ ] Keys correctas en TODAS las listas
- [ ] Componentes extraídos (no todo en un archivo)
- [ ] Sin console.log en código final

---

## 📝 Checklist de Entrega

### Estructura de Archivos

```
3-proyecto/
├── README.md              # Descripción del dominio
├── starter/
│   └── src/
│       ├── App.tsx
│       ├── components/
│       │   ├── ItemList.tsx
│       │   ├── ItemCard.tsx
│       │   ├── SearchBar.tsx
│       │   ├── FilterPanel.tsx
│       │   └── SortSelector.tsx
│       ├── types/
│       │   └── index.ts
│       └── data/
│           └── items.ts   # Datos de ejemplo del dominio
```

### Requisitos Técnicos

- [ ] TypeScript sin errores de compilación
- [ ] Keys únicas en todas las listas (no index)
- [ ] Al menos 10 elementos de datos de ejemplo
- [ ] Mínimo 5 componentes separados
- [ ] Estados vacíos con mensaje apropiado
- [ ] Búsqueda case-insensitive

---

## ⚠️ Causas de Reprobación Automática

1. **Copia de código** de otro aprendiz (dominio diferente pero mismo código)
2. **Dominio incorrecto**: No usar el dominio asignado
3. **Keys con index** en listas que se modifican
4. **Uso de `any`** en más de 2 lugares
5. **No funciona**: La aplicación no carga o tiene errores críticos
6. **Plagio**: Código copiado de internet sin adaptación

---

## 🎯 Cálculo de Nota Final

```
Nota Final = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)

Ejemplo:
- Conocimiento: 85/100
- Desempeño: 90/100
- Producto: 80/100

Nota = (85 × 0.30) + (90 × 0.40) + (80 × 0.30)
Nota = 25.5 + 36 + 24
Nota = 85.5 ✅ APROBADO
```

**Requisito**: Mínimo 70% en CADA tipo de evidencia para aprobar.

---

_Week 04 · Renderizado Condicional y Listas_
