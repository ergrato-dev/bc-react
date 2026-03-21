// ============================================
// COMPONENTE: SearchFilter
// ============================================
// TODO: Implementar barra de búsqueda y filtros

import { useState, useEffect } from 'react';

interface SearchFilterProps {
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearchChange,
  onCategoryChange,
}) => {
  const [searchInput, setSearchInput] = useState('');

  // TODO: Implementar debounce para búsqueda
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, onSearchChange]);

  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{ padding: '0.5rem', flex: 1 }}
      />

      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{ padding: '0.5rem' }}>
        <option value="">Todas las categorías</option>
        <option value="categoria-a">Categoría A</option>
        <option value="categoria-b">Categoría B</option>
        <option value="categoria-c">Categoría C</option>
      </select>
    </div>
  );
};
