// ============================================
// Componente ElementCard
// ============================================
// TODO: Renombra este componente según tu dominio
// Ejemplos: BookCard, MedicineCard, MemberCard, DishCard
// ============================================

import { Element } from '../types';

interface ElementCardProps {
  element: Element;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ElementCard({ element, onToggle, onDelete }: ElementCardProps) {
  return (
    <article>
      <label>
        <input
          type="checkbox"
          checked={element.completed}
          onChange={() => onToggle(element.id)}
        />
        <span
          style={{
            textDecoration: element.completed ? 'line-through' : 'none',
          }}>
          {element.name}
        </span>
      </label>

      {/* TODO: Personaliza el aria-label según tu dominio */}
      <button
        onClick={() => onDelete(element.id)}
        aria-label={`Eliminar ${element.name}`}>
        ×
      </button>
    </article>
  );
}
