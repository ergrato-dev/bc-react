# 📋 Rúbrica de Evaluación - Semana 07

## React Router v6

---

## 🎯 Competencias a Evaluar

### 1. Conocimiento (30%)

#### Conceptos de Routing (15%)

| Nivel        | Descripción                                                         | Puntos |
| ------------ | ------------------------------------------------------------------- | ------ |
| Excelente    | Explica SPA vs MPA, client-side routing y sus ventajas/limitaciones | 15     |
| Bueno        | Comprende routing básico y diferencias entre enfoques               | 12     |
| Suficiente   | Entiende conceptos básicos pero confunde algunos términos           | 9      |
| Insuficiente | No comprende los fundamentos del routing en SPAs                    | 0-6    |

#### API de React Router (15%)

| Nivel        | Descripción                                                   | Puntos |
| ------------ | ------------------------------------------------------------- | ------ |
| Excelente    | Domina BrowserRouter, Routes, Route, Link, NavLink, Outlet    | 15     |
| Bueno        | Usa correctamente los componentes principales                 | 12     |
| Suficiente   | Conoce componentes básicos pero no avanzados                  | 9      |
| Insuficiente | No distingue entre los diferentes componentes de React Router | 0-6    |

---

### 2. Desempeño (40%)

#### Configuración de Rutas (10%)

| Nivel        | Descripción                                                 | Puntos |
| ------------ | ----------------------------------------------------------- | ------ |
| Excelente    | Configura rutas con tipado completo y estructura organizada | 10     |
| Bueno        | Rutas funcionan correctamente con tipado básico             | 8      |
| Suficiente   | Rutas funcionan pero sin tipado o mal organizadas           | 6      |
| Insuficiente | Errores en la configuración básica de rutas                 | 0-4    |

#### Rutas Dinámicas (10%)

| Nivel        | Descripción                                              | Puntos |
| ------------ | -------------------------------------------------------- | ------ |
| Excelente    | Implementa useParams y useSearchParams con tipos seguros | 10     |
| Bueno        | Rutas dinámicas funcionan con tipado básico              | 8      |
| Suficiente   | Parámetros funcionan pero sin validación                 | 6      |
| Insuficiente | No logra implementar rutas dinámicas correctamente       | 0-4    |

#### Layouts y Anidamiento (10%)

| Nivel        | Descripción                                                         | Puntos |
| ------------ | ------------------------------------------------------------------- | ------ |
| Excelente    | Layouts reutilizables con Outlet, rutas anidadas bien estructuradas | 10     |
| Bueno        | Outlet funciona, layouts básicos implementados                      | 8      |
| Suficiente   | Layouts simples sin aprovechar anidamiento                          | 6      |
| Insuficiente | No implementa layouts correctamente                                 | 0-4    |

#### Rutas Protegidas (10%)

| Nivel        | Descripción                                           | Puntos |
| ------------ | ----------------------------------------------------- | ------ |
| Excelente    | Guards tipados, redirección correcta, manejo de roles | 10     |
| Bueno        | Protección básica funciona con redirección            | 8      |
| Suficiente   | Intenta proteger rutas pero con problemas             | 6      |
| Insuficiente | No logra implementar protección de rutas              | 0-4    |

---

### 3. Producto (30%)

#### Funcionalidad (15%)

| Nivel        | Descripción                                                 | Puntos |
| ------------ | ----------------------------------------------------------- | ------ |
| Excelente    | Navegación completa, todas las rutas funcionan, sin errores | 15     |
| Bueno        | Navegación funciona con mínimos bugs                        | 12     |
| Suficiente   | Navegación básica funciona, algunos problemas               | 9      |
| Insuficiente | Navegación con errores críticos o incompleta                | 0-6    |

#### Calidad del Código (10%)

| Nivel        | Descripción                                                | Puntos |
| ------------ | ---------------------------------------------------------- | ------ |
| Excelente    | TypeScript estricto, código limpio, rutas bien organizadas | 10     |
| Bueno        | Tipado correcto, código legible                            | 8      |
| Suficiente   | Funciona pero con tipos any o código desorganizado         | 6      |
| Insuficiente | Sin tipado, código difícil de mantener                     | 0-4    |

#### Experiencia de Usuario (5%)

| Nivel        | Descripción                                                | Puntos |
| ------------ | ---------------------------------------------------------- | ------ |
| Excelente    | Navegación fluida, estados de carga, manejo de errores 404 | 5      |
| Bueno        | Navegación funcional con feedback básico                   | 4      |
| Suficiente   | Navegación funciona sin indicadores visuales               | 3      |
| Insuficiente | Experiencia confusa o broken                               | 0-2    |

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

## ✅ Checklist de Entrega

### Ejercicios

- [ ] Ejercicio 01: Configuración básica de React Router
- [ ] Ejercicio 02: Navegación con Link y NavLink
- [ ] Ejercicio 03: Rutas dinámicas con useParams
- [ ] Ejercicio 04: Layouts anidados con Outlet
- [ ] Ejercicio 05: Rutas protegidas con guards

### Proyecto Semanal

- [ ] BrowserRouter configurado correctamente
- [ ] Mínimo 5 rutas implementadas
- [ ] Al menos 2 rutas con parámetros dinámicos
- [ ] Layout principal con navegación
- [ ] Ruta protegida con redirección
- [ ] Página 404 personalizada
- [ ] Código TypeScript sin errores
- [ ] README con instrucciones del dominio

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
