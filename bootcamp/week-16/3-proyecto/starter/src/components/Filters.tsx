// ============================================
// COMPONENTE: Filters
// Panel de filtros
// ============================================
// TODO: Envolver con memo

interface FiltersProps {
  category: string;
  status: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
}

const categories = [
  '',
  'Categoría A',
  'Categoría B',
  'Categoría C',
  'Categoría D',
];
const statuses = ['', 'active', 'inactive', 'pending'];

export const Filters: React.FC<FiltersProps> = ({
  category,
  status,
  onCategoryChange,
  onStatusChange,
}) => {
  console.log('  🔧 Filters renderiza');

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🔧 Filtros</h3>

      <div style={styles.field}>
        <label style={styles.label}>Categoría</label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          style={styles.select}>
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}>
              {cat || 'Todas'}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Estado</label>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          style={styles.select}>
          {statuses.map((s) => (
            <option
              key={s}
              value={s}>
              {s || 'Todos'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  },
  title: {
    margin: '0 0 16px 0',
    fontSize: '16px',
  },
  field: {
    marginBottom: '12px',
  },
  label: {
    display: 'block',
    marginBottom: '4px',
    fontSize: '14px',
    fontWeight: '500',
  },
  select: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};
