import { Item } from '../types';

/**
 * PROPS: Stats
 */
interface StatsProps {
  items: Item[];
}

/**
 * COMPONENTE: Stats
 *
 * Muestra estadísticas sobre los elementos.
 * Adapta las estadísticas a tu dominio específico.
 */
const Stats: React.FC<StatsProps> = ({ items }) => {
  // ============================================
  // CALCULAR ESTADÍSTICAS
  // ============================================

  const totalItems = items.length;

  // TODO: Calcular estadísticas específicas de tu dominio
  // Ejemplos:

  // Biblioteca:
  // const availableBooks = items.filter(item => item.available).length;
  // const unavailableBooks = totalItems - availableBooks;
  // const byCategory = items.reduce((acc, item) => {
  //   acc[item.category] = (acc[item.category] || 0) + 1;
  //   return acc;
  // }, {} as Record<string, number>);

  // Farmacia:
  // const inStock = items.filter(item => item.stock > 0).length;
  // const outOfStock = totalItems - inStock;
  // const prescriptionRequired = items.filter(item => item.requiresPrescription).length;

  // Gimnasio:
  // const activeMembers = items.filter(item => item.active).length;
  // const inactiveMembers = totalItems - activeMembers;
  // const byPlan = items.reduce((acc, item) => {
  //   acc[item.plan] = (acc[item.plan] || 0) + 1;
  //   return acc;
  // }, {} as Record<string, number>);

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="stats">
      <div className="stat-card">
        <span className="stat-value">{totalItems}</span>
        <span className="stat-label">Total</span>
      </div>

      {/* TODO: Agregar más tarjetas de estadísticas según tu dominio */}
      {/* Ejemplos:
        
        <div className="stat-card">
          <span className="stat-value">{availableBooks}</span>
          <span className="stat-label">Disponibles</span>
        </div>
        
        <div className="stat-card">
          <span className="stat-value">{unavailableBooks}</span>
          <span className="stat-label">Prestados</span>
        </div>
      */}
    </div>
  );
};

export default Stats;
