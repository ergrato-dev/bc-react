# 📊 Rúbrica de Evaluación - Semana 09

## Redux Toolkit con TypeScript

### 📋 Información General

| Aspecto      | Detalle                      |
| ------------ | ---------------------------- |
| **Semana**   | 09                           |
| **Tema**     | Redux Toolkit con TypeScript |
| **Etapa**    | 3 - React Intermedio         |
| **Duración** | 8 horas                      |

---

## 🎯 Criterios de Evaluación

### 1. Conocimiento Teórico (30%)

#### Excelente (90-100%)

- Explica claramente la arquitectura Flux y el flujo unidireccional
- Comprende la diferencia entre Redux clásico y Redux Toolkit
- Describe el ciclo de vida de una acción: dispatch → reducer → state → UI
- Entiende cuándo usar Redux vs alternativas (Zustand, Context)
- Conoce los conceptos de normalización y selectores memoizados

#### Bueno (70-89%)

- Comprende los principios básicos de Redux
- Sabe configurar un store con Redux Toolkit
- Entiende slices, reducers y actions
- Conoce createAsyncThunk para operaciones asíncronas

#### Suficiente (50-69%)

- Conoce los conceptos básicos de Redux
- Puede explicar qué es un slice y un reducer
- Entiende el flujo básico de datos

#### Insuficiente (<50%)

- No comprende el patrón Redux
- Confunde conceptos fundamentales
- No puede explicar el flujo de datos

---

### 2. Ejercicios Prácticos (40%)

#### Ejercicio 1: Primer Slice (20%)

| Criterio                                         | Puntos |
| ------------------------------------------------ | ------ |
| Interface de estado tipada correctamente         | 3      |
| Reducers con PayloadAction tipado                | 4      |
| Actions exportadas y nombradas correctamente     | 3      |
| Slice integrado en el store                      | 5      |
| Componente consume estado con useSelector tipado | 5      |

#### Ejercicio 2: Async Thunk (20%)

| Criterio                                        | Puntos |
| ----------------------------------------------- | ------ |
| createAsyncThunk con tipos correctos            | 4      |
| Manejo de estados: pending, fulfilled, rejected | 6      |
| extraReducers implementados correctamente       | 4      |
| Componente muestra loading/error/data           | 4      |
| Tipos de respuesta API definidos                | 2      |

#### Ejercicio 3: Selectores (20%)

| Criterio                          | Puntos |
| --------------------------------- | ------ |
| Selectores simples tipados        | 3      |
| createSelector con memoización    | 5      |
| Selectores derivados con cálculos | 4      |
| Selectores parametrizados         | 4      |
| Reutilización de selectores base  | 4      |

#### Ejercicio 4: Entity Adapter (20%)

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| createEntityAdapter configurado         | 4      |
| Entidades normalizadas (ids + entities) | 5      |
| CRUD con métodos del adapter            | 5      |
| Selectores generados utilizados         | 4      |
| Tipos de entidad correctos              | 2      |

#### Ejercicio 5: RTK Query Intro (20%)

| Criterio                       | Puntos |
| ------------------------------ | ------ |
| API slice creado con createApi | 4      |
| Endpoints query definidos      | 4      |
| Hooks generados utilizados     | 4      |
| Cache y refetch funcionando    | 4      |
| Tipos de respuesta inferidos   | 4      |

---

### 3. Proyecto Semanal (30%)

#### Estructura y Configuración (25%)

| Criterio                                       | Puntos |
| ---------------------------------------------- | ------ |
| Store configurado con configureStore           | 5      |
| Múltiples slices organizados                   | 5      |
| Tipos RootState y AppDispatch exportados       | 5      |
| Hooks tipados (useAppSelector, useAppDispatch) | 5      |
| DevTools integrado                             | 5      |

#### Funcionalidad (40%)

| Criterio                                   | Puntos |
| ------------------------------------------ | ------ |
| CRUD completo con thunks asíncronos        | 10     |
| Estados de carga (loading, success, error) | 8      |
| Selectores optimizados con createSelector  | 8      |
| Normalización de datos con entityAdapter   | 8      |
| UI reactiva a cambios de estado            | 6      |

#### Calidad de Código (20%)

| Criterio                                           | Puntos |
| -------------------------------------------------- | ------ |
| TypeScript estricto sin `any`                      | 5      |
| Código limpio y organizado                         | 5      |
| Separación de concerns (slices, selectors, thunks) | 5      |
| Comentarios explicativos                           | 5      |

#### Adaptación al Dominio (15%)

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| Entidades adaptadas al dominio asignado | 5      |
| Acciones con sentido en el contexto     | 5      |
| UI coherente con el dominio             | 5      |

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

## ✅ Checklist de Entrega

### Obligatorios

- [ ] Ejercicios 1-5 completados con código funcional
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
