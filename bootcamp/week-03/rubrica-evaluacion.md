# 📊 Rúbrica de Evaluación - Semana 03

## 🎯 Distribución de Evaluación

| Tipo de Evidencia | Peso | Descripción                      |
| ----------------- | ---- | -------------------------------- |
| 🧠 Conocimiento   | 30%  | Comprensión conceptual y teórica |
| 💪 Desempeño      | 40%  | Ejercicios prácticos en clase    |
| 📦 Producto       | 30%  | Proyecto entregable funcional    |

**Nota mínima para aprobar**: 70% en cada tipo de evidencia

---

## 🧠 Conocimiento (30%)

### Criterios de Evaluación

#### 1. Comprensión de useEffect y Efectos (10%)

**Excelente (9-10 puntos)**

- Explica claramente qué es un efecto secundario y por qué se necesita useEffect
- Entiende el ciclo de vida: montaje, actualización, desmontaje
- Distingue cuándo usar useEffect y cuándo no es necesario
- Explica el propósito y funcionamiento del cleanup

**Bueno (7-8 puntos)**

- Entiende el concepto básico de efectos
- Identifica ciclo de vida de componentes
- Usa useEffect en casos simples
- Comprende cleanup básico

**Suficiente (5-6 puntos)**

- Comprensión limitada de efectos
- Confunde ciclo de vida con eventos
- Usa useEffect por intuición, no comprensión
- No entiende bien el cleanup

**Insuficiente (0-4 puntos)**

- No comprende qué es un efecto
- No distingue ciclo de vida
- Errores conceptuales graves
- No entiende cleanup

---

#### 2. Array de Dependencias (10%)

**Excelente (9-10 puntos)**

- Explica correctamente los 3 casos: sin array, array vacío, con dependencias
- Entiende comparación superficial (shallow comparison)
- Identifica cuándo agregar dependencias y cuándo no
- Comprende el plugin eslint-plugin-react-hooks

**Bueno (7-8 puntos)**

- Entiende los 3 casos básicos
- Usa dependencias correctamente en casos simples
- Comete errores en casos complejos
- Conoce el plugin de ESLint

**Suficiente (5-6 puntos)**

- Confunde los casos del array
- Agrega dependencias por prueba y error
- No entiende comparación superficial
- Ignora warnings de ESLint

**Insuficiente (0-4 puntos)**

- No comprende el array de dependencias
- Siempre usa array vacío o nunca lo usa
- Errores conceptuales graves
- No usa ESLint

---

#### 3. Cleanup y Memory Leaks (10%)

**Excelente (9-10 puntos)**

- Explica qué es un memory leak y cómo prevenirlo
- Identifica cuándo se necesita cleanup
- Entiende cancelación de peticiones con AbortController
- Sabe limpiar timers, listeners y subscripciones

**Bueno (7-8 puntos)**

- Entiende memory leaks básicos
- Usa cleanup en casos simples
- Conoce AbortController
- Limpia timers correctamente

**Suficiente (5-6 puntos)**

- Comprensión limitada de memory leaks
- Usa cleanup ocasionalmente
- No usa AbortController
- Olvida limpiar recursos

**Insuficiente (0-4 puntos)**

- No comprende memory leaks
- Nunca usa cleanup
- No conoce AbortController
- Errores críticos

---

## 💪 Desempeño (40%)

### Ejercicios Prácticos (8% cada uno)

#### Ejercicio 1: Primer Efecto (Básico)

**Excelente (7-8 puntos)**

- ✅ Completa los 3 componentes sin errores
- ✅ Entiende diferencia entre mount y updates
- ✅ Usa array de dependencias correctamente
- ✅ Console.logs demuestran comprensión

**Bueno (5-6 puntos)**

- ✅ Completa 2-3 componentes
- ⚠️ Errores menores en dependencias
- ✅ Funcional
- ✅ Comprensión básica

**Suficiente (3-4 puntos)**

- ⚠️ Completa 1-2 componentes
- ⚠️ Errores en array de dependencias
- ⚠️ Requiere ayuda
- ⚠️ Comprensión limitada

**Insuficiente (0-2 puntos)**

- ❌ No completa el ejercicio
- ❌ Array de dependencias incorrecto
- ❌ No funcional
- ❌ No demuestra comprensión

---

#### Ejercicio 2: Fetch de Datos

**Excelente (7-8 puntos)**

- ✅ Implementa fetch con estados loading/error/data
- ✅ Usa AbortController correctamente
- ✅ Cleanup cancela peticiones
- ✅ Custom hook useFetch con generics

**Bueno (5-6 puntos)**

