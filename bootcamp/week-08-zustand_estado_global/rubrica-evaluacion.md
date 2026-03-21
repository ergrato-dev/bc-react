# 📋 Rúbrica de Evaluación - Semana 08

## Gestión de Estado Global con Zustand

---

## 📚 Recursos de Aprendizaje (No Evaluados)

La teoría y los ejercicios son materiales de preparación para el proyecto. No son entregables evaluados, pero son esenciales para desarrollar las competencias necesarias.

### Conocimientos Esperados 🧠

- Comprensión del problema del estado global y prop drilling
- Arquitectura de Zustand: stores, acciones, selectores
- Patrones de organización de stores
- Selectores y optimización de performance
- Persistencia y middleware

### Habilidades a Desarrollar 💪

- Crear stores tipados con TypeScript
- Implementar acciones con payload tipado
- Usar selectores para optimización
- Aplicar middleware de persistencia
- Integrar Zustand con componentes React

---

## 🎯 Competencias a Evaluar

### Proyecto (100%) 📦

#### Funcionalidad (40%)

| Criterio               | Excelente (100%)                               | Bueno (80%)                    | Suficiente (70%)             | Insuficiente (<70%)  |
| ---------------------- | ---------------------------------------------- | ------------------------------ | ---------------------------- | -------------------- |
| Features completas     | Todas las features implementadas y funcionando | Features principales completas | Features básicas funcionando | Features incompletas |
| Store principal        | Store completo con estado y acciones           | Store funcional                | Store básico                 | Store incompleto     |
| Selectores             | Selectores derivados con optimización          | Selectores funcionales         | Selectores básicos           | Sin selectores       |
| Persistencia           | localStorage configurado y funcionando         | Persistencia correcta          | Persistencia básica          | Sin persistencia     |
| Integración con Router | Estado sincronizado con navegación             | Integración correcta           | Integración básica           | Sin integración      |

#### Adaptación al Dominio (35%)

| Criterio               | Excelente (100%)                           | Bueno (80%)                 | Suficiente (70%)    | Insuficiente (<70%)       |
| ---------------------- | ------------------------------------------ | --------------------------- | ------------------- | ------------------------- |
| Coherencia del dominio | Entidades y acciones 100% contextualizadas | Buena adaptación al dominio | Adaptación básica   | Sin adaptación            |
| Originalidad           | Implementación única y creativa            | Implementación propia       | Implementación base | Copia de otros aprendices |
| Entidades modeladas    | Modelos completos y relacionados           | Modelos correctos           | Modelos básicos     | Modelos incompletos       |

#### Calidad del Código (25%)

| Criterio              | Excelente (100%)                         | Bueno (80%)      | Suficiente (70%)    | Insuficiente (<70%)  |
| --------------------- | ---------------------------------------- | ---------------- | ------------------- | -------------------- |
| Tipado TypeScript     | Tipos exhaustivos, sin any               | Tipos correctos  | Tipos parciales     | Muchos any o errores |
| Organización          | Stores modulares, bien separados         | Estructura clara | Organización básica | Código desorganizado |
| Nombres y comentarios | Nombres descriptivos, comentarios claros | Buenos nombres   | Nombres aceptables  | Nombres confusos     |
| Sin errores           | Cero warnings y errores                  | Mínimos warnings | Algunos warnings    | Errores en consola   |

---

## 📊 Distribución de la Evaluación

| Componente            | Peso     |
| --------------------- | -------- |
| Funcionalidad         | 40%      |
| Adaptación al Dominio | 35%      |
| Calidad del Código    | 25%      |
| **Total Proyecto**    | **100%** |

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

- **Mínimo 70%** en la calificación total del proyecto
- Proyecto funcional y tipado correctamente
- Implementación coherente con el dominio asignado
- Sin copia de otros aprendices (dominio único)

---

## 📤 Formato de Entrega

### Entregable Único: Proyecto Semanal

```
week-08-zustand_estado_global/
└── 3-proyecto/
    └── mi-proyecto/
        ├── src/
        │   ├── stores/       # Stores de Zustand
        │   ├── components/   # Componentes React
        │   └── ...
        ├── package.json
        └── README.md         # Documentación del proyecto
```

**Fecha límite**: Según calendario del bootcamp

> 💡 Los ejercicios (carpeta `2-ejercicios/`) son para práctica personal y no requieren entrega.

---

_Rúbrica Semana 08 · Zustand_
