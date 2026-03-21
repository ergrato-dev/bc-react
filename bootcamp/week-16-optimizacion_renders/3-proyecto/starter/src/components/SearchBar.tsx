// ============================================
// COMPONENTE: SearchBar
// Barra de búsqueda
// ============================================
// TODO: Envolver con memo

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  console.log('  🔍 SearchBar renderiza');

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar elementos..."
        style={styles.input}
      />
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    flex: 1,
    minWidth: '200px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    outline: 'none',
  },
};
