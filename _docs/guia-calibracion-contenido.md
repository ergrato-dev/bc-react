# 📐 Guía de Calibración de Contenido Semanal

**Documento de referencia para mantener la dedicación semanal en 8 horas**

**Creado**: Enero 2026  
**Versión**: 1.0  
**Última actualización**: Week 02 optimizada

---

## 🎯 Meta Semanal: 8 Horas

Cada semana del bootcamp debe cumplir con **exactamente 8 horas** de dedicación:

| Actividad  | Tiempo | % del Total |
| ---------- | ------ | ----------- |
| Teoría     | 2-2.5h | 25-31%      |
| Ejercicios | 3-3.5h | 37-44%      |
| Proyecto   | 2-2.5h | 25-31%      |
| **Total**  | **8h** | **100%**    |

---

## 📊 Análisis de Semanas Desarrolladas

### Week 01: Fundamentos de TypeScript ⚠️

**Estado**: Ligeramente corta (~6-7h)

| Componente | Contenido                     | Tiempo Estimado | Meta   | Desviación   |
| ---------- | ----------------------------- | --------------- | ------ | ------------ |
| Teoría     | 552 líneas, 5 archivos        | 1.5-2h          | 2-2.5h | -0.5h        |
| Ejercicios | 5 ejercicios (20+25+25+30+30) | 2.2h            | 3-3.5h | -1.3h        |
| Proyecto   | Modelado TypeScript           | 2-2.5h          | 2-2.5h | ✅ OK        |
| **Total**  |                               | **~6-7h**       | **8h** | **-1 a -2h** |

**Causas**:

- Teoría introductoria intencionalmente más ligera
- Ejercicios podrían tener 1 ejercicio adicional (30 min)

**Acción**: ✅ **No ajustar** - Semana introductoria más suave es aceptable

---

### Week 02: Introducción a React (ANTES) ❌

**Estado**: Significativamente excedida (~10-12h)

| Componente | Contenido                     | Tiempo Estimado | Meta   | Desviación |
| ---------- | ----------------------------- | --------------- | ------ | ---------- |
| Teoría     | 5,087 líneas, 6 archivos      | 4-5h            | 2-2.5h | **+2h**    |
| Ejercicios | 5 ejercicios (20+25+30+35+40) | 2.5h            | 3-3.5h | ✅ OK      |
| Proyecto   | 6 componentes CRUD completo   | 3-4h            | 2-2.5h | **+1.5h**  |
| **Total**  |                               | **~10-12h**     | **8h** | **+3-4h**  |

**Problemas identificados**:

1. **Teoría excesiva**: 5,087 líneas (doble del objetivo)
   - Archivo 02 (JSX): 834 líneas (muy largo)
   - Archivo 03 (Componentes): 959 líneas (muy largo)
   - Archivo 06 (Eventos): 944 líneas (muy largo)
   - Ejemplos redundantes
   - Explicaciones demasiado detalladas

2. **Proyecto sobredimensionado**:
   - 6 componentes (Header, Form, Search, Stats, List, Card)
   - CRUD completo + búsqueda + estadísticas
   - Validaciones complejas (ISBN regex)
   - Demasiadas features para semana 2

---

### Week 02: Introducción a React (DESPUÉS) ✅

**Estado**: Calibrada (~8h)

| Componente | Contenido                     | Tiempo Estimado | Meta   | Desviación |
| ---------- | ----------------------------- | --------------- | ------ | ---------- |
| Teoría     | ~3,000 líneas, 5 archivos     | 2-2.5h          | 2-2.5h | ✅ OK      |
| Ejercicios | 5 ejercicios (20+25+30+35+40) | 2.5h            | 3-3.5h | ✅ OK      |
| Proyecto   | 4 componentes CRUD básico     | 2-2.5h          | 2-2.5h | ✅ OK      |
| **Total**  |                               | **~7.5-8.5h**   | **8h** | **✅ OK**  |

**Ajustes realizados**:

1. **Teoría optimizada** (-40%):
   - ✅ Consolidado 01+02 en un solo archivo (Vite + JSX juntos)
   - ✅ Reducido ejemplos repetitivos
   - ✅ Eliminado contenido "nice to have"
   - ✅ Mantenido solo lo esencial para ejercicios y proyecto
   - **Nueva meta**: 500-700 líneas por archivo (máximo)

2. **Proyecto simplificado**:
   - ✅ Reducido de 6 a 4 componentes: Header, Form, List, Card
   - ✅ Eliminado: SearchBar, Stats (mover a semana 3+)
   - ✅ CRUD básico (add, list, delete)
   - ✅ Edición simple (sin useEffect complejo)
   - ✅ Validación básica (campos vacíos, sin regex)
   - **Nueva meta**: Proyecto completable en 2-2.5h

