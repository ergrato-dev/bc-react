# 📋 Rúbrica de Evaluación - Semana 05

## Composición de Componentes y Context API

---

## 🎯 Competencias a Evaluar

| Competencia             | Descripción                                         |
| ----------------------- | --------------------------------------------------- |
| **Composición**         | Crear componentes flexibles usando children y slots |
| **Compound Components** | Implementar patrones de componentes compuestos      |
| **Context API**         | Usar Context para compartir estado global           |
| **TypeScript**          | Tipar correctamente providers y consumers           |

---

## 📊 Criterios de Evaluación

### 1. Conocimiento (30%) 🧠

| Criterio                    | Excelente (100%)                                      | Bueno (80%)                          | Suficiente (70%)           | Insuficiente (<70%)               |
| --------------------------- | ----------------------------------------------------- | ------------------------------------ | -------------------------- | --------------------------------- |
| **Composición vs Herencia** | Explica claramente por qué React favorece composición | Entiende las diferencias principales | Conoce conceptos básicos   | Confunde composición con herencia |
| **Children y ReactNode**    | Domina tipado de children y sus variantes             | Usa children correctamente           | Implementa children básico | No entiende el prop children      |
| **Context API**             | Explica cuándo usar Context vs props                  | Entiende Provider/Consumer           | Sabe crear contextos       | No comprende el flujo de Context  |
| **Patrones**                | Identifica y aplica múltiples patrones                | Aplica compound components           | Conoce patrones básicos    | No reconoce patrones              |

### 2. Desempeño (40%) 💪

| Criterio                     | Excelente (100%)                                  | Bueno (80%)                        | Suficiente (70%)              | Insuficiente (<70%)            |
| ---------------------------- | ------------------------------------------------- | ---------------------------------- | ----------------------------- | ------------------------------ |
| **Componentes con children** | Crea componentes genéricos y reutilizables        | Implementa children correctamente  | Usa children en casos simples | No sabe pasar children         |
| **Slots pattern**            | Implementa slots tipados complejos                | Crea slots con TypeScript          | Usa slots básicos             | No implementa slots            |
| **Compound Components**      | Crea APIs elegantes con componentes compuestos    | Implementa el patrón correctamente | Crea compuestos básicos       | No logra implementar el patrón |
| **Context con TypeScript**   | Providers tipados con valores por defecto seguros | Crea contextos tipados             | Implementa contextos básicos  | Usa any o sin tipos            |
| **Optimización**             | Previene re-renders con memoización               | Separa contextos por concern       | Evita errores comunes         | Causa re-renders innecesarios  |

### 3. Producto (30%) 📦

| Criterio                   | Excelente (100%)                           | Bueno (80%)                    | Suficiente (70%)           | Insuficiente (<70%)       |
| -------------------------- | ------------------------------------------ | ------------------------------ | -------------------------- | ------------------------- |
| **Funcionalidad**          | Todas las features funcionan perfectamente | Features principales funcionan | Funcionalidad básica       | No funciona               |
| **Componentes compuestos** | API intuitiva y flexible                   | Componentes bien estructurados | Estructura básica correcta | Componentes mal diseñados |
| **Theme Context**          | Tema global con persistencia               | Tema funcional con toggle      | Toggle básico              | No implementa tema        |
| **Código limpio**          | Excelente organización y documentación     | Código bien estructurado       | Legible pero mejorable     | Desorganizado             |
| **TypeScript**             | Tipos estrictos sin any                    | Buenos tipos                   | Tipos básicos              | Uso excesivo de any       |

---

## 📝 Ejercicios y Puntuación

### Ejercicios Guiados (40% del Desempeño)

| Ejercicio                | Puntos  | Criterios Clave                          |
| ------------------------ | ------- | ---------------------------------------- |
| 01 - Children Básico     | 20      | Tipar children, ReactNode, ReactElement  |
| 02 - Slots Pattern       | 20      | Named slots, composición flexible        |
| 03 - Compound Components | 25      | API compuesta, estado compartido interno |
| 04 - Context Básico      | 15      | createContext, Provider, useContext      |
| 05 - Context Avanzado    | 20      | Reducer, separación, optimización        |
| **Total**                | **100** |                                          |

### Proyecto Semanal (100% del Producto)

| Componente     | Puntos  | Criterios                                 |
| -------------- | ------- | ----------------------------------------- |
| ThemeProvider  | 20      | Context tipado, toggle funcional          |
| Compound Card  | 20      | Card.Header, Card.Body, Card.Footer       |
| Compound Modal | 20      | Modal.Trigger, Modal.Content, Modal.Close |
| Compound Tabs  | 20      | Tabs.List, Tabs.Tab, Tabs.Panel           |
| Integración    | 20      | Composición de múltiples contextos        |
| **Total**      | **100** |                                           |

---

## ✅ Lista de Verificación

### Conocimiento

- [ ] Explica composición vs herencia en React
- [ ] Diferencia ReactNode, ReactElement, ReactChild
- [ ] Entiende el flujo Provider → Consumer
- [ ] Conoce cuándo usar Context vs prop drilling
- [ ] Identifica problemas de re-renders con Context

### Desempeño

- [ ] Crea componentes que aceptan children
- [ ] Implementa slots con TypeScript
- [ ] Construye compound components funcionales
- [ ] Crea contextos tipados correctamente
- [ ] Usa useContext con valores seguros

### Producto

- [ ] Sistema de tema claro/oscuro funcional
- [ ] Al menos 2 compound components implementados
- [ ] Código TypeScript sin errores
- [ ] Componentes reutilizables y flexibles
- [ ] Documentación clara del uso

---

## 🏆 Niveles de Logro

| Nivel             | Rango   | Descripción                                       |
| ----------------- | ------- | ------------------------------------------------- |
| **Experto**       | 95-100% | Domina composición y Context, código ejemplar     |
| **Avanzado**      | 85-94%  | Implementa patrones correctamente con buen tipado |
| **Competente**    | 75-84%  | Entiende y aplica conceptos principales           |
| **En desarrollo** | 70-74%  | Necesita práctica adicional                       |
| **Insuficiente**  | <70%    | Requiere refuerzo de fundamentos                  |

---

## 📌 Notas para el Evaluador

1. **Composición**: Verificar que no se use herencia de clases
2. **Tipado de children**: Revisar uso de ReactNode vs tipos específicos
3. **Context**: Evaluar si el valor por defecto es seguro (no undefined sin manejo)
4. **Compound Components**: Validar que el estado se comparte internamente
5. **Dominio único**: Verificar implementación coherente con el dominio asignado

---

## 🔗 Recursos de Apoyo

- [React Patterns](https://www.patterns.dev/react)
- [TypeScript + React Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Kent C. Dodds - Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)

---

_Rúbrica Week-05 · Composición de Componentes y Context API_
