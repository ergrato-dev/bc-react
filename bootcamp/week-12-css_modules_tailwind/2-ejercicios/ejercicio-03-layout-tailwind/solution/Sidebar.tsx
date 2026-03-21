/* ============================================
   EJERCICIO 03: Layout Responsivo con Tailwind
   Archivo: Sidebar.tsx (solution)
   ============================================ */

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: '🏠', label: 'Dashboard', href: '#' },
  { icon: '📦', label: 'Products', href: '#' },
  { icon: '👥', label: 'Customers', href: '#' },
  { icon: '📊', label: 'Analytics', href: '#' },
  { icon: '⚙️', label: 'Settings', href: '#' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          inset-y-0 left-0
          w-64
          bg-gray-900 border-r border-gray-800
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          z-50 lg:z-auto
        `}>
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={onClose}>
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  flex items-center gap-3 px-3 py-2
                  text-gray-300 hover:text-white
                  hover:bg-gray-800 rounded-lg
                  transition-colors
                ">
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
