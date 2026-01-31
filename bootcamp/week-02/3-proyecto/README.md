# 🎯 Proyecto Semanal: Sistema de Gestión CRUD

## 📋 Tu Dominio Asignado

**Dominio**: _(El instructor te asignará tu dominio único)_

Este proyecto debe adaptarse al dominio que te asigne el instructor. Cada aprendiz trabajará sobre un dominio diferente para garantizar implementaciones originales.

### 🏛️ Ejemplos de Dominios

Algunos dominios que podrían asignarse:

- 📖 **Biblioteca**: Gestionar libros (título, autor, ISBN, disponibilidad)
- 💊 **Farmacia**: Gestionar medicamentos (nombre, precio, stock, prescripción)
- 🏋️ **Gimnasio**: Gestionar miembros (nombre, plan, fecha inicio, estado)
- 🏫 **Escuela**: Gestionar estudiantes (nombre, grado, promedio, activo)
- 🏬 **Tienda de Mascotas**: Gestionar mascotas (nombre, especie, edad, precio)
- 🏪 **Restaurante**: Gestionar platillos (nombre, categoría, precio, disponible)
- 🏭 **Banco**: Gestionar cuentas (número, titular, saldo, tipo)
- 🚕 **Agencia de Taxis**: Gestionar conductores (nombre, licencia, vehículo, disponible)
- 🏥 **Hospital**: Gestionar pacientes (nombre, edad, diagnóstico, habitación)
- 🎥 **Cine**: Gestionar películas (título, género, duración, clasificación)
- 🏞️ **Hotel**: Gestionar habitaciones (número, tipo, precio, ocupada)
- ✈️ **Agencia de Viajes**: Gestionar destinos (ciudad, país, precio, disponible)

**⚠️ IMPORTANTE**: No copies implementaciones de otros compañeros. Tu implementación debe ser coherente con TU dominio asignado.

---

## 🎯 Objetivos del Proyecto

Construir una aplicación React completa que demuestre:

- ✅ Componentes funcionales con TypeScript
- ✅ Props tipados con interfaces
- ✅ Estado local con `useState`
- ✅ Renderizado de listas con `.map()`
- ✅ Manejo de eventos (onClick, onChange, onSubmit)
- ✅ Formularios controlados
- ✅ Operaciones CRUD (Create, Read, Update, Delete)
- ✅ Renderizado condicional
- ✅ Composición de componentes
- ✅ Inmutabilidad en operaciones de estado

---

## 📚 Requisitos Funcionales (Adaptables a tu Dominio)

Tu aplicación debe permitir:

### 1. **Visualizar Lista de Elementos** 📋

- Mostrar todos los elementos en tarjetas o tabla
- Cada elemento debe mostrar sus propiedades principales
- Indicador visual de estado (si aplica: activo/inactivo, disponible/no disponible)

### 2. **Agregar Nuevos Elementos** ➕

- Formulario con todos los campos necesarios
- Validación básica de campos requeridos
- Limpiar formulario después de agregar

### 3. **Eliminar Elementos** 🗑️

- Botón de eliminar en cada elemento
- Actualización inmediata de la lista

### 4. **Actualizar Elementos** ✏️

- Editar propiedades de elementos existentes
- Pre-llenar formulario con datos actuales
- Botón para cancelar edición

**Nota**: Las funcionalidades de **búsqueda/filtrado** y **estadísticas** se implementarán en semanas posteriores para mantener el proyecto dentro de las 2-2.5 horas de dedicación.

---

## 🏗️ Estructura de Componentes Requerida

```
App (componente principal con estado)
├── Header (título y descripción del dominio)
├── ItemForm (formulario agregar/editar)
│   ├── Input fields tipados
│   ├── Submit button
│   └── Cancel button (al editar)
├── ItemList (lista de elementos)
│   └── ItemCard × N (tarjeta individual)
│       ├── Información del elemento
│       ├── Botón editar
│       └── Botón eliminar
```

**Total**: 4 componentes principales (Header, ItemForm, ItemList, ItemCard)

**Adapta esta estructura a tu dominio**:

- `ItemCard` → `BookCard`, `MedicineCard`, `MemberCard`, etc.
- `ItemList` → `BookList`, `MedicineList`, `MemberList`, etc.
- `ItemForm` → `BookForm`, `MedicineForm`, `MemberForm`, etc.
- Props y state según las propiedades de tu dominio

---

## 💡 Ejemplos de Adaptación por Dominio

### Ejemplo 1: Biblioteca 📖

```typescript
interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  available: boolean;
}

// Componentes: Header, BookForm, BookList, BookCard
// CRUD básico: agregar libro, editar libro, eliminar libro, listar libros
```

### Ejemplo 2: Farmacia 💊

```typescript
interface Medicine {
  id: number;
  name: string;
  price: number;
  stock: number;
  requiresPrescription: boolean;
}

// Componentes: Header, MedicineForm, MedicineList, MedicineCard
// CRUD básico: agregar medicamento, editar, eliminar, listar
```

### Ejemplo 3: Gimnasio 🏋️

```typescript
interface Member {
  id: number;
  name: string;
  email: string;
  plan: 'básico' | 'premium' | 'vip';
  startDate: string;
  active: boolean;
}

// Componentes: Header, MemberForm, MemberList, MemberCard
// CRUD básico: agregar miembro, editar, eliminar, listar
```

**Nota**: Las features de búsqueda, filtros y estadísticas se agregarán en semanas posteriores.

---

## 🛠️ Requisitos Técnicos

### TypeScript

- ✅ Interfaces para todas las entidades principales
- ✅ Tipos explícitos en props de componentes
- ✅ Tipos en funciones (parámetros y retorno)
- ✅ No usar `any`

### React

