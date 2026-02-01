# 📋 Rúbrica de Evaluación - Semana 08

## Gestión de Estado Global con Zustand

---

## 🎯 Competencias a Evaluar

### 1. Conocimiento (30%) 🧠

| Criterio                                | Excelente (100%)                                      | Bueno (80%)                          | Suficiente (70%)                                 | Insuficiente (<70%)          |
| --------------------------------------- | ----------------------------------------------------- | ------------------------------------ | ------------------------------------------------ | ---------------------------- |
| Comprende el problema del estado global | Explica prop drilling y sus limitaciones con ejemplos | Identifica cuándo usar estado global | Conoce la diferencia entre estado local y global | No distingue tipos de estado |
| Entiende la arquitectura de Zustand     | Explica stores, acciones, selectores y su flujo       | Conoce los componentes principales   | Sabe crear un store básico                       | No comprende la arquitectura |
| Conoce patrones de organización         | Aplica slices, módulos y separación de concerns       | Organiza stores de forma lógica      | Conoce patrones básicos                          | No organiza el código        |
| Comprende selectores y performance      | Explica re-renders y optimización con selectores      | Sabe cuándo usar selectores          | Conoce el concepto de selector                   | No entiende selectores       |
| Entiende persistencia y middleware      | Implementa persist y middleware personalizado         | Usa persist correctamente            | Conoce el concepto de middleware                 | No usa middleware            |

### 2. Desempeño (40%) 💪

| Criterio                | Excelente (100%)                                   | Bueno (80%)              | Suficiente (70%)             | Insuficiente (<70%)  |
| ----------------------- | -------------------------------------------------- | ------------------------ | ---------------------------- | -------------------- |
| Crea stores tipados     | Stores con tipos completos y genéricos             | Tipos básicos correctos  | Tipos parciales              | Sin tipado           |
| Implementa acciones     | Acciones con payload tipado y lógica compleja      | Acciones básicas tipadas | Acciones sin tipos completos | Acciones incorrectas |
| Usa selectores          | Selectores derivados con memoización               | Selectores básicos       | Selectores simples           | No usa selectores    |
| Aplica middleware       | Persist + middleware personalizado                 | Persist configurado      | Persist básico               | Sin middleware       |
| Integra con componentes | Suscripción selectiva, sin re-renders innecesarios | Integración correcta     | Integración básica           | Integración con bugs |

### 3. Producto (30%) 📦

| Criterio                | Excelente (100%)                                    | Bueno (80%)                    | Suficiente (70%)             | Insuficiente (<70%)      |
| ----------------------- | --------------------------------------------------- | ------------------------------ | ---------------------------- | ------------------------ |
| Funcionalidad completa  | Todas las features implementadas y funcionando      | Features principales completas | Features básicas funcionando | Features incompletas     |
| Organización del código | Stores modulares, bien separados                    | Estructura clara               | Organización básica          | Código desorganizado     |
| Tipado TypeScript       | Tipos exhaustivos, sin any                          | Tipos correctos                | Tipos parciales              | Muchos any o errores     |
| Performance             | Sin re-renders innecesarios, selectores optimizados | Buen rendimiento               | Rendimiento aceptable        | Problemas de performance |
| Integración con Router  | Estado sincronizado con navegación                  | Integración correcta           | Integración básica           | Sin integración          |

---

## 📊 Escala de Calificación

| Rango   | Calificación | Descripción                      |
| ------- | ------------ | -------------------------------- |
| 90-100% | Excelente    | Dominio completo del tema        |
| 80-89%  | Bueno        | Buen manejo con detalles menores |
| 70-79%  | Suficiente   | Cumple requisitos mínimos        |
| <70%    | Insuficiente | No alcanza el nivel requerido    |

---

## 🏛️ Adaptación por Dominio

Cada aprendiz implementa el estado global para su dominio asignado:

| Dominio        | Store Principal    | Entidades                    | Acciones Clave                         |
| -------------- | ------------------ | ---------------------------- | -------------------------------------- |
| 📖 Biblioteca  | useLibraryStore    | Book, Loan, Member           | addBook, borrowBook, returnBook        |
| 💊 Farmacia    | usePharmacyStore   | Medicine, Sale, Inventory    | addMedicine, sell, updateStock         |
| 🏋️ Gimnasio    | useGymStore        | Member, Routine, Attendance  | registerMember, checkIn, assignRoutine |
| 🏫 Escuela     | useSchoolStore     | Student, Course, Grade       | enrollStudent, assignGrade, addCourse  |
| 🍽️ Restaurante | useRestaurantStore | Dish, Order, Table           | addDish, takeOrder, closeTable         |
| 🏥 Hospital    | useHospitalStore   | Patient, Appointment, Doctor | registerPatient, scheduleAppointment   |
| 🎬 Cine        | useCinemaStore     | Movie, Showtime, Ticket      | addMovie, sellTicket, scheduleShow     |
| 🏨 Hotel       | useHotelStore      | Room, Reservation, Guest     | bookRoom, checkIn, checkOut            |

---

## ✅ Lista de Verificación del Proyecto

### Requisitos Funcionales

- [ ] Store principal con estado del dominio
- [ ] Acciones CRUD para entidades principales
- [ ] Selectores derivados (filtros, totales, búsquedas)
- [ ] Persistencia en localStorage
- [ ] Integración con React Router
- [ ] Al menos 2 stores separados

### Requisitos Técnicos

- [ ] TypeScript estricto (sin any)
- [ ] Stores tipados con interfaces
- [ ] Acciones con payload tipado
- [ ] Selectores con tipos de retorno
- [ ] Middleware persist configurado
- [ ] Componentes con suscripción selectiva

### Requisitos de Calidad

- [ ] Código organizado en módulos
- [ ] Nombres descriptivos en inglés
- [ ] Comentarios en español (QUÉ/PARA/IMPACTO)
- [ ] Sin warnings ni errores
- [ ] Performance optimizada

---

## 📝 Criterios de Aprobación

- **Mínimo 70%** en cada tipo de evidencia
- Proyecto funcional y tipado correctamente
- Implementación coherente con el dominio asignado
- Sin copia de otros aprendices (dominio único)

---

_Rúbrica Semana 08 · Zustand_