- ✅ Fetch básico funciona
- ⚠️ AbortController incompleto
- ✅ Algunos estados manejados
- ⚠️ Custom hook básico

**Suficiente (3-4 puntos)**

- ⚠️ Fetch funciona parcialmente
- ⚠️ Sin AbortController
- ⚠️ Estados incompletos
- ⚠️ No implementa custom hook

**Insuficiente (0-2 puntos)**

- ❌ Fetch no funciona
- ❌ Sin cleanup
- ❌ No maneja estados
- ❌ No funcional

---

#### Ejercicio 3: Timers y Cleanup

**Excelente (7-8 puntos)**

- ✅ setInterval implementado correctamente
- ✅ Cleanup con clearInterval funciona
- ✅ No hay memory leaks
- ✅ Cronómetro funcional

**Bueno (5-6 puntos)**

- ✅ Timer funciona
- ⚠️ Cleanup incompleto
- ⚠️ Memory leak menor
- ✅ Funcional

**Suficiente (3-4 puntos)**

- ⚠️ Timer funciona parcialmente
- ⚠️ Sin cleanup o incorrecto
- ⚠️ Memory leaks evidentes
- ⚠️ Requiere ayuda

**Insuficiente (0-2 puntos)**

- ❌ Timer no funciona
- ❌ Sin cleanup
- ❌ Memory leaks graves
- ❌ No funcional

---

#### Ejercicio 4: Event Listeners

**Excelente (7-8 puntos)**

- ✅ addEventListener implementado correctamente
- ✅ removeEventListener en cleanup
- ✅ Scroll detection funciona
- ✅ Sin memory leaks

**Bueno (5-6 puntos)**

- ✅ Listener funciona
- ⚠️ Cleanup incompleto
- ✅ Detección básica
- ⚠️ Memory leak menor

**Suficiente (3-4 puntos)**

- ⚠️ Listener parcial
- ⚠️ Sin cleanup
- ⚠️ Detección limitada
- ⚠️ Memory leaks

**Insuficiente (0-2 puntos)**

- ❌ Listener no funciona
- ❌ Sin cleanup
- ❌ No funcional
- ❌ Memory leaks graves

---

#### Ejercicio 5: Custom Hook con useEffect

**Excelente (7-8 puntos)**

- ✅ useDocumentTitle funciona perfectamente
- ✅ useLocalStorage con sync bidireccional
- ✅ Generics implementados correctamente
- ✅ Cleanup apropiado

**Bueno (5-6 puntos)**

- ✅ Hooks funcionan básicamente
- ⚠️ Generics incompletos
- ✅ Funcionalidad básica
- ⚠️ Cleanup parcial

**Suficiente (3-4 puntos)**

- ⚠️ Solo un hook funciona
- ⚠️ Sin generics
- ⚠️ Funcionalidad limitada
- ⚠️ Sin cleanup

**Insuficiente (0-2 puntos)**

- ❌ Hooks no funcionan
- ❌ Sin generics
- ❌ No funcional
- ❌ No hay cleanup

---

## 📦 Producto (30%)

### Proyecto Semanal: Dashboard con Datos en Tiempo Real

#### 1. Funcionalidad (15%)

**Excelente (13-15 puntos)**

- ✅ **ItemList**: Fetch inicial con AbortController, loading/error/data manejados
- ✅ **StatsCard**: Múltiples efectos independientes funcionando
- ✅ **RealTimeIndicator**: Polling cada 5s con setInterval, cleanup correcto
- ✅ **Dashboard**: Integración completa, layout funcional
- ✅ Sin memory leaks ni race conditions
- ✅ Código compila y ejecuta sin errores

**Bueno (10-12 puntos)**

- ✅ 3 de 4 componentes completos
- ⚠️ AbortController parcial o faltante
- ✅ Polling funciona pero cleanup incompleto
- ⚠️ Algunos estados no manejados
- ⚠️ Memory leaks menores
- ✅ Código funcional con warnings

**Suficiente (7-9 puntos)**

- ⚠️ 2 de 4 componentes funcionan
- ⚠️ Sin AbortController
- ⚠️ Polling sin cleanup
- ⚠️ Estados básicos solamente
- ⚠️ Memory leaks evidentes
- ⚠️ Errores frecuentes

**Insuficiente (0-6 puntos)**

- ❌ Solo 0-1 componente funciona
- ❌ Sin fetch o sin polling
- ❌ Sin cleanup en ningún componente
- ❌ No maneja estados
- ❌ Memory leaks graves
- ❌ Código no funcional

---

#### 2. Adaptación al Dominio (10%)

**Excelente (9-10 puntos)**

