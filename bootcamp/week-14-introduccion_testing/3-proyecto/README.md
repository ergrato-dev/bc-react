# Proyecto Semana 14: Testing Suite Básica

## 🎯 Objetivo

Crear una suite de tests completa para una aplicación de gestión de elementos aplicada a tu dominio asignado.

## ⏱️ Duración Estimada

2.5 horas

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

### Ejemplos de Adaptación

| Dominio     | Elemento    | Acciones                           |
| ----------- | ----------- | ---------------------------------- |
| Biblioteca  | Libro       | Agregar, marcar leído, eliminar    |
| Farmacia    | Medicamento | Agregar, marcar vendido, eliminar  |
| Gimnasio    | Miembro     | Agregar, marcar presente, eliminar |
| Restaurante | Platillo    | Agregar, marcar agotado, eliminar  |

---

## ✅ Requisitos Funcionales

### Componentes a Testear

1. **ElementForm**: Formulario para agregar elementos
   - Input con validación (mínimo 3 caracteres)
   - Mensaje de error cuando es inválido
   - Callback `onAdd` al enviar

2. **ElementCard**: Tarjeta individual de elemento
   - Muestra nombre del elemento
   - Checkbox para cambiar estado
   - Botón para eliminar
   - Callbacks `onToggle` y `onDelete`

3. **ElementList**: Lista de elementos
   - Mensaje cuando está vacía
   - Contador de estado (ej: "3 de 5 leídos")
   - Renderiza múltiples ElementCard

---

## 📦 Entregables

### Tests Requeridos (mínimo 15 tests)

#### ElementForm (5 tests)

- [ ] Renderiza input y botón
- [ ] Permite escribir en el input
- [ ] Muestra error con texto muy corto
- [ ] Llama onAdd con texto válido
- [ ] Limpia input después de agregar

#### ElementCard (5 tests)

- [ ] Renderiza nombre del elemento
- [ ] Checkbox refleja estado
- [ ] Llama onToggle al hacer click
- [ ] Llama onDelete al eliminar
- [ ] Tiene aria-label accesible

#### ElementList (5 tests)

- [ ] Muestra mensaje de lista vacía
- [ ] Renderiza todos los elementos
- [ ] Muestra contador correcto
- [ ] onToggle propaga id correcto
- [ ] onDelete propaga id correcto

---

## 🚀 Instrucciones

### Paso 1: Configurar el Proyecto

```bash
cd starter
pnpm install
```

### Paso 2: Adaptar a tu Dominio

1. Renombra los componentes según tu dominio:
   - `ElementForm` → `BookForm`, `MedicineForm`, etc.
   - `ElementCard` → `BookCard`, `MedicineCard`, etc.
   - `ElementList` → `BookList`, `MedicineList`, etc.

2. Actualiza los tipos en `types.ts`

3. Personaliza los textos y mensajes

### Paso 3: Escribir Tests

Crea los archivos de test:

- `src/components/[Element]Form.test.tsx`
- `src/components/[Element]Card.test.tsx`
- `src/components/[Element]List.test.tsx`

### Paso 4: Ejecutar Tests

```bash
# Ejecutar todos los tests
pnpm test

# Modo watch para desarrollo
pnpm test:watch

# Ver cobertura
pnpm test:coverage
```

---

## 📊 Criterios de Evaluación

### Conocimiento (30%)

- Uso correcto de matchers de Vitest
- Comprensión del patrón AAA

### Desempeño (40%)

- Queries accesibles (getByRole, getByLabelText)
- userEvent configurado correctamente
- Tests siguen buenas prácticas

### Producto (30%)

- Mínimo 15 tests pasando
- Componentes adaptados al dominio
- Código limpio y documentado

---

## 💡 Tips

### Organización de Tests

```typescript
describe('BookForm', () => {
  describe('renderizado', () => {
    test('muestra input de título', () => { ... });
    test('muestra botón agregar', () => { ... });
  });

  describe('validación', () => {
    test('muestra error si título muy corto', () => { ... });
  });

  describe('envío', () => {
    test('llama onAdd con datos válidos', () => { ... });
  });
});
```

### Datos de Prueba

```typescript
// test/fixtures.ts
export const mockBooks = [
  { id: 1, title: 'Clean Code', read: true },
  { id: 2, title: 'The Pragmatic Programmer', read: false },
];
```

---

## 🔗 Navegación

- ⬅️ [Ejercicios](../2-ejercicios/)
- ➡️ [Recursos](../4-recursos/)
- 🏠 [Inicio Semana 14](../README.md)
