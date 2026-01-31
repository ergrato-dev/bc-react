// ============================================
// EJERCICIO 2: INTERFACES Y TYPES
// ============================================

console.log('🧩 EJERCICIO 2: INTERFACES Y TYPES\n');

// ============================================
// PASO 1: Interfaces Básicas
// ============================================
console.log('--- PASO 1: Interfaces Básicas ---');

// QUÉ: definir la forma de un objeto Student
// PARA: especificar qué propiedades tiene un estudiante del bootcamp
// IMPACTO: TypeScript valida que los objetos cumplan esta estructura

// Descomenta las siguientes líneas:
// interface Student {
//   id: number;
//   name: string;
//   email: string;
//   enrolledAt: string;
// }

// QUÉ: crear un objeto que cumple con Student
// PARA: instanciar un estudiante concreto
// IMPACTO: TypeScript verifica que tenga todas las propiedades requeridas
// const student1: Student = {
//   id: 1,
//   name: 'Ana García',
//   email: 'ana@bootcamp.dev',
//   enrolledAt: '2026-01-15',
// };

// console.log('Estudiante:', student1);

console.log('');

// ============================================
// PASO 2: Propiedades Opcionales
// ============================================
console.log('--- PASO 2: Propiedades Opcionales ---');

// QUÉ: agregar propiedades opcionales con ?
// PARA: permitir que algunas propiedades puedan omitirse
// IMPACTO: phone es opcional, puede no estar presente

// Descomenta las siguientes líneas:
// interface Mentor {
//   id: number;
//   name: string;
//   expertise: string[];
//   phone?: string; // ← Opcional
// }

// QUÉ: crear mentor sin teléfono (válido)
// PARA: demostrar que phone puede omitirse
// IMPACTO: TypeScript no reclama si phone no está
// const mentor1: Mentor = {
//   id: 101,
//   name: 'Carlos Ruiz',
//   expertise: ['React', 'TypeScript'],
//   // phone no está presente ✅
// };

// console.log('Mentor sin teléfono:', mentor1);

// QUÉ: crear mentor con teléfono (también válido)
// const mentor2: Mentor = {
//   id: 102,
//   name: 'Laura Pérez',
//   expertise: ['Docker', 'CI/CD'],
//   phone: '+34 600 123 456', // ✅ Opcional pero presente
// };

// console.log('Mentor con teléfono:', mentor2);

console.log('');

// ============================================
// PASO 3: Type Aliases
// ============================================
console.log('--- PASO 3: Type Aliases ---');

// QUÉ: crear un type para roles permitidos
// PARA: limitar los roles a 3 valores específicos
// IMPACTO: TypeScript valida que role sea uno de estos valores

// Descomenta las siguientes líneas:
// type Role = 'admin' | 'student' | 'mentor';

// QUÉ: usar el type en una variable
// PARA: asignar un rol válido
// IMPACTO: solo acepta 'admin', 'student' o 'mentor'
// const userRole: Role = 'student';
// console.log('Rol del usuario:', userRole);

// QUÉ: type para estado de proyecto
// type ProjectStatus = 'not-started' | 'in-progress' | 'completed' | 'archived';
// const projectStatus: ProjectStatus = 'in-progress';
// console.log('Estado del proyecto:', projectStatus);

console.log('');

// ============================================
// PASO 4: Intersecciones (&)
// ============================================
console.log('--- PASO 4: Intersecciones ---');

// QUÉ: crear tipos base reutilizables
// PARA: evitar duplicar propiedades comunes
// IMPACTO: podemos combinarlos con & para tipos compuestos

// Descomenta las siguientes líneas:
// type WithId = {
//   id: number;
// };

// type WithTimestamps = {
//   createdAt: string;
//   updatedAt: string;
// };

// QUÉ: combinar tipos con intersección (&)
// PARA: crear un Post que tenga id, title, content, createdAt, updatedAt
// IMPACTO: Post tiene TODAS las propiedades de los 3 tipos
// type Post = WithId &
//   WithTimestamps & {
//     title: string;
//     content: string;
//   };

// QUÉ: crear un post que cumple con el tipo intersección
// const post: Post = {
//   id: 1,
//   title: 'Aprendiendo TypeScript',
//   content: 'TypeScript es un superset de JavaScript...',
//   createdAt: '2026-01-20T10:00:00Z',
//   updatedAt: '2026-01-25T15:30:00Z',
// };

// console.log('Post:', post);

console.log('');

// ============================================
// PASO 5: Interface vs Type
// ============================================
console.log('--- PASO 5: Interface vs Type ---');

// QUÉ: usar interface para objetos (recomendado para props)
// PARA: definir la forma de un componente User
// IMPACTO: las interfaces son extensibles con extends

// Descomenta las siguientes líneas:
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// QUÉ: extender una interface con extends
// PARA: agregar propiedades adicionales sin modificar User
// IMPACTO: Admin hereda todas las props de User más role
// interface Admin extends User {
//   role: 'admin';
//   permissions: string[];
// }

// const admin: Admin = {
//   id: 1,
//   name: 'Super Admin',
//   email: 'admin@bootcamp.dev',
//   role: 'admin',
//   permissions: ['read', 'write', 'delete'],
// };

// console.log('Admin:', admin);

console.log('');

// ============================================
// 🎯 RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log('✅ interface: para objetos y props de componentes');
console.log('✅ type: para unions, intersecciones y aliases');
console.log('✅ Propiedades opcionales: usar ?');
console.log('✅ Intersecciones: combinar tipos con &');
console.log('✅ extends: extender interfaces');
console.log(
  '\n🚀 ¡Ejercicio completado! Compara con solution/ si tienes dudas.\n',
);
