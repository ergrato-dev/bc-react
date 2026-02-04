# 📊 Rúbrica de Evaluación - Semana 03

## 🎯 Entregable Único

| Entregable          | Peso | Descripción                        |
| ------------------- | ---- | ---------------------------------- |
| 📦 Proyecto Semanal | 100% | Dashboard con Datos en Tiempo Real |

**Nota mínima para aprobar**: 70%

> **Nota**: La teoría y los ejercicios son recursos de aprendizaje. El único entregable evaluado es el proyecto.

---

## 📚 Recursos de Aprendizaje (No Evaluados)

### Teoría y Ejercicios

La teoría y los ejercicios guiados son **recursos de preparación** para el proyecto:

- **1-teoria/**: Material conceptual sobre useEffect y efectos
- **2-ejercicios/**: Práctica guiada de cada concepto

Estos recursos te ayudan a desarrollar las competencias necesarias, pero **no son entregables evaluados**.

> 💡 **Recomendación**: Completa la teoría y los ejercicios antes de iniciar el proyecto.

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

#### 2. Adaptación al Dominio (35%)

**Excelente (30-35 puntos)**

- ✅ Implementación coherente con dominio asignado
- ✅ Datos mock realistas y apropiados
- ✅ Componentes adaptados (no genéricos)
- ✅ Interfaces/types específicos del dominio
- ✅ Originalidad en la solución
- ✅ No hay copia de otros estudiantes

**Bueno (24-29 puntos)**

- ✅ Adaptación correcta
- ⚠️ Datos mock básicos
- ✅ Componentes adaptados
- ✅ Types apropiados
- ✅ Solución propia
- ✅ Sin copia evidente

**Suficiente (18-23 puntos)**

- ⚠️ Adaptación genérica o superficial
- ⚠️ Datos mock simples
- ⚠️ Componentes poco adaptados
- ⚠️ Types genéricos
- ⚠️ Poco original
- ⚠️ Similitudes con otros

**Insuficiente (0-17 puntos)**

- ❌ No adaptado al dominio (genérico)
- ❌ Sin datos mock o irreales
- ❌ Componentes sin adaptar
- ❌ Types incorrectos
- ❌ Copia detectada
- ❌ No original

**Insuficiente (0-4 puntos)**

- ❌ No adaptado al dominio (genérico)
- ❌ Sin datos mock o irreales
- ❌ Componentes sin adaptar
- ❌ Types incorrectos
- ❌ Copia detectada
- ❌ No original

---

#### 3. Calidad del Código (25%)

**Excelente (21-25 puntos)**

- ✅ Código limpio y bien organizado
- ✅ Comentarios QUÉ/PARA/IMPACTO en efectos clave
- ✅ TypeScript con tipos explícitos correctos
- ✅ Nomenclatura clara: camelCase, PascalCase, inglés técnico
- ✅ Cleanup en todos los efectos que lo necesitan
- ✅ README descriptivo con dominio explicado
- ✅ Sin console.logs innecesarios en producción

**Bueno (17-20 puntos)**

- ✅ Código organizado
- ⚠️ Algunos comentarios
- ✅ Types correctos
- ⚠️ Nomenclatura inconsistente
- ⚠️ Cleanup parcial
- ✅ README básico
- ⚠️ Algunos console.logs

**Suficiente (13-16 puntos)**

- ⚠️ Código funcional pero desordenado
- ⚠️ Pocos o sin comentarios
- ⚠️ Types básicos o incompletos
- ⚠️ Nomenclatura incorrecta o en español
- ⚠️ Sin cleanup
- ⚠️ README incompleto
- ⚠️ Console.logs excesivos

**Insuficiente (0-12 puntos)**

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

1. **70% mínimo en el proyecto**
   - Proyecto ≥ 70 puntos de 100

2. **Funcionalidad básica del proyecto**
   - Al menos 3 de 4 componentes funcionando
   - Fetch inicial implementado
   - Polling implementado
   - Cleanup al menos en timers

3. **Entrega puntual**
   - Proyecto entregado antes del deadline

4. **Originalidad y adaptación**
   - Implementación propia adaptada a dominio único
   - Sin copia de otros estudiantes
   - Código original con implementación contextualizada

---

## 🚨 Causas de Reprobación Automática

- ❌ **Plagio o copia** (0 automático)
- ❌ **Menos de 70%** en el proyecto
- ❌ **No entregar el proyecto**
- ❌ **Código que no funciona** (proyecto no ejecuta)
- ❌ **Memory leaks críticos** sin intentar resolver
- ❌ **Sin cleanup en ningún componente** (demuestra no comprensión)
- ❌ **Proyecto genérico sin adaptar** a dominio asignado

---

## 📝 Formato de Entrega

### Proyecto (Único Entregable)

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

> **Nota**: Los ejercicios en `2-ejercicios/` son recursos de práctica y no se entregan.

---

## 🎯 Puntos Críticos de Evaluación

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

### Antes de Entregar el Proyecto

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
