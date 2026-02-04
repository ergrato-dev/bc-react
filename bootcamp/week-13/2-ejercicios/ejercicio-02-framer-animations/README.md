# Ejercicio 02: Animaciones con Framer Motion

## 🎯 Objetivo

Crear componentes animados reutilizables usando Framer Motion: aparición, hover, gestos y transiciones de lista.

## ⏱️ Duración

45 minutos

## 📋 Descripción

Implementarás varios patrones de animación comunes en aplicaciones React modernas usando Framer Motion.

## 🛠️ Requisitos Previos

- Teoría: `02-framer-motion.md`
- Instalación: `pnpm add framer-motion`

## 📝 Pasos

### Paso 1: FadeIn Component (10 min)

Crea un componente `FadeIn` que anime cualquier contenido al aparecer en pantalla.

**Props requeridas:**

- `children`: contenido a animar
- `delay?`: retraso opcional (default: 0)
- `duration?`: duración opcional (default: 0.5)
- `direction?`: 'up' | 'down' | 'left' | 'right' | 'none'

### Paso 2: AnimatedCard con gestos (15 min)

Crea una `AnimatedCard` que:

- Scale up suave en hover (1.02)
- Sombra más pronunciada en hover
- Scale down sutil al hacer click (0.98)
- Transición spring suave

### Paso 3: AnimatedList con stagger (15 min)

Crea `AnimatedList` que:

- Anima items al montarse con efecto escalonado (stagger)
- Usa `AnimatePresence` para animar salidas
- Cada item aparece con fade + slide desde abajo
- Stagger de 0.1s entre items

### Paso 4: Botón con loading state (5 min)

Crea `AnimatedButton` que:

- Muestra spinner animado durante loading
- Transiciona suavemente entre estados
- Desactiva interacción durante loading

## ✅ Criterios de Éxito

- [ ] FadeIn funciona con todas las direcciones
- [ ] Card responde a hover y tap
- [ ] Lista anima entrada y salida de items
- [ ] Botón transiciona suavemente a loading
- [ ] Animaciones son suaves (60fps)
- [ ] No hay layout shifts inesperados

## 🎨 Resultado Esperado

```tsx
// Uso de FadeIn
<FadeIn direction="up" delay={0.2}>
  <h1>Título animado</h1>
</FadeIn>

// Uso de AnimatedCard
<AnimatedCard>
  <p>Contenido de la tarjeta</p>
</AnimatedCard>

// Uso de AnimatedList
<AnimatedList items={users} renderItem={(user) => (
  <UserCard user={user} />
)} />

// Uso de AnimatedButton
<AnimatedButton loading={isSubmitting}>
  Guardar
</AnimatedButton>
```

## 📚 Recursos

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
