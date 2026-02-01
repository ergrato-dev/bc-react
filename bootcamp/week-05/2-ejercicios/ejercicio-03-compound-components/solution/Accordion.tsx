// ============================================
// EJERCICIO 03: Compound Components - SOLUCIÓN
// Archivo: Accordion.tsx
// ============================================

import { createContext, useContext, useState, type ReactNode } from 'react';

// ============================================
// PASO 1: Definir Types e Interfaces
// ============================================

// QUÉ: Context interno para compartir estado del accordion
// PARA: Comunicar estado entre subcomponentes sin prop drilling
// IMPACTO: API limpia y declarativa para el usuario
interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

interface AccordionItemContextValue {
  id: string;
  isOpen: boolean;
}

// ============================================
// PASO 2: Crear Contexts Internos
// ============================================

// QUÉ: Contexts privados (no exportados)
// PARA: Compartir estado solo entre subcomponentes
// IMPACTO: Encapsulación del estado interno
const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined,
);
const AccordionItemContext = createContext<
  AccordionItemContextValue | undefined
>(undefined);

// ============================================
// PASO 3: Custom Hooks para Acceder al Context
// ============================================

// QUÉ: Hooks que validan uso dentro del Provider
// PARA: Errores claros si se usa fuera del contexto
// IMPACTO: DX mejorada con mensajes de error útiles
const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within <Accordion>');
  }
  return context;
};

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      'AccordionItem components must be used within <Accordion.Item>',
    );
  }
  return context;
};

// ============================================
// PASO 4: Componente Principal Accordion
// ============================================

// QUÉ: Componente raíz que provee el contexto
// PARA: Contenedor que maneja el estado global del accordion
// IMPACTO: Un solo lugar para la lógica de estado
interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

const AccordionRoot = ({
  children,
  allowMultiple = false,
  defaultOpen = [],
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// ============================================
// PASO 5: Sub-componente Item
// ============================================

// QUÉ: Contenedor para cada item del accordion
// PARA: Proveer contexto del item (id, isOpen)
// IMPACTO: Trigger y Content saben a qué item pertenecen
interface AccordionItemProps {
  children: ReactNode;
  id: string;
}

const AccordionItem = ({ children, id }: AccordionItemProps) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.has(id);

  return (
    <AccordionItemContext.Provider value={{ id, isOpen }}>
      <div style={{ borderBottom: '1px solid #e0e0e0' }}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

// ============================================
// PASO 6: Sub-componente Trigger
// ============================================

// QUÉ: Botón que togglea el item
// PARA: Control de apertura/cierre del contenido
// IMPACTO: Obtiene el id del ItemContext y llama toggleItem
interface AccordionTriggerProps {
  children: ReactNode;
}

const AccordionTrigger = ({ children }: AccordionTriggerProps) => {
  const { toggleItem } = useAccordionContext();
  const { id, isOpen } = useAccordionItemContext();

  const styles: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'left',
  };

  return (
    <button
      style={styles}
      onClick={() => toggleItem(id)}>
      {children}
      <span
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s',
        }}>
        ▼
      </span>
    </button>
  );
};

// ============================================
// PASO 7: Sub-componente Content
// ============================================

// QUÉ: Contenido colapsable del item
// PARA: Mostrar/ocultar basado en isOpen
// IMPACTO: Renderizado condicional automático
interface AccordionContentProps {
  children: ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  const { isOpen } = useAccordionItemContext();

  if (!isOpen) return null;

  const styles: React.CSSProperties = {
    padding: '0 16px 16px',
    color: '#666',
  };

  return <div style={styles}>{children}</div>;
};

// ============================================
// PASO 8: Exportar como Compound Component
// ============================================

// QUÉ: Adjuntar subcomponentes al componente principal
// PARA: API declarativa Accordion.Item, Accordion.Trigger
// IMPACTO: Autocompletado de IDE y agrupación lógica
export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
