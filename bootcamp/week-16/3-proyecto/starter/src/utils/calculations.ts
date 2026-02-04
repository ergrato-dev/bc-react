import { Item, Stats } from '../types';

// ============================================
// FUNCIONES DE CÁLCULO
// ============================================
// Funciones costosas que deben memorizarse con useMemo

/**
 * Calcula estadísticas de los elementos
 * Esta función es computacionalmente costosa
 */
export const calculateStats = (items: Item[]): Stats => {
  // Simulamos una operación costosa
  console.log('📊 Calculando estadísticas...');

  if (items.length === 0) {
    return {
      total: 0,
      active: 0,
      inactive: 0,
      pending: 0,
      avgValue: 0,
      maxValue: 0,
      minValue: 0,
    };
  }

  const values = items.map((item) => item.value);

  return {
    total: items.length,
    active: items.filter((item) => item.status === 'active').length,
    inactive: items.filter((item) => item.status === 'inactive').length,
    pending: items.filter((item) => item.status === 'pending').length,
    avgValue: Math.round(values.reduce((a, b) => a + b, 0) / values.length),
    maxValue: Math.max(...values),
    minValue: Math.min(...values),
  };
};

/**
 * Filtra elementos según criterios
 */
export const filterItems = (
  items: Item[],
  search: string,
  category: string,
  status: string,
): Item[] => {
  console.log('🔍 Filtrando elementos...');

  return items.filter((item) => {
    const matchesSearch =
      search === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === '' || item.category === category;
    const matchesStatus = status === '' || item.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });
};
