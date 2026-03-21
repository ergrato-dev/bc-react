import React from 'react';

// ============================================
// PASO 1: Definir Props con TypeScript
// ============================================
// SOLUCIÓN COMPLETA

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

// ============================================
// PASO 2: Crear el Componente Funcional
// ============================================

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  // ============================================
  // PASO 3: Agregar Estilos Dinámicos
  // ============================================

  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  // ============================================
  // PASO 4: Renderizar el botón
  // ============================================

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClass}`}>
      {text}
    </button>
  );
};

// ============================================
// EXPLICACIÓN DETALLADA
// ============================================

/*
¿Qué es ButtonProps?
- Una INTERFAZ que describe el "contrato" del componente
- Define qué props puede recibir y qué tipos tienen
- TypeScript verifica que cumplas el contrato

¿Por qué React.FC<ButtonProps>?
- React.FC = React Function Component
- <ButtonProps> = le estamos diciendo que use la interfaz ButtonProps
- Esto le permite a TypeScript verificar que pasas las props correctas

¿Qué significa la desestructuración?
- En lugar de: const props = ..., extraemos directamente: { text, onClick, ... }
- = 'primary' establece valores por defecto
- Si no pasas variant, se usa 'primary' automáticamente

¿Por qué variant no es obligatorio?
- Porque usamos ? en la interfaz: variant?: 'primary'
- El ? significa "opcional"
- Dentro del componente, podemos tener un valor por defecto

¿Qué hace className?
- Es el equivalente de React al atributo class del HTML
- Concatenamos: base 'btn' + variante 'btn-primary' o 'btn-secondary'
- El CSS hace el resto

Ejemplo de uso correcto:
- <Button text="Click" onClick={handleClick} />
- <Button text="Enviar" onClick={handleSubmit} variant="primary" />
- <Button text="Cancelar" onClick={handleCancel} variant="secondary" disabled />

Ejemplo de USO INCORRECTO (TypeScript te daría error):
- <Button text="Click" />  // ❌ falta onClick
- <Button onClick={fn} />  // ❌ falta text
- <Button text="A" onClick={fn} variant="danger" />  // ❌ variant solo puede ser primary|secondary
*/
