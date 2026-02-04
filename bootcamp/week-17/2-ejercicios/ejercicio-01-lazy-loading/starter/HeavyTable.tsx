// ============================================
// EJERCICIO 01: COMPONENTE PESADO - HeavyTable.tsx (STARTER)
// ============================================
// Simula una tabla pesada con muchos datos

import { type FC } from 'react';

// ============================================
// PASO 1: Crear datos de la tabla
// ============================================
console.log('--- HeavyTable: Generando datos ---');

// Descomenta las siguientes líneas:
// interface TableRow {
//   id: number;
//   name: string;
//   email: string;
//   status: 'active' | 'inactive';
//   amount: number;
// }

// const generateTableData = (): TableRow[] => {
//   const statuses: ('active' | 'inactive')[] = ['active', 'inactive'];
//   return Array.from({ length: 50 }, (_, i) => ({
//     id: i + 1,
//     name: `Usuario ${i + 1}`,
//     email: `user${i + 1}@example.com`,
//     status: statuses[Math.floor(Math.random() * 2)],
//     amount: Math.floor(Math.random() * 10000) + 100,
//   }));
// };

// ============================================
// PASO 2: Componente de la tabla
// ============================================
console.log('--- HeavyTable: Componente ---');

// Descomenta el componente:
// const HeavyTable: FC = () => {
//   const data = generateTableData();
//
//   return (
//     <div className="heavy-table">
//       <h2>Tabla de Datos</h2>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Nombre</th>
//               <th>Email</th>
//               <th>Estado</th>
//               <th>Monto</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(row => (
//               <tr key={row.id}>
//                 <td>{row.id}</td>
//                 <td>{row.name}</td>
//                 <td>{row.email}</td>
//                 <td>
//                   <span className={`status status-${row.status}`}>
//                     {row.status === 'active' ? 'Activo' : 'Inactivo'}
//                   </span>
//                 </td>
//                 <td>${row.amount.toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <p className="table-note">
//         Mostrando {data.length} registros cargados dinámicamente.
//       </p>
//     </div>
//   );
// };

// Placeholder temporal
const HeavyTable: FC = () => {
  return (
    <div className="heavy-table">
      <p>Descomenta el código del componente HeavyTable</p>
    </div>
  );
};

export default HeavyTable;
