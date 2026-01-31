# 📖 Glosario - Semana 01: TypeScript Fundamentals

## 🎯 Objetivo

Definiciones claras y concisas de términos técnicos clave de la Semana 01.

---

## 📚 Términos (A-Z)

### A

#### **Anotación de Tipo (Type Annotation)**

Declaración explícita del tipo de una variable, parámetro o retorno de función.

```typescript
const name: string = 'Ana'; // Anotación explícita
```

---

#### **Any**

Tipo que desactiva la verificación de tipos. Evítalo en código de producción.

```typescript
let value: any = 'hello';
value = 42; // ✅ Válido pero peligroso
```

---

#### **Array Tipado**

Array que solo acepta elementos de un tipo específico.

```typescript
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ['Ana', 'Carlos'];
```

---

### C

#### **Compilador (Compiler)**

Herramienta que convierte código TypeScript (.ts) a JavaScript (.js).

```bash
tsc index.ts  # Compila a index.js
```

---

### E

#### **Extends**

Palabra clave para extender interfaces o restringir tipos genéricos.

```typescript
interface Admin extends User {
  permissions: string[];
}

function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

---

### G

#### **Generic (Genérico)**

Tipo parametrizado que permite reutilizar código con diferentes tipos.

```typescript
function identity<T>(value: T): T {
  return value;
}

identity<string>('hello');
identity<number>(42);
```

---

### I

#### **Inferencia de Tipos (Type Inference)**

Capacidad de TypeScript para deducir tipos automáticamente.

```typescript
const name = 'Ana'; // TypeScript infiere: string
const age = 25; // TypeScript infiere: number
```

---

#### **Interface**

Define la forma de un objeto. Preferida para props de React y objetos.

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Opcional
}
```

---

### L

#### **Literal Type**

Tipo que solo acepta valores exactos específicos.

```typescript
type Status = 'active' | 'inactive' | 'archived';
const status: Status = 'active'; // ✅
// const wrong: Status = 'deleted'; // ❌ Error
```

---

### N

#### **Narrowing**

Técnica para refinar tipos dentro de bloques condicionales.

```typescript
function process(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // TypeScript sabe que es string
  }
}
```

---

### O

#### **Omit<T, K>**

Utility type que crea un tipo excluyendo propiedades específicas.

```typescript
interface User {
  id: number;
  name: string;
  password: string;
}

type SafeUser = Omit<User, 'password'>;
// SafeUser solo tiene id y name
```

---

### P

#### **Parámetro Opcional**

Parámetro de función que puede omitirse usando `?`.

```typescript
function greet(name: string, title?: string) {
  return title ? `${title} ${name}` : name;
}

greet('Ana'); // ✅ Válido
greet('Ana', 'Dr.'); // ✅ También válido
```

---

#### **Partial<T>**

Utility type que hace todas las propiedades opcionales.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>;
// Todas las props son opcionales
```

---

#### **Pick<T, K>**

Utility type que selecciona solo propiedades específicas.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<User, 'id' | 'name'>;
// Solo id y name
```

---

### R

#### **Record<K, T>**

Utility type para crear objetos-mapa con claves y valores tipados.

```typescript
type UserMap = Record<string, User>;

const users: UserMap = {
  user1: { id: 1, name: 'Ana' },
  user2: { id: 2, name: 'Carlos' },
};
```

---

#### **Required<T>**

Utility type que hace todas las propiedades obligatorias.

```typescript
interface Config {
  apiUrl?: string;
  timeout?: number;
}

type RequiredConfig = Required<Config>;
// Todas las props son obligatorias
```

---

### T

#### **TSConfig**

Archivo de configuración de TypeScript (`tsconfig.json`).

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true
  }
}
```

---

#### **Type**

Alias de tipo. Preferido para unions, intersections y utility types.

```typescript
type ID = string | number;
type Status = 'active' | 'inactive';
type Point = { x: number; y: number };
```

---

#### **Type Assertion**

Indica a TypeScript que confíe en el tipo que declaras.

```typescript
const element = document.getElementById('app') as HTMLDivElement;
```

---

### U

#### **Union Type**

Tipo que puede ser uno de varios tipos especificados.

```typescript
type Result = string | number | boolean;

let value: Result = 'hello';
value = 42; // ✅ Válido
value = true; // ✅ También válido
```

---

#### **Unknown**

Tipo seguro para valores desconocidos. Mejor que `any`.

```typescript
let value: unknown = 'hello';

// Debes verificar el tipo antes de usar
if (typeof value === 'string') {
  console.log(value.toUpperCase()); // ✅ Seguro
}
```

---

#### **Utility Types**

Tipos predefinidos de TypeScript para transformar tipos existentes.

- `Partial<T>`: Hace props opcionales
- `Required<T>`: Hace props obligatorias
- `Pick<T, K>`: Selecciona props
- `Omit<T, K>`: Excluye props
- `Record<K, T>`: Crea mapas tipados

---

### V

#### **Void**

Tipo de retorno para funciones que no retornan nada.

```typescript
function log(message: string): void {
  console.log(message);
  // No retorna nada
}
```

---

## 🔗 Recursos Relacionados

- [TypeScript Handbook - Glossary](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Teoría Semana 01](../1-teoria/)

---

## 🔗 Navegación

| ⬅️ Recursos                  |      🏠 Semana 01      |
| :--------------------------- | :--------------------: |
| [4-recursos](../4-recursos/) | [README](../README.md) |
