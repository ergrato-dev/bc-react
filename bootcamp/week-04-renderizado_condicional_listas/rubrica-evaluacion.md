# 📊 Rúbrica de Evaluación - Week 04

## Renderizado Condicional y Listas

---

## 📋 Resumen de Evaluación

| Tipo de Evidencia | Peso | Descripción                    |
| ----------------- | ---- | ------------------------------ |
| **Proyecto** 📦   | 100% | Proyecto de catálogo funcional |

**Nota mínima aprobatoria**: 70% en el proyecto

---

## 📚 Recursos de Aprendizaje (No Evaluados)

La teoría y los ejercicios son materiales de preparación para ayudarte a completar el proyecto exitosamente:

- **Teoría**: Conceptos de renderizado condicional, listas, keys y filtrado
- **Ejercicios**: Práctica guiada de los conceptos antes de aplicarlos al proyecto

> 💡 Se recomienda completar la teoría y los ejercicios antes de iniciar el proyecto, pero no son entregables evaluados.

---

## 📦 Proyecto (100%)

### Catálogo Interactivo con Filtros y Búsqueda

#### Funcionalidad (40%)

| Nivel            | Puntos | Descripción                                    |
| ---------------- | ------ | ---------------------------------------------- |
| **Excelente**    | 40     | Todas las funcionalidades completas y sin bugs |
| **Bueno**        | 32     | Funciona con bugs menores                      |
| **Suficiente**   | 28     | Funcionalidades básicas, faltan algunas        |
| **Insuficiente** | <28    | No cumple requisitos mínimos                   |

**Requisitos funcionales**:

- [ ] Lista de elementos del dominio renderizada
- [ ] Búsqueda en tiempo real funcional
- [ ] Al menos 2 filtros implementados
- [ ] Ordenamiento con al menos 2 opciones
- [ ] Estado vacío cuando no hay resultados
- [ ] Estado de carga (loading) si usa API

---

#### Adaptación al Dominio (35%)

| Nivel            | Puntos | Descripción                                       |
| ---------------- | ------ | ------------------------------------------------- |
| **Excelente**    | 35     | Elementos, filtros y UI coherentes con el dominio |
| **Bueno**        | 28     | Mayormente coherente, algunos elementos genéricos |
| **Suficiente**   | 24.5   | Adaptación superficial, datos poco realistas      |
| **Insuficiente** | <24.5  | No adapta al dominio asignado                     |

**Verificar por dominio**:

- Biblioteca: Libros con título, autor, ISBN, género, disponibilidad
- Farmacia: Medicamentos con nombre, laboratorio, precio, categoría
- Gimnasio: Miembros con nombre, plan, fecha inscripción, estado
- etc.

---

#### Calidad del Código (25%)

| Nivel            | Puntos | Descripción                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| **Excelente**    | 25     | TypeScript estricto, comentarios educativos, código limpio |
| **Bueno**        | 20     | Bien tipado, pocos comentarios                             |
| **Suficiente**   | 17.5   | Algunos `any`, código mejorable                            |
| **Insuficiente** | <17.5  | Sin tipos, código desorganizado                            |

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
Nota Final = Funcionalidad (40%) + Adaptación al Dominio (35%) + Calidad del Código (25%)

Ejemplo:
- Funcionalidad: 36/40
- Adaptación al Dominio: 30/35
- Calidad del Código: 22/25

Nota = 36 + 30 + 22
Nota = 88 ✅ APROBADO
```

**Requisito**: Mínimo 70% en el proyecto para aprobar.

---

_Week 04 · Renderizado Condicional y Listas_
