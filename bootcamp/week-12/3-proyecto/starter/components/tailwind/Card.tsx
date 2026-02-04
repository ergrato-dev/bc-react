/* ============================================
   PROYECTO SEMANAL: Sistema de Cards Multi-Estrategia
   Archivo: Card.tsx (starter) - Tailwind CSS
   
   NOTA PARA EL APRENDIZ:
   Adapta este componente a tu dominio asignado.
   ============================================ */

// TODO: Importar dependencias
// import { cardVariants, type CardVariants } from './variants';

// ============================================
// TODO: Definir interface de datos del dominio
// ============================================

// interface ItemData {
//   id: number;
//   title: string;
//   subtitle?: string;
//   description?: string;
//   image?: string;
//   // TODO: Agregar campos específicos de tu dominio
// }

// ============================================
// TODO: Definir props del componente
// ============================================

// interface CardProps extends CardVariants {
//   item: ItemData;
//   onAction?: (id: number) => void;
//   actionLabel?: string;
//   className?: string;
// }

// ============================================
// TODO: Implementar el componente
// Usar clases de Tailwind directamente
// Implementar responsive design con prefijos (sm:, md:, lg:)
// ============================================

// export const Card: React.FC<CardProps> = ({
//   item,
//   variant,
//   size,
//   onAction,
//   actionLabel = 'Ver detalles',
//   className,
// }) => {
//   return (
//     <article className={cardVariants({ variant, size, className })}>
//       {/* TODO: Imagen responsive */}
//       {/* item.image && (
//         <div className="aspect-video overflow-hidden">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ) */}
//
//       {/* TODO: Header con título y subtítulo */}
//       {/* <header className="p-4 border-b border-gray-700">
//         <h3 className="text-lg md:text-xl font-semibold text-white">
//           {item.title}
//         </h3>
//         {item.subtitle && (
//           <p className="text-sm text-gray-400">{item.subtitle}</p>
//         )}
//       </header> */}
//
//       {/* TODO: Body con descripción y campos del dominio */}
//       {/* <div className="p-4">
//         {item.description && (
//           <p className="text-gray-300 line-clamp-2">{item.description}</p>
//         )}
//       </div> */}
//
//       {/* TODO: Footer con botón de acción */}
//       {/* {onAction && (
//         <footer className="p-4 pt-0">
//           <button
//             onClick={() => onAction(item.id)}
//             className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
//           >
//             {actionLabel}
//           </button>
//         </footer>
//       )} */}
//     </article>
//   );
// };

export {};
