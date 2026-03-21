// ============================================
// EJERCICIO 01: COMPONENTE PESADO - HeavyTable.tsx (SOLUTION)
// ============================================
// Tabla de datos que se carga dinámicamente

import { type FC } from 'react';

// ============================================
// TIPOS
// ============================================
interface TableRow {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  amount: number;
}

// ============================================
// GENERADOR DE DATOS
// ============================================
const generateTableData = (): TableRow[] => {
  const statuses: ('active' | 'inactive')[] = ['active', 'inactive'];
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Usuario ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: statuses[Math.floor(Math.random() * 2)],
    amount: Math.floor(Math.random() * 10000) + 100,
  }));
};

// ============================================
// COMPONENTE
// ============================================
const HeavyTable: FC = () => {
  const data = generateTableData();

  return (
    <div className="heavy-table">
      <h2>Tabla de Datos</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>
                  <span className={`status status-${row.status}`}>
                    {row.status === 'active' ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td>${row.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-note">
        Mostrando {data.length} registros cargados dinámicamente.
      </p>
    </div>
  );
};

export default HeavyTable;