- ✅ Componentes funcionales con `React.FC` o arrow functions
- ✅ Props tipados con interfaces
- ✅ `useState` para estado local
- ✅ Keys únicas en listas (usar `id`)
- ✅ Eventos sintéticos tipados
- ✅ Formularios controlados (value + onChange)

### Inmutabilidad

- ✅ Usar spread operator para agregar: `[...items, newItem]`
- ✅ Usar `filter()` para eliminar: `items.filter(i => i.id !== id)`
- ✅ Usar `map()` para actualizar: `items.map(i => i.id === id ? {...i, ...updates} : i)`
- ❌ NO usar `push()`, `splice()`, o mutar directamente el estado

### Validación

- ✅ Validar campos requeridos antes de agregar/actualizar
- ✅ Validar tipos de datos (números positivos, emails válidos, etc.)
- ✅ Feedback al usuario (alerts, mensajes, estilos)

---

## 📦 Estructura de Archivos

```
3-proyecto/
├── README.md                          # Este archivo
├── package.json                        # Dependencias
├── tsconfig.json                       # Configuración TypeScript
├── vite.config.ts                      # Configuración Vite
├── index.html                          # HTML base
├── src/
│   ├── main.tsx                        # Punto de entrada
│   ├── App.tsx                         # Componente principal
│   ├── types/
│   │   └── index.ts                    # Interfaces y tipos
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ItemCard.tsx                # Adaptar a tu dominio
│   │   ├── ItemList.tsx                # Adaptar a tu dominio
│   │   ├── ItemForm.tsx                # Adaptar a tu dominio
│   │   ├── SearchBar.tsx
│   │   └── Stats.tsx
│   └── styles/
│       └── App.css                     # Estilos globales
```

**Renombra archivos según tu dominio**:

- `ItemCard.tsx` → `BookCard.tsx`, `MedicineCard.tsx`, etc.
- `ItemList.tsx` → `BookList.tsx`, `MedicineList.tsx`, etc.

---

## ✅ Checklist de Entregables

### Funcionalidad

- [ ] Visualizar lista de elementos con todas sus propiedades
- [ ] Agregar nuevos elementos con formulario
- [ ] Eliminar elementos existentes
- [ ] Editar elementos existentes
- [ ] Buscar/filtrar elementos
- [ ] Mostrar contador y estadísticas
- [ ] Validación de datos en formularios
- [ ] Feedback visual al usuario

### Código

- [ ] TypeScript estricto sin errores
- [ ] Todas las interfaces definidas
- [ ] Componentes bien separados y reutilizables
- [ ] Props tipados correctamente
- [ ] Estado manejado con `useState`
- [ ] Inmutabilidad en todas las operaciones
- [ ] Keys únicas en listas
- [ ] Código comentado (explicaciones clave)

### UI/UX

- [ ] Diseño limpio y organizado
- [ ] Responsive (se ve bien en móvil y desktop)
- [ ] Formularios intuitivos
- [ ] Botones con hover states
- [ ] Estados vacíos manejados (mensaje cuando no hay elementos)
- [ ] Indicadores visuales claros

### Documentación

- [ ] README actualizado con descripción de TU dominio
- [ ] Instrucciones de instalación y ejecución
- [ ] Screenshots o GIF de la app funcionando
- [ ] Decisiones de diseño explicadas

---

## 🚀 Instrucciones de Inicio

### 1. Instalar Dependencias

```bash
cd bootcamp/week-02/3-proyecto
pnpm install
```

### 2. Ejecutar en Desarrollo

```bash
pnpm dev
```

### 3. Build para Producción

```bash
pnpm build
```

---

## 💡 Tips de Implementación

### Estructura de Estado

```typescript
// Estado principal: array de elementos
const [items, setItems] = useState<Item[]>([]);

// Estado del formulario
const [formData, setFormData] = useState<Item>({...});

// Estado de búsqueda/filtro
const [searchTerm, setSearchTerm] = useState<string>('');
const [filter, setFilter] = useState<string>('all');

// Estado de edición
const [editingId, setEditingId] = useState<number | null>(null);
```

### Operaciones CRUD

```typescript
// Create
const addItem = (item: Item) => {
  setItems([...items, { ...item, id: Date.now() }]);
};

// Read
const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()),
);

// Update
const updateItem = (id: number, updates: Partial<Item>) => {
  setItems(
    items.map((item) => (item.id === id ? { ...item, ...updates } : item)),
  );
};

// Delete
const deleteItem = (id: number) => {
  setItems(items.filter((item) => item.id !== id));
};
```

### Formulario Controlado

```typescript
const [formData, setFormData] = useState<Item>({ ...initialState });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Validar
  if (!formData.name.trim()) {
    alert('Campo requerido');
    return;
  }
  // Agregar o actualizar
  editingId ? updateItem(editingId, formData) : addItem(formData);
  // Limpiar
  setFormData({ ...initialState });
  setEditingId(null);
};
```

---

## 📚 Recursos de Referencia

- [React Docs - Thinking in React](https://react.dev/learn/thinking-in-react)
- [React Docs - Managing State](https://react.dev/learn/managing-state)
- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 🎨 Inspiración de Diseño (Opcional)

Puedes usar estas librerías para mejorar el diseño (opcional):

```bash
# Tailwind CSS
pnpm add -D tailwindcss postcss autoprefixer

# CSS Modules (ya incluido en Vite)
# Usa archivos .module.css

# Iconos
pnpm add lucide-react
```

---

## 🔗 Navegación

- [← Volver a Week 02](../README.md)
- [📖 Teoría: Fundamentos de React](../1-teoria/README.md)
- [💪 Ejercicios](../2-ejercicios/README.md)
- [🎓 Rúbrica de Evaluación](../rubrica-evaluacion.md)

---

_Última actualización: Enero 2026_