---

## 📏 Métricas de Calibración

### Teoría (2-2.5 horas)

**Líneas de código/texto**:

- Meta total: **2,500-3,500 líneas** para 6 archivos
- Por archivo: **400-600 líneas** (máximo 700)
- Velocidad de lectura: **~1,200-1,500 líneas/hora** (con código y práctica)

**Estructura de archivo teórico**:

```markdown
# Título (5-10 líneas)

## Objetivos (3-5 bullet points)

## Introducción (50-100 líneas)

## Concepto 1 (150-200 líneas con ejemplos)

## Concepto 2 (150-200 líneas con ejemplos)

## Concepto 3 (150-200 líneas con ejemplos)

## Mejores Prácticas (50-100 líneas)

## Resumen (30-50 líneas)

## Ejercicios sugeridos (20-30 líneas)

TOTAL: ~600-700 líneas máximo
```

**Señales de alarma** 🚨:

- ❌ Archivo con >800 líneas
- ❌ Más de 15 ejemplos de código por archivo
- ❌ Secciones "Casos especiales" muy largas
- ❌ Explicaciones que se repiten entre archivos

**Cómo reducir**:

- ✅ Consolidar archivos similares (Vite + JSX)
- ✅ Mover contenido avanzado a semanas posteriores
- ✅ Eliminar ejemplos redundantes (mantener 1-2 por concepto)
- ✅ Usar diagramas SVG en lugar de texto largo
- ✅ Referencias a docs oficiales en lugar de explicar todo

---

### Ejercicios (3-3.5 horas)

**Cantidad**: 5 ejercicios por semana

**Distribución de tiempo**:

- Ejercicio 1 (intro): 15-20 min
- Ejercicio 2: 20-30 min
- Ejercicio 3: 25-35 min
- Ejercicio 4: 30-40 min
- Ejercicio 5 (integrador): 35-45 min
- **Total**: 125-170 minutos (promedio ~150 min = 2.5h)

**Agregar tiempo buffer**: +30-60 min para lectura de READMEs, setup, debugging

**Estructura de ejercicio**:

- README: 50-150 líneas
- starter/: 50-200 líneas de código comentado
- solution/: 100-300 líneas de código completo

**Señales de alarma** 🚨:

- ❌ Ejercicio con >500 líneas de código
- ❌ Ejercicio que requiere >45 minutos
- ❌ Conceptos no cubiertos en teoría
- ❌ Más de 10 pasos en un ejercicio

**Cómo calibrar**:

- ✅ Un concepto principal por ejercicio
- ✅ Máximo 5-7 pasos de "descomentado"
- ✅ Solución visible en <300 líneas
- ✅ Complejidad incremental (fácil → difícil)

---

### Proyecto (2-2.5 horas)

**Alcance**: Integrar conceptos de la semana en una aplicación funcional

**Complejidad por semana**:

- Week 1-2: **Proyecto simple** (3-4 componentes, CRUD básico)
- Week 3-6: **Proyecto intermedio** (5-7 componentes, estado global, routing)
- Week 7-12: **Proyecto complejo** (8+ componentes, API, testing)

**Métricas**:

- Líneas de código esperadas: **200-500** (sin solution)
- Componentes: **3-5** para semanas tempranas
- Features: **2-3** principales (ej: CRUD, filtrado simple)
- Archivos: **5-10** (componentes, types, estilos)

**Señales de alarma** 🚨:

- ❌ Proyecto con >10 componentes en semanas tempranas
- ❌ Features complejas no vistas en teoría
- ❌ Requiere librerías externas avanzadas
- ❌ Validaciones o lógica de negocio compleja
- ❌ Solution con >1,000 líneas de código

**Cómo simplificar**:

- ✅ Reducir número de componentes
- ✅ CRUD básico en lugar de completo
- ✅ Validaciones simples (campos vacíos)
- ✅ Sin búsqueda/filtrado/paginación en semanas tempranas
- ✅ Mover features avanzadas a semanas posteriores

**Ejemplo Week 02** (calibrado):

```
Antes (❌ 3-4h):
- 6 componentes
- CRUD completo (add, edit, delete, cancel edit)
- Búsqueda por 2 campos
- Estadísticas con reduce()
- Validación regex ISBN
- useEffect para pre-llenar form

Después (✅ 2-2.5h):
- 4 componentes (Header, Form, List, Card)
- CRUD básico (add, list, delete)
- Edición en línea simple
- Validación básica (campos vacíos)
- Sin búsqueda, sin estadísticas
```

---

## 🔍 Proceso de Validación Pre-Commit

Antes de considerar una semana completa, verificar:

### ✅ Checklist de Teoría

