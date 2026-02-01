# Proyecto Semana 04: Catálogo Interactivo con Filtros y Búsqueda

## 🎯 Objetivo

Crear un catálogo interactivo que implemente renderizado condicional, listas con keys, filtrado, ordenamiento y búsqueda en tiempo real.

---

## 🏛️ Tu Dominio Asignado

**Dominio**: _El instructor te asignará tu dominio único_

### Ejemplos de Adaptación

| Dominio          | Entidad Principal | Propiedades                                    |
| ---------------- | ----------------- | ---------------------------------------------- |
| 📖 Biblioteca    | Libro             | título, autor, género, año, disponible         |
| 💊 Farmacia      | Medicamento       | nombre, laboratorio, categoría, precio, receta |
| 🏋️ Gimnasio      | Clase             | nombre, instructor, horario, nivel, cupos      |
| 🍽️ Restaurante   | Platillo          | nombre, categoría, precio, vegetariano, tiempo |
| 🏥 Hospital      | Doctor            | nombre, especialidad, turno, disponible        |
| 🚗 Concesionario | Vehículo          | marca, modelo, año, precio, tipo               |

---

## ✅ Requisitos Funcionales

### 1. Renderizado Condicional

- [ ] Mostrar estado de carga (loading)
- [ ] Mostrar mensaje de error si hay problemas
- [ ] Mostrar estado vacío si no hay datos
- [ ] Mostrar contador de resultados
- [ ] Badges/etiquetas condicionales (ej: "Disponible", "Agotado")

### 2. Listas con Keys

- [ ] Renderizar lista de elementos con `.map()`
- [ ] Usar `id` único como key (no index)
- [ ] Extraer componente de tarjeta/ítem
- [ ] Manejar acciones por ítem (ver detalles, eliminar)

### 3. Filtrado

- [ ] Filtro por categoría/tipo
- [ ] Filtro booleano (ej: solo disponibles)
- [ ] Filtro por rango (ej: precio mínimo/máximo)
- [ ] Botón para limpiar filtros

### 4. Ordenamiento

- [ ] Selector de criterio de orden
- [ ] Al menos 3 opciones de orden
- [ ] Orden ascendente/descendente
- [ ] No mutar array original

### 5. Búsqueda

- [ ] Input de búsqueda en tiempo real
- [ ] Búsqueda case-insensitive
- [ ] Búsqueda en múltiples campos
- [ ] Botón para limpiar búsqueda

---

## 📂 Estructura del Proyecto

```
proyecto-catalogo/
├── src/
│   ├── components/
│   │   ├── Catalog.tsx           # Componente principal
│   │   ├── ItemCard.tsx          # Tarjeta de elemento
│   │   ├── ItemList.tsx          # Lista de elementos
│   │   ├── SearchBar.tsx         # Barra de búsqueda
│   │   ├── FilterPanel.tsx       # Panel de filtros
│   │   ├── SortSelector.tsx      # Selector de orden
│   │   ├── EmptyState.tsx        # Estado vacío
│   │   └── LoadingSpinner.tsx    # Indicador de carga
│   ├── types/
│   │   └── index.ts              # Interfaces y tipos
│   ├── data/
│   │   └── items.ts              # Datos mock
│   ├── hooks/
│   │   └── useDebounce.ts        # Hook de debounce
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

---

## 🛠️ Tecnologías

- React 18+
- TypeScript
- Vite
- CSS (o Tailwind opcional)

---

## 📋 Criterios de Evaluación

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| Renderizado condicional correcto        | 15%    |
| Keys únicas y extracción de componentes | 15%    |
| Filtrado funcional                      | 20%    |
| Ordenamiento sin mutación               | 15%    |
| Búsqueda en tiempo real                 | 15%    |
| Adaptación al dominio                   | 10%    |
| Calidad del código                      | 10%    |

---

## 🚀 Cómo Empezar

1. Copia la carpeta `starter/` a tu workspace
2. Instala dependencias: `pnpm install`
3. Inicia el servidor: `pnpm dev`
4. Adapta los tipos e interfaces a tu dominio
5. Implementa cada TODO siguiendo los comentarios

---

## 📝 Entregables

1. Código fuente completo
2. README.md con:
   - Descripción de tu dominio
   - Capturas de pantalla
   - Instrucciones de ejecución
3. Sin errores en consola
4. Tipado completo (sin `any`)

---

## ⏱️ Tiempo Estimado

- **Desarrollo**: 2-2.5 horas
- **Revisión y mejoras**: 30 minutos

---

_¡Buena suerte! Recuerda adaptar todos los nombres, textos y lógica a tu dominio asignado._