- ✅ Implementación coherente con dominio asignado
- ✅ Datos mock realistas y apropiados
- ✅ Componentes adaptados (no genéricos)
- ✅ Interfaces/types específicos del dominio
- ✅ Originalidad en la solución
- ✅ No hay copia de otros estudiantes

**Bueno (7-8 puntos)**

- ✅ Adaptación correcta
- ⚠️ Datos mock básicos
- ✅ Componentes adaptados
- ✅ Types apropiados
- ✅ Solución propia
- ✅ Sin copia evidente

**Suficiente (5-6 puntos)**

- ⚠️ Adaptación genérica o superficial
- ⚠️ Datos mock simples
- ⚠️ Componentes poco adaptados
- ⚠️ Types genéricos
- ⚠️ Poco original
- ⚠️ Similitudes con otros

**Insuficiente (0-4 puntos)**

- ❌ No adaptado al dominio (genérico)
- ❌ Sin datos mock o irreales
- ❌ Componentes sin adaptar
- ❌ Types incorrectos
- ❌ Copia detectada
- ❌ No original

---

#### 3. Calidad del Código (5%)

**Excelente (5 puntos)**

- ✅ Código limpio y bien organizado
- ✅ Comentarios QUÉ/PARA/IMPACTO en efectos clave
- ✅ TypeScript con tipos explícitos correctos
- ✅ Nomenclatura clara: camelCase, PascalCase, inglés técnico
- ✅ Cleanup en todos los efectos que lo necesitan
- ✅ README descriptivo con dominio explicado
- ✅ Sin console.logs innecesarios en producción

**Bueno (3-4 puntos)**

- ✅ Código organizado
- ⚠️ Algunos comentarios
- ✅ Types correctos
- ⚠️ Nomenclatura inconsistente
- ⚠️ Cleanup parcial
- ✅ README básico
- ⚠️ Algunos console.logs

**Suficiente (2 puntos)**

- ⚠️ Código funcional pero desordenado
- ⚠️ Pocos o sin comentarios
- ⚠️ Types básicos o incompletos
- ⚠️ Nomenclatura incorrecta o en español
- ⚠️ Sin cleanup
- ⚠️ README incompleto
- ⚠️ Console.logs excesivos

**Insuficiente (0-1 punto)**

- ❌ Código desorganizado
- ❌ Sin comentarios educativos
- ❌ Types incorrectos o faltantes
- ❌ Nomenclatura en español
- ❌ Sin cleanup (memory leaks)
- ❌ Sin README
- ❌ Console.logs de debug sin limpiar

---

## ✅ Criterios de Aprobación

### Requisitos Mínimos

1. **70% mínimo en cada tipo de evidencia**
   - Conocimiento ≥ 70% (21/30 puntos)
   - Desempeño ≥ 70% (28/40 puntos)
   - Producto ≥ 70% (21/30 puntos)

2. **Funcionalidad básica del proyecto**
   - Al menos 3 de 4 componentes funcionando
   - Fetch inicial implementado
   - Polling implementado
   - Cleanup al menos en timers

3. **Entrega puntual**
   - Ejercicios entregados en tiempo
   - Proyecto entregado antes de deadline

4. **Originalidad y adaptación**
   - Implementación propia adaptada a dominio único
   - Sin copia de otros estudiantes
   - Código original con implementación contextualizada

---

## 🚨 Causas de Reprobación Automática

- ❌ **Plagio o copia** (0 automático en la evidencia)
- ❌ **Menos de 70%** en cualquier tipo de evidencia
- ❌ **No entregar el proyecto**
- ❌ **Código que no funciona** (proyecto no ejecuta)
- ❌ **Memory leaks críticos** sin intentar resolver
- ❌ **Sin cleanup en ningún componente** (demuestra no comprensión)
- ❌ **Proyecto genérico sin adaptar** a dominio asignado

---

## 📝 Formato de Entrega

### Ejercicios

```
bootcamp/week-03/2-ejercicios/
├── 01-primer-efecto/starter/
│   ├── CounterBasic.tsx
│   ├── WelcomeMessage.tsx
│   └── MultipleEffects.tsx
├── 02-fetch-datos/starter/
│   ├── UserList.tsx
│   ├── UserListOptimized.tsx
│   ├── PostViewer.tsx
│   └── useFetch.ts
├── 03-timers-cleanup/starter/
│   └── Timer.tsx
├── 04-event-listeners/starter/
│   └── ScrollDetector.tsx
└── 05-custom-hook-useeffect/starter/
    ├── useDocumentTitle.ts
    └── useLocalStorage.ts
```

### Proyecto

