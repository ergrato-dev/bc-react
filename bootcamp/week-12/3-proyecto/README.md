# 📦 Proyecto Semanal: Sistema de Cards Multi-Estrategia

## 🎯 Objetivo

Crear un componente `Card` implementado con las **tres estrategias de estilos** aprendidas esta semana, permitiendo comparar sus ventajas, desventajas y casos de uso.

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

Adapta el componente Card para mostrar elementos de tu dominio específico.

---

## ⏱️ Duración estimada

2.5 horas

---

## 📋 Requisitos Funcionales

### 1. Componente Card con CSS Modules

Crear `CardCSSModules.tsx`:

- ✅ Estilos en archivo `.module.css` separado
- ✅ Al menos 3 variantes de estilo (default, elevated, outlined)
- ✅ Uso de `clsx` para clases condicionales
- ✅ Header, body y footer opcionales

### 2. Componente Card con Styled Components

Crear `CardStyled.tsx`:

- ✅ Estilos definidos con tagged template literals
- ✅ Props dinámicas para variantes
- ✅ Uso de ThemeProvider con tema personalizado
- ✅ Componentes anidados (CardHeader, CardBody, CardFooter)

### 3. Componente Card con Tailwind CSS

Crear `CardTailwind.tsx`:

- ✅ Clases de utilidad de Tailwind
- ✅ Variantes con CVA (class-variance-authority)
- ✅ Responsive design con breakpoints
- ✅ Estados hover/focus con prefijos

### 4. Página comparativa

Crear `App.tsx`:

- ✅ Mostrar las 3 implementaciones lado a lado
- ✅ Tabs o secciones para cada estrategia
- ✅ Mismo contenido en las 3 cards para comparar

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio           | Card muestra... | Campos sugeridos                   |
| ----------------- | --------------- | ---------------------------------- |
| 📖 Biblioteca     | Libro           | title, author, isbn, available     |
| 💊 Farmacia       | Medicamento     | name, price, stock, prescription   |
| 🏋️ Gimnasio       | Miembro         | name, membership, expiresAt        |
| 🍽️ Restaurante    | Platillo        | name, price, category, image       |
| 🏥 Hospital       | Paciente        | name, room, doctor, status         |
| 🎥 Cine           | Película        | title, duration, rating, showtimes |
| ✈️ Agencia Viajes | Destino         | name, price, dates, includes       |
| 🏎️ Concesionario  | Vehículo        | brand, model, year, price          |

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── css-modules/
│   │   ├── Card.tsx
│   │   ├── Card.module.css
│   │   └── index.ts
│   ├── styled/
│   │   ├── Card.tsx
│   │   ├── theme.ts
│   │   └── index.ts
│   └── tailwind/
│       ├── Card.tsx
│       ├── variants.ts
│       └── index.ts
├── App.tsx
├── main.tsx
└── index.css (Tailwind directives)
```

---

## 🛠️ Entregables

1. **Código funcional** con las 3 implementaciones
2. **README.md** explicando:
   - Tu dominio asignado
   - Qué estrategia preferiste y por qué
   - Comparativa personal de las 3 estrategias
3. **Captura de pantalla** mostrando las 3 cards

---

## ✅ Criterios de Evaluación

### CSS Modules (30%)

- [ ] Estilos correctamente aislados
- [ ] Variantes implementadas con clases
- [ ] Uso correcto de `clsx`

### Styled Components (30%)

- [ ] Props dinámicas funcionando
- [ ] Tema aplicado correctamente
- [ ] Componentes bien estructurados

### Tailwind CSS (30%)

- [ ] CVA configurado correctamente
- [ ] Responsive design implementado
- [ ] Clases organizadas y legibles

### General (10%)

- [ ] Código TypeScript tipado correctamente
- [ ] Adaptación coherente al dominio asignado
- [ ] Documentación clara

---

## 📚 Recursos

- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Styled Components Docs](https://styled-components.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [CVA Documentation](https://cva.style/docs)
