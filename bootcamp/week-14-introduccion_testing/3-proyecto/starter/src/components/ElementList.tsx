// ============================================
// Componente ElementList
// ============================================
// TODO: Renombra este componente según tu dominio
// Ejemplos: BookList, MedicineList, MemberList, DishList
// ============================================

import { Element } from '../types';
import { ElementCard } from './ElementCard';

interface ElementListProps {
  elements: Element[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ElementList({
  elements,
  onToggle,
  onDelete,
}: ElementListProps) {
  // TODO: Personaliza el mensaje de lista vacía
  if (elements.length === 0) {
    return <p>No hay elementos en la lista</p>;
  }

  const completedCount = elements.filter((el) => el.completed).length;
  const totalCount = elements.length;

  return (
    <div>
      {/* TODO: Personaliza el texto del contador según tu dominio */}
      {/* Ejemplos: "Leídos: 3 de 5", "Vendidos: 2 de 10", "Presentes: 8 de 12" */}
      <p data-testid="counter">
        Completados: {completedCount} de {totalCount}
      </p>

      <ul>
        {elements.map((element) => (
          <li key={element.id}>
            <ElementCard
              element={element}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
