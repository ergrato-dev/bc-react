# 📋 Rúbrica de Evaluación - Semana 13

## Componentes UI, Animaciones y Theming

---

## 📊 Distribución de Calificación

| Tipo de Evidencia | Porcentaje | Puntos      |
| ----------------- | ---------- | ----------- |
| 🧠 Conocimiento   | 30%        | 30 pts      |
| 💪 Desempeño      | 40%        | 40 pts      |
| 📦 Producto       | 30%        | 30 pts      |
| **Total**         | **100%**   | **100 pts** |

---

## 🧠 Evidencia de Conocimiento (30 pts)

### Evaluación Teórica

| Criterio                | Excelente (10)                                                   | Bueno (7-9)                                            | Suficiente (5-6)                             | Insuficiente (<5)                |
| ----------------------- | ---------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------- | -------------------------------- |
| **Headless Components** | Explica beneficios, accesibilidad y patrones compound components | Entiende uso básico y diferencia con styled components | Conoce concepto pero confunde implementación | No comprende el concepto         |
| **Framer Motion**       | Domina motion values, variants, gestures y AnimatePresence       | Usa animaciones básicas y variants                     | Aplica solo animate prop                     | No puede implementar animaciones |
| **Theming**             | Implementa sistema completo con CSS vars y context               | Crea dark/light mode funcional                         | Aplica temas estáticos                       | No logra implementar theming     |

---

## 💪 Evidencia de Desempeño (40 pts)

### Ejercicio 1: Modal con Radix Dialog (10 pts)

| Aspecto        | Puntos | Criterio                                        |
| -------------- | ------ | ----------------------------------------------- |
| Implementación | 4      | Dialog funcional con trigger, overlay y content |
| Accesibilidad  | 3      | Focus trap, escape key, aria attributes         |
| Estilos        | 2      | Animaciones de entrada/salida suaves            |
| TypeScript     | 1      | Props tipados correctamente                     |

### Ejercicio 2: Animaciones Framer Motion (10 pts)

| Aspecto             | Puntos | Criterio                                |
| ------------------- | ------ | --------------------------------------- |
| Animaciones básicas | 3      | initial, animate, exit funcionando      |
| Variants            | 3      | Sistema de variants para estados        |
| Gestures            | 2      | whileHover, whileTap implementados      |
| AnimatePresence     | 2      | Animaciones de entrada/salida en listas |

### Ejercicio 3: Theme Switcher (10 pts)

| Aspecto       | Puntos | Criterio                                |
| ------------- | ------ | --------------------------------------- |
| Contexto      | 3      | ThemeProvider con useContext funcional  |
| Persistencia  | 2      | Guarda preferencia en localStorage      |
| CSS Variables | 3      | Tokens definidos como custom properties |
| Media Query   | 2      | Respeta prefers-color-scheme inicial    |

### Ejercicio 4: Design Tokens (10 pts)

| Aspecto        | Puntos | Criterio                                         |
| -------------- | ------ | ------------------------------------------------ |
| Estructura     | 3      | Tokens organizados (colors, spacing, typography) |
| Implementación | 3      | Variables CSS o Tailwind config correcto         |
| Escalabilidad  | 2      | Sistema extensible y consistente                 |
| Documentación  | 2      | Comentarios explicando uso de tokens             |

---

## 📦 Evidencia de Producto (30 pts)

### Proyecto: Mini Design System

#### Componentes Requeridos (15 pts)

| Componente   | Puntos | Criterio                                                |
| ------------ | ------ | ------------------------------------------------------- |
| Button       | 3      | Variantes (primary, secondary, ghost), tamaños, estados |
| Card         | 3      | Composable (Header, Body, Footer), variantes            |
| Dialog/Modal | 3      | Accesible, animado, composable                          |
| Input        | 3      | Estados (error, disabled), labels, helper text          |
| Badge/Tag    | 3      | Variantes de color y tamaño                             |

#### Funcionalidades Transversales (10 pts)

| Funcionalidad   | Puntos | Criterio                                 |
| --------------- | ------ | ---------------------------------------- |
| Dark/Light Mode | 3      | Toggle funcional con transición suave    |
| Animaciones     | 3      | Consistentes en hover, focus, mount      |
| Design Tokens   | 2      | Sistema coherente de colores y espaciado |
| TypeScript      | 2      | Todos los componentes tipados            |

#### Calidad General (5 pts)

| Aspecto       | Puntos | Criterio                            |
| ------------- | ------ | ----------------------------------- |
| Accesibilidad | 2      | Navegación por teclado, ARIA labels |
| Consistencia  | 2      | Estilos uniformes entre componentes |
| Documentación | 1      | README con uso de cada componente   |

---

## ✅ Checklist de Entrega

### Ejercicios

- [ ] Ejercicio 1: Modal con Radix accesible
- [ ] Ejercicio 2: Animaciones con variants
- [ ] Ejercicio 3: Theme switcher persistente
- [ ] Ejercicio 4: Tokens implementados

### Proyecto

- [ ] Mínimo 5 componentes del sistema
- [ ] Soporte dark/light mode
- [ ] Animaciones con Framer Motion
- [ ] Props tipados con TypeScript
- [ ] Accesibilidad básica (a11y)

### Código

- [ ] Nomenclatura en inglés
- [ ] Comentarios en español
- [ ] Sin errores de TypeScript
- [ ] Código limpio y organizado

---

## 🎯 Niveles de Logro

| Nivel            | Puntaje | Descripción                                                  |
| ---------------- | ------- | ------------------------------------------------------------ |
| 🏆 Excelente     | 90-100  | Domina headless UI, animaciones avanzadas y theming completo |
| ✅ Satisfactorio | 70-89   | Implementa componentes funcionales con theming básico        |
| ⚠️ En desarrollo | 50-69   | Componentes básicos, falta integración completa              |
| ❌ Insuficiente  | <50     | No logra implementar sistema coherente                       |

---

## 📝 Criterios Específicos por Dominio

El proyecto debe adaptarse al dominio asignado:

| Dominio        | Adaptación de Componentes                     |
| -------------- | --------------------------------------------- |
| 📖 Biblioteca  | BookCard, LoanDialog, StatusBadge             |
| 💊 Farmacia    | MedicineCard, PrescriptionModal, StockBadge   |
| 🏋️ Gimnasio    | MemberCard, ClassDialog, StatusBadge          |
| 🍽️ Restaurante | DishCard, OrderModal, CategoryBadge           |
| 🏥 Hospital    | PatientCard, AppointmentDialog, PriorityBadge |

---

## 🔗 Referencias

- [📚 Contenido Teórico](1-teoria/)
- [💻 Ejercicios](2-ejercicios/)
- [🎯 Proyecto](3-proyecto/)
- [📖 Glosario](5-glosario/)

---

_Rúbrica Semana 13 · Etapa 4: Styling y UI (2/2) · Febrero 2026_