```
bootcamp/week-03/3-proyecto/starter/
├── src/
│   ├── types/index.ts (adaptado a tu dominio)
│   ├── utils/api.ts (mock data de tu dominio)
│   └── components/
│       ├── ItemList.tsx (adaptado)
│       ├── StatsCard.tsx (adaptado)
│       ├── RealTimeIndicator.tsx (adaptado)
│       └── Dashboard.tsx
└── README.md (descripción de tu dominio y decisiones)
```

---

## 🎯 Puntos Críticos de Evaluación

### En Ejercicios

1. **Array de dependencias correcto** en cada useEffect
2. **Cleanup functions** donde se necesiten (timers, listeners, fetch)
3. **AbortController** en fetch de datos
4. **Manejo de estados** loading/error/data
5. **Custom hooks** con TypeScript generics

### En Proyecto

1. **4 componentes funcionando** según especificaciones
2. **Fetch inicial** con AbortController y cleanup
3. **Polling** con setInterval y clearInterval
4. **Múltiples efectos independientes** en StatsCard
5. **Adaptación coherente** al dominio asignado
6. **Sin memory leaks** (componentes limpian correctamente)
7. **TypeScript correcto** (sin any, tipos explícitos)
8. **Código en inglés técnico**, comentarios en español

---

## 🔧 Checklist de Auto-Evaluación

### Antes de Entregar

**Ejercicios:**

- [ ] Todos los ejercicios completos y funcionando
- [ ] Array de dependencias correcto en cada useEffect
- [ ] Cleanup functions implementadas
- [ ] Sin warnings de eslint-plugin-react-hooks
- [ ] Código compila sin errores

**Proyecto:**

- [ ] 4 componentes implementados y funcionando
- [ ] ItemList: fetch con AbortController
- [ ] StatsCard: múltiples efectos independientes
- [ ] RealTimeIndicator: polling con setInterval
- [ ] Dashboard: integración completa
- [ ] Adaptado a mi dominio asignado (no genérico)
- [ ] Interfaces/types específicos del dominio
- [ ] Mock data realista de mi dominio
- [ ] Cleanup en todos los efectos necesarios
- [ ] Sin memory leaks (probado desmontando componentes)
- [ ] Sin race conditions
- [ ] README con descripción de dominio
- [ ] Comentarios QUÉ/PARA/IMPACTO en efectos clave
- [ ] Nomenclatura en inglés (componentes, variables, funciones)
- [ ] TypeScript sin errores ni any
- [ ] Sin console.logs de debug

---

## 📚 Recursos de Ayuda

- [Teoría Week 03](1-teoria/) - Repasa conceptos
- [Ejercicios](2-ejercicios/) - Revisa soluciones si te atoras
- [Proyecto README](3-proyecto/README.md) - Instrucciones detalladas
- [Recursos](4-recursos/) - Videos, artículos, documentación
- [Glosario](5-glosario/) - Términos técnicos

---

## 💡 Tips para Aprobar

1. **Lee la teoría antes de hacer ejercicios**
2. **Completa los ejercicios en orden** (son progresivos)
3. **Usa ESLint** para detectar errores de dependencias
4. **Prueba desmontar componentes** para verificar cleanup
5. **Usa React DevTools** para ver cuándo se ejecutan efectos
6. **Pregunta dudas temprano**, no esperes al deadline
7. **Adapta realmente tu proyecto** al dominio, no solo cambies nombres
8. **Testea tu proyecto** simulando uso real (scroll, navigation, etc.)

---

## 📞 Contacto

Si tienes dudas sobre:

- **Criterios de evaluación**: Consulta con tu instructor
- **Errores técnicos**: Revisa teoría y recursos primero
- **Dominio asignado**: Confirma con instructor tu dominio único
- **Deadline**: Verifica fechas en el README principal

---

## 🌟 Ejemplo de Excelencia

Un proyecto excelente:

- ✅ Funciona completamente sin errores
- ✅ Adaptado creativamente al dominio
- ✅ Cleanup perfecto (sin memory leaks)
- ✅ TypeScript impecable con tipos específicos
- ✅ Código limpio con comentarios educativos
- ✅ README descriptivo explicando decisiones
- ✅ UI funcional y profesional
- ✅ Mock data realista del dominio

**Ejemplo**: Si tu dominio es "Farmacia", tu proyecto debe tener:

- Medicamentos con nombre, precio, stock, categoría
- Stats: ventas del día, inventario bajo, medicamentos más vendidos
- Indicador en tiempo real: clientes en tienda o entregas pendientes
- Todo adaptado al contexto de farmacia, no genérico

---

_Última actualización: Enero 2026_
