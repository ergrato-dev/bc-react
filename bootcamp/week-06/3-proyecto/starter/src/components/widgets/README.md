# 🎨 Widgets del Dashboard

## 📋 Instrucciones

Crea **al menos 3 widgets** para tu dominio asignado. Cada widget debe:

1. Usar un componente `Card` como contenedor
2. Mostrar datos relevantes del dominio
3. Usar al menos un custom hook (`useFetch`, `useFilter`, etc.)
4. Manejar estados de loading y error
5. Aplicar estilos del tema

## 📁 Estructura Sugerida

```
widgets/
├── README.md           # Este archivo
├── index.ts            # Barrel export
├── StatsWidget.tsx     # Estadísticas generales
├── ListWidget.tsx      # Lista de items
├── AlertWidget.tsx     # Alertas/notificaciones
└── ...                 # Widgets adicionales
```

## 🏛️ Ejemplos por Dominio

### 📖 Biblioteca

| Widget        | Descripción                            | Hooks usados        |
| ------------- | -------------------------------------- | ------------------- |
| `BooksStats`  | Libros totales, disponibles, prestados | useFetch            |
| `RecentLoans` | Últimos préstamos realizados           | useFetch, useFilter |
| `DueAlerts`   | Préstamos por vencer                   | useFetch            |

### 💊 Farmacia

| Widget         | Descripción             | Hooks usados        |
| -------------- | ----------------------- | ------------------- |
| `StockAlerts`  | Medicamentos bajo stock | useFetch            |
| `TodaySales`   | Ventas del día          | useFetch            |
| `ExpiringMeds` | Próximos a caducar      | useFetch, useFilter |

### 🏋️ Gimnasio

| Widget                | Descripción           | Hooks usados |
| --------------------- | --------------------- | ------------ |
| `DailyCheckins`       | Check-ins de hoy      | useFetch     |
| `PopularClasses`      | Clases más populares  | useFetch     |
| `ExpiringMemberships` | Membresías por vencer | useFetch     |

## 🔧 Template de Widget

```tsx
import React from 'react';
import { useFetch } from '@/hooks';
import { Card } from '@/components/ui/Card';
import { Spinner } from '@/components/ui/Spinner';
import type { WidgetProps, DomainItem } from '@/types';

interface MyWidgetProps extends WidgetProps {
  // Props específicas del widget
}

export const MyWidget: React.FC<MyWidgetProps> = ({ title }) => {
  const { data, loading, error, refetch } =
    useFetch<DomainItem[]>('/api/items');

  if (loading) {
    return (
      <Card title={title}>
        <Spinner />
      </Card>
    );
  }

  if (error) {
    return (
      <Card title={title}>
        <p style={{ color: 'red' }}>Error: {error.message}</p>
        <button onClick={refetch}>Reintentar</button>
      </Card>
    );
  }

  return (
    <Card
      title={title}
      onRefresh={refetch}>
      {data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Card>
  );
};
```

## ✅ Checklist

- [ ] Widget 1: ******\_\_\_\_****** (stats/resumen)
- [ ] Widget 2: ******\_\_\_\_****** (lista/detalle)
- [ ] Widget 3: ******\_\_\_\_****** (alertas/acciones)
- [ ] Todos usan Card como contenedor
- [ ] Todos manejan loading state
- [ ] Todos manejan error state
- [ ] Todos usan al menos un custom hook
