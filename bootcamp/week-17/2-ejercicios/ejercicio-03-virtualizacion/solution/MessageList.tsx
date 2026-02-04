// ============================================
// EJERCICIO 03: MessageList.tsx (SOLUTION)
// ============================================
// Lista con items de altura variable usando VariableSizeList

import { useState, useRef, useCallback, type FC } from 'react';
import { VariableSizeList, type ListChildComponentProps } from 'react-window';

// ============================================
// TIPOS
// ============================================
interface Message {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

// ============================================
// GENERAR MENSAJES
// ============================================

const generateMessages = (count: number): Message[] => {
  const authors = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
  return Array.from({ length: count }, (_, i) => {
    // Textos de longitud variable para simular mensajes reales
    const paragraphs = Math.floor(Math.random() * 4) + 1;
    const text = Array(paragraphs)
      .fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      .join(' ');

    return {
      id: i + 1,
      author: authors[Math.floor(Math.random() * authors.length)],
      text,
      timestamp: new Date(Date.now() - i * 60000).toLocaleTimeString(),
    };
  });
};

// ============================================
// COMPONENTE DE MENSAJE
// ============================================

const MessageRow: FC<ListChildComponentProps<Message[]>> = ({
  index,
  style,
  data,
}) => {
  const message = data[index];

  return (
    <div
      style={style}
      className="message-row">
      <div className="message-content">
        <div className="message-header">
          <strong>{message.author}</strong>
          <span className="timestamp">{message.timestamp}</span>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

// ============================================
// LISTA CON TAMAÑO VARIABLE
// ============================================

export const MessageList: FC = () => {
  const [messages] = useState<Message[]>(() => generateMessages(1000));
  const listRef = useRef<VariableSizeList>(null);

  // Función que calcula la altura de cada item
  // Basada en la longitud del texto
  const getItemSize = useCallback(
    (index: number): number => {
      const message = messages[index];
      // Altura base + altura por caracteres de texto
      const baseHeight = 60; // Header + padding
      const charsPerLine = 80;
      const lineHeight = 20;
      const lines = Math.ceil(message.text.length / charsPerLine);
      return baseHeight + lines * lineHeight;
    },
    [messages],
  );

  return (
    <div className="message-list-container">
      <VariableSizeList
        ref={listRef}
        height={500}
        width="100%"
        itemCount={messages.length}
        itemSize={getItemSize}
        itemData={messages}
        estimatedItemSize={100} // Estimación para calcular scrollbar
      >
        {MessageRow}
      </VariableSizeList>
    </div>
  );
};
