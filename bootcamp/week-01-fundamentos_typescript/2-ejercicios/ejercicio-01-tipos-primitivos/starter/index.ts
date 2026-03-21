// ============================================
// EJERCICIO 1: TIPOS PRIMITIVOS Y ANOTACIONES
// ============================================

console.log('🧱 EJERCICIO 1: TIPOS PRIMITIVOS Y ANOTACIONES\n');

// ============================================
// PASO 1: Tipos Primitivos Básicos
// ============================================
console.log('--- PASO 1: Tipos Primitivos Básicos ---');

// QUÉ: declarar variables con tipos primitivos explícitos
// PARA: que TypeScript valide que siempre tengan el tipo correcto
// IMPACTO: si intentas asignar un tipo incorrecto, TypeScript alerta en tiempo de compilación

// Descomenta las siguientes líneas:
// const bootcampName: string = 'React + TypeScript';
// const totalWeeks: number = 20;
// const isActive: boolean = true;

// console.log('Bootcamp:', bootcampName);
// console.log('Duración:', totalWeeks, 'semanas');
// console.log('Activo:', isActive);

console.log('');

// ============================================
// PASO 2: Inferencia de Tipos
// ============================================
console.log('--- PASO 2: Inferencia de Tipos ---');

// QUÉ: declarar variables sin anotación explícita de tipo
// PARA: dejar que TypeScript deduzca automáticamente el tipo
// IMPACTO: código más limpio cuando el tipo es obvio

// Descomenta las siguientes líneas:
// const level = 'intermediate'; // TypeScript infiere: string
// const hoursPerWeek = 8; // TypeScript infiere: number
// const hasProject = true; // TypeScript infiere: boolean

// console.log('Nivel:', level);
// console.log('Horas/semana:', hoursPerWeek);
// console.log('Tiene proyecto:', hasProject);

// QUÉ: verificar que TypeScript infirió correctamente
// PARA: comprobar que no necesitamos anotaciones cuando el tipo es claro
// IMPACTO: si descomentas, verás que TypeScript ya sabe que level es string
// console.log('Tipo de level:', typeof level); // 'string'

console.log('');

// ============================================
// PASO 3: Arrays Tipados
// ============================================
console.log('--- PASO 3: Arrays Tipados ---');

// QUÉ: declarar arrays que solo aceptan un tipo específico
// PARA: prevenir errores al agregar elementos del tipo incorrecto
// IMPACTO: TypeScript valida cada elemento del array

// Descomenta las siguientes líneas:
// const topics: string[] = ['TypeScript', 'React', 'Docker'];
// const scores: number[] = [90, 85, 95, 88];
// const flags: Array<boolean> = [true, false, true]; // Sintaxis alternativa

// console.log('Temas:', topics);
// console.log('Calificaciones:', scores);
// console.log('Flags:', flags);

// QUÉ: intentar agregar un elemento del tipo incorrecto
// PARA: demostrar que TypeScript previene errores
// IMPACTO: si descomentas, verás un error de compilación
// scores.push('100'); // ❌ Error: '100' no es number

console.log('');

// ============================================
// PASO 4: Tipos Union (Unión)
// ============================================
console.log('--- PASO 4: Tipos Union ---');

// QUÉ: declarar variables que pueden tener múltiples tipos
// PARA: representar valores que pueden ser de diferentes tipos
// IMPACTO: más flexibilidad manteniendo seguridad de tipos

// Descomenta las siguientes líneas:
// let selectedTopic: string | null = null; // Puede ser string O null
// console.log('Tema seleccionado inicial:', selectedTopic);

// selectedTopic = 'TypeScript'; // ✅ Válido
// console.log('Tema seleccionado ahora:', selectedTopic);

// QUÉ: union con múltiples tipos primitivos
// PARA: permitir diferentes tipos de valores
// IMPACTO: TypeScript valida que sea uno de los tipos especificados
// let result: string | number = 'success';
// console.log('Resultado 1:', result);
// result = 200; // ✅ También válido
// console.log('Resultado 2:', result);

console.log('');

// ============================================
// PASO 5: Tipos Literal
// ============================================
console.log('--- PASO 5: Tipos Literal ---');

// QUÉ: declarar variables con valores literales específicos permitidos
// PARA: limitar las opciones válidas a valores exactos
// IMPACTO: TypeScript solo acepta estos valores específicos

// Descomenta las siguientes líneas:
// type Difficulty = 'beginner' | 'intermediate' | 'advanced';
// const currentLevel: Difficulty = 'intermediate'; // ✅ Válido
// console.log('Nivel de dificultad:', currentLevel);

// QUÉ: intentar asignar un valor no permitido
// PARA: demostrar que TypeScript valida contra los valores literales
// IMPACTO: si descomentas, verás error porque 'expert' no está en Difficulty
// const wrongLevel: Difficulty = 'expert'; // ❌ Error

// QUÉ: tipos literales numéricos
// PARA: limitar a números específicos (ej: códigos de estado)
// IMPACTO: solo acepta 200, 404 o 500
// type StatusCode = 200 | 404 | 500;
// const httpStatus: StatusCode = 200;
// console.log('HTTP Status:', httpStatus);

console.log('');

// ============================================
// 🎯 RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log('✅ Tipos primitivos: string, number, boolean');
console.log('✅ Inferencia: TypeScript deduce tipos automáticamente');
console.log('✅ Arrays tipados: Type[] o Array<Type>');
console.log('✅ Unions: Type1 | Type2 para múltiples tipos');
console.log('✅ Literales: valores exactos permitidos');
console.log(
  '\n🚀 ¡Ejercicio completado! Compara con solution/ si tienes dudas.\n',
);