- [ ] Total de líneas: 2,500-3,500
- [ ] Archivos individuales: <700 líneas cada uno
- [ ] Máximo 2-3 ejemplos por concepto
- [ ] Referencias a docs en lugar de explicar todo
- [ ] Diagramas SVG para conceptos visuales
- [ ] Sin repetición de contenido entre archivos
- [ ] Tiempo de lectura estimado: 2-2.5h

### ✅ Checklist de Ejercicios

- [ ] 5 ejercicios en total
- [ ] Tiempos: 15-20, 20-30, 25-35, 30-40, 35-45 min
- [ ] Total estimado: 2.5-3h (con buffer)
- [ ] Cada ejercicio <500 líneas
- [ ] Progresión incremental de dificultad
- [ ] Todos los conceptos cubiertos en teoría
- [ ] READMEs concisos (50-150 líneas)

### ✅ Checklist de Proyecto

- [ ] 3-5 componentes para semanas tempranas
- [ ] Features: 2-3 principales
- [ ] Líneas de código starter: 200-500
- [ ] Líneas de código solution: 400-800
- [ ] Tiempo estimado: 2-2.5h
- [ ] Sin features avanzadas no vistas
- [ ] Validación simple (no regex complejos)
- [ ] Sin búsqueda/filtrado/paginación en primeras semanas

### ✅ Checklist General

- [ ] Suma total: ~8 horas (±30 min)
- [ ] Recursos (4-recursos/): Referencias, no contenido extenso
- [ ] Glosario (5-glosario/): 20-30 términos máximo
- [ ] README.md actualizado con tiempos reales
- [ ] Rubrica de evaluación alineada con contenido

---

## 📐 Fórmulas de Estimación

### Tiempo de Lectura Teoría

```
Tiempo (horas) = (Total líneas / 1,200) + (Num ejemplos × 3 min)

Ejemplo:
- 3,000 líneas
- 20 ejemplos de código
Tiempo = (3000 / 1200) + (20 × 0.05) = 2.5h + 1h = 3.5h ❌ Excedido

Ajuste:
- Reducir a 2,500 líneas
- Reducir a 15 ejemplos
Tiempo = (2500 / 1200) + (15 × 0.05) = 2.1h + 0.75h = 2.85h ✅ OK
```

### Tiempo de Ejercicio

```
Tiempo (min) = (Líneas de código / 10) + (Pasos × 2 min) + 5 min setup

Ejemplo:
- 300 líneas de código
- 8 pasos
Tiempo = (300 / 10) + (8 × 2) + 5 = 30 + 16 + 5 = 51 min ❌ Largo

Ajuste:
- Reducir a 200 líneas
- Reducir a 6 pasos
Tiempo = (200 / 10) + (6 × 2) + 5 = 20 + 12 + 5 = 37 min ✅ OK
```

### Tiempo de Proyecto

```
Tiempo (horas) = (Componentes × 20 min) + (Features × 30 min) + 30 min setup/test

Ejemplo Week 02 (antes):
- 6 componentes
- 5 features (CRUD + búsqueda + stats)
Tiempo = (6 × 0.33h) + (5 × 0.5h) + 0.5h = 2h + 2.5h + 0.5h = 5h ❌ Excedido

Ajuste Week 02 (después):
- 4 componentes
- 3 features (add + list + delete)
Tiempo = (4 × 0.33h) + (3 × 0.5h) + 0.5h = 1.3h + 1.5h + 0.5h = 3.3h
Ajuste adicional (simplificar features):
- 4 componentes simples
- 2 features principales
Tiempo = (4 × 0.25h) + (2 × 0.5h) + 0.5h = 1h + 1h + 0.5h = 2.5h ✅ OK
```

---

## 🎯 Recomendaciones por Etapa

### Etapa 1: Fundamentos (Weeks 1-3)

**Prioridad**: Claridad sobre completitud

- Teoría: Conceptos básicos bien explicados
- Ejercicios: Muchos, pero cortos
- Proyectos: Simples, enfocados en sintaxis
- Permitir: Semanas ligeramente cortas (7-7.5h) si necesario

### Etapa 2: Intermedio (Weeks 4-8)

**Prioridad**: Balance entre teoría y práctica

- Teoría: Conceptos avanzados, referencias a docs
- Ejercicios: Menos cantidad, más integrados
- Proyectos: Complejidad media, múltiples features
- Target exacto: 8 horas

### Etapa 3: Avanzado (Weeks 9-15)

**Prioridad**: Proyectos complejos

- Teoría: Concisa, patrones avanzados
- Ejercicios: Opcionales, enfocados en casos especiales
- Proyectos: Complejos, pueden requerir 3-4h
- Permitir: Ligero exceso (8.5-9h) si proyecto lo justifica

