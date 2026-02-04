# Ejercicio 04: Testing de Componentes React

## 🎯 Objetivo

Aplicar todos los conceptos aprendidos para testear componentes React completos.

## ⏱️ Duración Estimada

45 minutos

---

## 📋 Descripción

En este ejercicio aprenderás a:

1. Testear componentes con props
2. Testear componentes con estado
3. Testear callbacks
4. Testear listas y renderizado condicional
5. Usar `within` para queries dentro de elementos

---

## 🚀 Instrucciones

### Paso 1: Configurar el Proyecto

```bash
cd starter
pnpm install
```

### Paso 2: Ejecutar Tests

```bash
pnpm test
```

### Paso 3: Completar los Tests

Abre `src/components/ItemList.test.tsx` y descomenta cada sección.

---

## 📚 Patrones de Testing

### Testing de Props

```typescript
test('renderiza con props', () => {
  render(<Component title="Hello" count={5} />);

  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

### Testing de Callbacks

```typescript
test('llama callback al interactuar', async () => {
  const handleClick = vi.fn();
  const user = userEvent.setup();

  render(<Button onClick={handleClick} />);
  await user.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Testing de Listas

```typescript
test('renderiza todos los items', () => {
  render(<List items={['a', 'b', 'c']} />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
```

### Usando within

```typescript
test('busca dentro de un elemento específico', () => {
  render(<Card title="Test" />);

  const card = screen.getByRole('article');
  expect(within(card).getByRole('heading')).toHaveTextContent('Test');
});
```

---

## ✅ Criterios de Éxito

- [ ] Todos los tests pasan
- [ ] Pruebas cubren props, estado y callbacks
- [ ] Usas queries accesibles
- [ ] Tests son legibles y siguen AAA

---

## 🔗 Navegación

- ⬅️ [Ejercicio 03: User Events](../ejercicio-03-user-events/)
- ➡️ [Proyecto](../../3-proyecto/)
- 🏠 [Inicio Semana 14](../../README.md)
