/**
 * PROPS: SearchBar
 */
interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

/**
 * COMPONENTE: SearchBar
 *
 * Barra de búsqueda para filtrar elementos.
 */
const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Buscar..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />

      {/* TODO (Opcional): Agregar filtros adicionales según tu dominio */}
      {/* Ejemplos:
        - Biblioteca: filtrar por categoría, disponibilidad
        - Farmacia: filtrar por categoría, con/sin receta
        - Gimnasio: filtrar por plan, activos/inactivos
      */}
    </div>
  );
};

export default SearchBar;
