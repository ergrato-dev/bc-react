# 📋 Rúbrica de Evaluación - Semana 07

## React Router v6

---

## 📊 Distribución de Evaluación

| Componente           | Peso |
| -------------------- | ---- |
| **Proyecto Semanal** | 100% |

---

## 📖 Recursos de Aprendizaje (No Evaluados)

La teoría y los ejercicios son recursos de preparación para el proyecto. No son entregables evaluados, pero se recomienda completarlos antes de iniciar el proyecto.

### Teoría

- Fundamentos de routing en SPAs
- Configuración de React Router v6
- Rutas dinámicas y parámetros
- Layouts y rutas anidadas
- Rutas protegidas y autenticación

### Ejercicios Guiados

- Ejercicio 01: Configuración básica de React Router
- Ejercicio 02: Navegación con Link y NavLink
- Ejercicio 03: Rutas dinámicas con useParams
- Ejercicio 04: Layouts anidados con Outlet
- Ejercicio 05: Rutas protegidas con guards

---

## 🎯 Proyecto (100%)

### Funcionalidad (40 puntos)

| Nivel        | Descripción                                                   | Puntos |
| ------------ | ------------------------------------------------------------- | ------ |
| Excelente    | Navegación completa, todas las rutas funcionan, sin errores   | 36-40  |
| Bueno        | Navegación funciona con mínimos bugs                          | 28-35  |
| Suficiente   | Navegación básica funciona, algunos problemas menores         | 20-27  |
| Insuficiente | Navegación con errores críticos o funcionalidades incompletas | 0-19   |

**Criterios específicos:**

- BrowserRouter configurado correctamente (8 pts)
- Mínimo 5 rutas implementadas (8 pts)
- Al menos 2 rutas con parámetros dinámicos usando useParams (8 pts)
- Ruta protegida con redirección funcional (8 pts)
- Página 404 personalizada (8 pts)

### Adaptación al Dominio (35 puntos)

| Nivel        | Descripción                                                   | Puntos |
| ------------ | ------------------------------------------------------------- | ------ |
| Excelente    | Rutas coherentes con el dominio, entidades bien representadas | 32-35  |
| Bueno        | Dominio aplicado correctamente con adaptaciones menores       | 25-31  |
| Suficiente   | Dominio reconocible pero con inconsistencias                  | 18-24  |
| Insuficiente | Dominio no aplicado o rutas genéricas sin contexto            | 0-17   |

**Criterios específicos:**

- Rutas nombradas según entidades del dominio (10 pts)
- Navegación lógica para el contexto del negocio (10 pts)
- Parámetros dinámicos relevantes al dominio (8 pts)
- README documenta el dominio y sus rutas (7 pts)

### Calidad del Código (25 puntos)

| Nivel        | Descripción                                                | Puntos |
| ------------ | ---------------------------------------------------------- | ------ |
| Excelente    | TypeScript estricto, código limpio, rutas bien organizadas | 23-25  |
| Bueno        | Tipado correcto, código legible y mantenible               | 18-22  |
| Suficiente   | Funciona pero con tipos any o código desorganizado         | 13-17  |
| Insuficiente | Sin tipado, código difícil de mantener o con errores       | 0-12   |

**Criterios específicos:**

- TypeScript sin errores de compilación (8 pts)
- Parámetros de ruta tipados correctamente (6 pts)
- Componentes organizados y reutilizables (6 pts)
- Layout principal con Outlet implementado (5 pts)

---

## 📊 Escala de Calificación

| Rango  | Calificación | Descripción      |
| ------ | ------------ | ---------------- |
| 90-100 | A            | Excelente        |
| 80-89  | B            | Bueno            |
| 70-79  | C            | Suficiente       |
| 60-69  | D            | Necesita mejorar |
| 0-59   | F            | Insuficiente     |

---

## ✅ Criterios de Aprobación

- **Mínimo 70 puntos** en el proyecto para aprobar la semana
- El proyecto debe compilar sin errores de TypeScript
- Todas las rutas principales deben ser funcionales
- El dominio asignado debe estar claramente implementado

---

## 📋 Formato de Entrega

### Proyecto Semanal (Único Entregable)

- [ ] Repositorio con código fuente del proyecto
- [ ] BrowserRouter configurado correctamente
- [ ] Mínimo 5 rutas implementadas
- [ ] Al menos 2 rutas con parámetros dinámicos
- [ ] Layout principal con navegación
- [ ] Ruta protegida con redirección
- [ ] Página 404 personalizada
- [ ] Código TypeScript sin errores
- [ ] README con instrucciones y descripción del dominio

---

## 🏛️ Adaptación por Dominio

El proyecto debe adaptarse al dominio asignado:

| Dominio     | Rutas Sugeridas                                           |
| ----------- | --------------------------------------------------------- |
| Biblioteca  | /libros, /libros/:id, /autores, /prestamos, /mi-cuenta    |
| Farmacia    | /medicamentos, /medicamentos/:id, /ventas, /inventario    |
| Gimnasio    | /miembros, /miembros/:id, /rutinas, /clases, /horarios    |
| Restaurante | /menu, /menu/:categoria, /reservas, /ordenes, /cocina     |
| E-commerce  | /productos, /productos/:id, /carrito, /checkout, /pedidos |

---

## 📝 Notas para el Instructor

- Verificar que las rutas protegidas redirijan correctamente
- Evaluar el uso de TypeScript en parámetros de ruta
- Comprobar que Outlet renderice los componentes hijos
- Revisar el manejo de rutas no encontradas (404)
- Verificar navegación programática con useNavigate

---

_Semana 07 · React Router v6_
