// ============================================
// COMPONENTE: SortSelector
// ============================================
// Selector de criterio de ordenamiento

import React from 'react';
import { SortOption } from '../types';
import { sortOptions } from '../data/items';

interface SortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

/**
 * Selector de ordenamiento
 */
export const SortSelector: React.FC<SortSelectorProps> = ({
  value,
  onChange,
}) => {
  // TODO: Implementar el selector

  return (
    <div className="sort-selector">
      {/* TODO: Label y select */}
      {/* <label htmlFor="sort">Ordenar por:</label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select> */}

      <p>Implementar selector aquí</p>
    </div>
  );
};
