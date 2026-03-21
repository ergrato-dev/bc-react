# Ejercicio 04: Web Vitals y Métricas de Rendimiento

## 🎯 Objetivo

Implementar medición de Web Vitals (LCP, FID, CLS) y optimizar una aplicación para cumplir los umbrales óptimos.

## ⏱️ Duración

50 minutos

---

## 📋 Instrucciones

En este ejercicio aprenderás a:

1. Configurar `web-vitals` para medir métricas reales
2. Crear un hook personalizado para monitoreo
3. Identificar y corregir problemas de rendimiento
4. Optimizar LCP, FID y CLS

---

## 🚀 Pasos

### Paso 1: Crear el proyecto

```bash
pnpm create vite@latest web-vitals-demo -- --template react-ts
cd web-vitals-demo
pnpm add web-vitals
pnpm install
```

### Paso 2: Configurar medición de Web Vitals

Implementa el módulo de reportes en `reportWebVitals.ts`.

### Paso 3: Crear hook useWebVitals

Un hook que exponga las métricas en tiempo real.

### Paso 4: Identificar problemas

Analiza el componente `ProblematicPage.tsx` y encuentra los problemas.

### Paso 5: Aplicar optimizaciones

Corrige los problemas de LCP, FID y CLS en `OptimizedPage.tsx`.

---

## 📁 Estructura de Archivos

```
ejercicio-04-web-vitals/
├── README.md
├── starter/
│   ├── App.tsx
│   ├── reportWebVitals.ts
│   ├── useWebVitals.ts
│   ├── ProblematicPage.tsx
│   ├── OptimizedPage.tsx
│   └── VitalsDisplay.tsx
└── solution/
    ├── App.tsx
    ├── reportWebVitals.ts
    ├── useWebVitals.ts
    ├── ProblematicPage.tsx
    ├── OptimizedPage.tsx
    └── VitalsDisplay.tsx
```

---

## 📊 Umbrales de Web Vitals

| Métrica | Bueno   | Mejorar   | Pobre   |
| ------- | ------- | --------- | ------- |
| LCP     | ≤ 2.5s  | 2.5-4s    | > 4s    |
| FID     | ≤ 100ms | 100-300ms | > 300ms |
| CLS     | ≤ 0.1   | 0.1-0.25  | > 0.25  |

---

## ✅ Criterios de Éxito

- [ ] Las métricas se muestran en tiempo real
- [ ] LCP optimizado a < 2.5s
- [ ] CLS optimizado a < 0.1
- [ ] FID optimizado a < 100ms
- [ ] El código está bien comentado explicando cada optimización
