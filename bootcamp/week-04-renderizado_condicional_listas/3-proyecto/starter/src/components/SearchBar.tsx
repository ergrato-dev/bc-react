// ============================================
// COMPONENTE: SearchBar
// ============================================
// Barra de búsqueda en tiempo real

import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * Barra de búsqueda
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar...',
}) => {
  // TODO: Implementar el input de búsqueda

  return (
    <div className="search-bar">
      {/* TODO: Input de búsqueda */}
      {/* <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      /> */}

      {/* TODO: Botón para limpiar (condicional) */}
      {/* {value && (
        <button
          onClick={() => onChange('')}
          className="clear-button"
          aria-label="Limpiar búsqueda"
        >
          ✕
        </button>
      )} */}

      <input placeholder={placeholder} />
    </div>
  );
};
