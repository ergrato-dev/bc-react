/* ============================================
   EJERCICIO 03: Layout Responsivo con Tailwind
   Archivo: CardGrid.tsx (solution)
   ============================================ */

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardGridProps {
  cards: CardData[];
}

export const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4 sm:gap-6
      p-4 sm:p-6
    ">
      {cards.map((card) => (
        <article
          key={card.id}
          className="
            bg-gray-800 rounded-lg overflow-hidden
            border border-gray-700
            hover:border-blue-500
            transition-colors duration-200
            group
          ">
          {/* Imagen con aspect ratio */}
          <div className="aspect-video bg-gray-700 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="
                w-full h-full object-cover
                group-hover:scale-105
                transition-transform duration-300
              "
            />
          </div>

          {/* Contenido */}
          <div className="p-4">
            <h3
              className="
              text-lg sm:text-xl
              font-semibold text-white
              mb-2
            ">
              {card.title}
            </h3>
            <p
              className="
              text-sm sm:text-base
              text-gray-400
              line-clamp-2
            ">
              {card.description}
            </p>
            <button
              className="
              mt-4 w-full
              py-2 px-4
              bg-blue-600 hover:bg-blue-700
              text-white text-sm
              rounded-lg
              transition-colors
            ">
              Ver más
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};
