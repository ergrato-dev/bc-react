# 📊 Rúbrica de Evaluación - Semana 09

## Redux Toolkit con TypeScript

### 📋 Información General

| Aspecto        | Detalle                      |
| -------------- | ---------------------------- |
| **Semana**     | 09                           |
| **Tema**       | Redux Toolkit con TypeScript |
| **Etapa**      | 3 - React Intermedio         |
| **Duración**   | 8 horas                      |
| **Entregable** | Proyecto (100%)              |

---

## 📚 Recursos de Aprendizaje (No Evaluados)

La teoría y los ejercicios son materiales de preparación para el proyecto:

| Recurso                        | Propósito                                              |
| ------------------------------ | ------------------------------------------------------ |
| **Teoría** (1-teoria/)         | Comprender arquitectura Flux, Redux Toolkit, slices    |
| **Ejercicios** (2-ejercicios/) | Practicar conceptos antes de aplicarlos en el proyecto |

> 💡 **Recomendación:** Completa la teoría y los ejercicios antes de iniciar el proyecto para un mejor desempeño.

---

## 🎯 Criterios de Evaluación

### Proyecto Semanal (100%)

#### Funcionalidad (40%)

| Criterio                                       | Puntos |
| ---------------------------------------------- | ------ |
| Store configurado con configureStore           | 5      |
| Múltiples slices organizados                   | 5      |
| Tipos RootState y AppDispatch exportados       | 4      |
| Hooks tipados (useAppSelector, useAppDispatch) | 4      |
| CRUD completo con thunks asíncronos            | 8      |
| Estados de carga (loading, success, error)     | 6      |
| Selectores optimizados con createSelector      | 4      |
| UI reactiva a cambios de estado                | 4      |

#### Adaptación al Dominio (35%)

| Criterio                                 | Puntos |
| ---------------------------------------- | ------ |
| Entidades adaptadas al dominio asignado  | 10     |
| Acciones con sentido en el contexto      | 10     |
| UI coherente con el dominio              | 8      |
| Normalización de datos con entityAdapter | 7      |

#### Calidad del Código (25%)

| Criterio                                           | Puntos |
| -------------------------------------------------- | ------ |
| TypeScript estricto sin `any`                      | 7      |
| Código limpio y organizado                         | 6      |
| Separación de concerns (slices, selectors, thunks) | 6      |
| Comentarios explicativos                           | 3      |
| DevTools integrado                                 | 3      |

---

## 🏛️ Dominios para el Proyecto

Cada aprendiz implementa el proyecto con su dominio asignado:

| #   | Dominio            | Entidades Sugeridas           | Thunks                         |
| --- | ------------------ | ----------------------------- | ------------------------------ |
| 1   | 📖 Biblioteca      | Book, Author, Loan            | fetchBooks, createLoan         |
| 2   | 💊 Farmacia        | Medicine, Sale, Supplier      | fetchMedicines, processSale    |
| 3   | 🏋️ Gimnasio        | Member, Class, Membership     | fetchMembers, enrollClass      |
| 4   | 🏫 Escuela         | Student, Course, Grade        | fetchStudents, submitGrade     |
| 5   | 🐾 Veterinaria     | Pet, Owner, Appointment       | fetchPets, scheduleAppointment |
| 6   | 🍽️ Restaurante     | Dish, Order, Table            | fetchMenu, createOrder         |
| 7   | 🏦 Banco           | Account, Transaction, Client  | fetchAccounts, processTransfer |
| 8   | 🚕 Taxi            | Driver, Trip, Vehicle         | fetchDrivers, requestTrip      |
| 9   | 🏥 Hospital        | Patient, Doctor, Appointment  | fetchPatients, bookAppointment |
| 10  | 🎬 Cine            | Movie, Showtime, Ticket       | fetchMovies, purchaseTicket    |
| 11  | 🏨 Hotel           | Room, Guest, Reservation      | fetchRooms, makeReservation    |
| 12  | ✈️ Agencia Viajes  | Destination, Package, Booking | fetchPackages, bookTrip        |
| 13  | 🚗 Concesionario   | Car, Customer, Sale           | fetchInventory, processSale    |
| 14  | 👗 Tienda Ropa     | Product, Category, Cart       | fetchProducts, checkout        |
| 15  | 🔧 Taller Mecánico | Vehicle, Service, Invoice     | fetchServices, createInvoice   |

---

## 📈 Escala de Calificación

| Calificación      | Rango   | Descripción                                      |
| ----------------- | ------- | ------------------------------------------------ |
| **Excelente**     | 90-100% | Dominio completo de Redux Toolkit con TypeScript |
| **Bueno**         | 80-89%  | Buen manejo de conceptos y aplicación práctica   |
| **Satisfactorio** | 70-79%  | Comprensión adecuada con áreas de mejora         |
| **En desarrollo** | 60-69%  | Comprensión básica, requiere práctica adicional  |
| **Insuficiente**  | <60%    | No alcanza los objetivos mínimos                 |

---

## ✅ Criterios de Aprobación

- **Mínimo requerido:** 70% en el proyecto
- **Entrega puntual** del proyecto
- **Código funcional** y bien documentado
- **Implementación coherente** con el dominio asignado

---

## 📋 Formato de Entrega

### Preparación (No evaluada)

- [ ] Revisar material teórico (1-teoria/)
- [ ] Completar ejercicios guiados (2-ejercicios/)

### Proyecto (100% de la evaluación)

- [ ] Proyecto implementado con dominio asignado
- [ ] Store con múltiples slices funcionando
- [ ] Al menos 2 thunks asíncronos implementados
- [ ] Selectores con createSelector
- [ ] Código con TypeScript estricto
- [ ] README del proyecto con instrucciones

### Opcionales (Puntos Extra)

- [ ] RTK Query implementado para algún endpoint
- [ ] Tests con @testing-library/react
- [ ] Persistencia con redux-persist
- [ ] Documentación de arquitectura Redux

---

## 🔍 Diferencias Clave: Redux Toolkit vs Zustand

| Concepto   | Redux Toolkit               | Zustand                  |
| ---------- | --------------------------- | ------------------------ |
| Estado     | createSlice → slice.reducer | create((set) => ({...})) |
| Acciones   | slice.actions               | Funciones en el store    |
| Async      | createAsyncThunk            | Async functions directas |
| Selectores | createSelector              | Inline o funciones       |
| Acceso     | useSelector + dispatch      | Hook directo del store   |
| DevTools   | Automático                  | Middleware manual        |

---

## 📝 Notas para el Instructor

1. **Redux Toolkit simplifica Redux** - Enfatizar que RTK es el estándar moderno
2. **Comparar con Zustand** - Los estudiantes ya conocen Zustand, usar para contexto
3. **Immer está integrado** - Los reducers pueden "mutar" directamente
4. **TypeScript es crucial** - Sin tipos, Redux pierde gran parte de su valor
5. **DevTools son esenciales** - Enseñar debugging con time-travel

---

[← Volver a Semana 09](README.md)