### Etapa 4: Proyecto Final (Weeks 16-20)

**Prioridad**: Integración y despliegue

- Teoría: Mínima, solo nuevos conceptos (Docker, CI/CD)
- Ejercicios: Ninguno, enfoque 100% en proyecto
- Proyecto: 6-8 horas/semana
- Total: 10-12h/semana (aceptable para etapa final)

---

## 📝 Plantilla de Revisión Semanal

Usar esta plantilla antes de commit:

```markdown
## Week XX: [Título]

### Métricas

- Teoría: [X] líneas en [Y] archivos = [Z]h estimadas
- Ejercicios: [N] ejercicios × tiempos = [Z]h estimadas
- Proyecto: [N] componentes, [M] features = [Z]h estimadas
- **TOTAL**: [Z]h

### Desviaciones

- Teoría: [±X]h de meta (2-2.5h)
- Ejercicios: [±X]h de meta (3-3.5h)
- Proyecto: [±X]h de meta (2-2.5h)
- **TOTAL**: [±X]h de meta (8h)

### Acciones

- [ ] Reducir teoría en X%
- [ ] Consolidar archivos A+B
- [ ] Simplificar ejercicio N
- [ ] Reducir componentes de proyecto
- [ ] Mover feature X a semana Y

### Aprobación

- [ ] Total ~8h (±30 min)
- [ ] Contenido alineado con objetivos
- [ ] Progresión lógica desde semana anterior
- [ ] Preparación adecuada para siguiente semana
```

---

## 🚀 Siguientes Semanas

Al crear nuevas semanas, aplicar estas lecciones:

1. **Planificar antes de escribir**:
   - Definir componentes de proyecto primero
   - Listar ejercicios con tiempos estimados
   - Calcular líneas de teoría necesarias

2. **Escribir incrementalmente**:
   - Teoría: Revisar líneas cada 200-300 escritas
   - Ejercicios: Probar tiempo real al completar
   - Proyecto: Implementar solution y cronometrar

3. **Validar antes de commit**:
   - Usar checklist completo
   - Aplicar fórmulas de estimación
   - Pedir feedback si es posible

4. **Iterar post-commit si necesario**:
   - Recoger métricas reales de estudiantes
   - Ajustar contenido basado en feedback
   - Documentar cambios en este archivo

---

## 📚 Referencias

- [Instrucciones Copilot](../../.github/copilot-instructions.md)
- [README Bootcamp](../../README.md)
- Week 01: Ejemplo de semana ligeramente corta (aceptable)
- Week 02: Ejemplo de semana optimizada (ideal)

---

## 🌐 Convención de Idiomas (CRÍTICO)

### ⚠️ Regla de Oro: Inglés Técnico + Español Educativo

**NOMENCLATURA: SIEMPRE EN INGLÉS** ✅

- Variables, constantes, funciones
- Componentes React (PascalCase)
- Interfaces y Types de TypeScript
- Props, callbacks, event handlers
- Clases CSS, IDs HTML
- Nombres de archivos

**COMENTARIOS Y DOCS: SIEMPRE EN ESPAÑOL** ✅

- Comentarios en código (`//`, `/* */`)
- Documentación JSDoc (`/** */`)
- READMEs, teoría, guías
- Mensajes de error/validación
- Textos de UI para usuarios
- Explicaciones educativas

### Ejemplo Correcto

```typescript
// ✅ CORRECTO - Código en inglés, comentarios en español
interface BookFormProps {
  book?: Book;
  onSubmit: (book: Book) => void;
  onCancel: () => void;
}

/**
 * Formulario para agregar o editar libros
 * @param book - Libro a editar (opcional)
 * @param onSubmit - Callback al guardar
 * @param onCancel - Callback al cancelar
 */
const BookForm: React.FC<BookFormProps> = ({ book, onSubmit, onCancel }) => {
  // Estado local para manejar los campos del formulario
  const [title, setTitle] = useState<string>(book?.title || '');
  const [author, setAuthor] = useState<string>(book?.author || '');

  // Validar que los campos no estén vacíos
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert('Todos los campos son requeridos'); // ← Mensaje en español
      return;
    }

    onSubmit({ title, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del libro"
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
```

### Verificación en Code Review

Al revisar código, validar:

- [ ] Variables/funciones en inglés
- [ ] Componentes React en inglés (PascalCase)
- [ ] Interfaces/Types en inglés
- [ ] Comentarios explicativos en español
- [ ] Mensajes de usuario en español
- [ ] Consistencia en todo el código

**Razón**: Estándar de industria + preparación laboral + colaboración internacional

---

**Última actualización**: Week 02 optimizada - Enero 2026  
**Próxima revisión**: Después de Week 03
