// ============================================
// EJERCICIO 03: Compound Components
// Archivo: App.tsx - Aplicación de Demostración
// ============================================

// Importa los componentes cuando estén implementados
// import { Accordion } from './Accordion';
// import { Tabs } from './Tabs';
// import { Select } from './Select';

console.log('--- Paso 4: App de Demostración ---');

// ============================================
// APLICACIÓN DE DEMOSTRACIÓN
// ============================================

// Descomenta todo el componente App cuando hayas implementado
// todos los componentes anteriores:

// export const App = () => {
//   return (
//     <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
//       <h1>Ejercicio 03: Compound Components</h1>
//
//       {/* ===== Demostración de Accordion ===== */}
//       <section style={{ marginBottom: '48px' }}>
//         <h2>Accordion</h2>
//
//         <h3>Accordion Single (solo uno abierto)</h3>
//         <Accordion defaultOpen={['faq-1']}>
//           <Accordion.Item id="faq-1">
//             <Accordion.Trigger>¿Qué es React?</Accordion.Trigger>
//             <Accordion.Content>
//               React es una biblioteca de JavaScript para construir interfaces de usuario.
//               Fue desarrollada por Facebook y es ampliamente utilizada para crear
//               aplicaciones web modernas con componentes reutilizables.
//             </Accordion.Content>
//           </Accordion.Item>
//
//           <Accordion.Item id="faq-2">
//             <Accordion.Trigger>¿Qué es TypeScript?</Accordion.Trigger>
//             <Accordion.Content>
//               TypeScript es un superset de JavaScript que añade tipado estático opcional.
//               Ayuda a detectar errores en tiempo de compilación y mejora la experiencia
//               de desarrollo con mejor autocompletado.
//             </Accordion.Content>
//           </Accordion.Item>
//
//           <Accordion.Item id="faq-3">
//             <Accordion.Trigger>¿Qué son los Compound Components?</Accordion.Trigger>
//             <Accordion.Content>
//               Es un patrón de diseño en React donde un componente padre trabaja junto
//               con subcomponentes para crear una API declarativa y flexible.
//               El estado se comparte implícitamente a través de Context.
//             </Accordion.Content>
//           </Accordion.Item>
//         </Accordion>
//
//         <h3 style={{ marginTop: '24px' }}>Accordion Multiple (varios abiertos)</h3>
//         <Accordion allowMultiple defaultOpen={['info-1', 'info-2']}>
//           <Accordion.Item id="info-1">
//             <Accordion.Trigger>Sección 1</Accordion.Trigger>
//             <Accordion.Content>
//               Contenido de la sección 1. Puede estar abierta junto con otras.
//             </Accordion.Content>
//           </Accordion.Item>
//
//           <Accordion.Item id="info-2">
//             <Accordion.Trigger>Sección 2</Accordion.Trigger>
//             <Accordion.Content>
//               Contenido de la sección 2. Puede estar abierta junto con otras.
//             </Accordion.Content>
//           </Accordion.Item>
//         </Accordion>
//       </section>
//
//       {/* ===== Demostración de Tabs ===== */}
//       <section style={{ marginBottom: '48px' }}>
//         <h2>Tabs</h2>
//
//         <Tabs defaultTab="overview" onChange={(tab) => console.log('Tab changed:', tab)}>
//           <Tabs.List>
//             <Tabs.Tab id="overview">General</Tabs.Tab>
//             <Tabs.Tab id="features">Características</Tabs.Tab>
//             <Tabs.Tab id="pricing">Precios</Tabs.Tab>
//             <Tabs.Tab id="disabled" disabled>Deshabilitado</Tabs.Tab>
//           </Tabs.List>
//
//           <Tabs.Panel id="overview">
//             <h3>Vista General</h3>
//             <p>
//               Esta es la sección de vista general. Aquí puedes encontrar
//               información básica sobre el producto o servicio.
//             </p>
//           </Tabs.Panel>
//
//           <Tabs.Panel id="features">
//             <h3>Características</h3>
//             <ul>
//               <li>Característica 1: Rendimiento optimizado</li>
//               <li>Característica 2: Fácil de usar</li>
//               <li>Característica 3: Altamente personalizable</li>
//             </ul>
//           </Tabs.Panel>
//
//           <Tabs.Panel id="pricing">
//             <h3>Planes de Precios</h3>
//             <p>Básico: $9.99/mes</p>
//             <p>Pro: $19.99/mes</p>
//             <p>Enterprise: Contactar</p>
//           </Tabs.Panel>
//         </Tabs>
//       </section>
//
//       {/* ===== Demostración de Select ===== */}
//       <section style={{ marginBottom: '48px' }}>
//         <h2>Select</h2>
//
//         <div style={{ display: 'flex', gap: '24px' }}>
//           <div>
//             <h3>Select de País</h3>
//             <Select
//               placeholder="Selecciona un país"
//               onChange={(value) => console.log('País seleccionado:', value)}
//             >
//               <Select.Trigger />
//               <Select.Content>
//                 <Select.Option value="mx">🇲🇽 México</Select.Option>
//                 <Select.Option value="es">🇪🇸 España</Select.Option>
//                 <Select.Option value="ar">🇦🇷 Argentina</Select.Option>
//                 <Select.Option value="co">🇨🇴 Colombia</Select.Option>
//                 <Select.Option value="cl">🇨🇱 Chile</Select.Option>
//               </Select.Content>
//             </Select>
//           </div>
//
//           <div>
//             <h3>Select de Categoría</h3>
//             <Select
//               defaultValue="electronics"
//               onChange={(value) => console.log('Categoría:', value)}
//             >
//               <Select.Trigger />
//               <Select.Content>
//                 <Select.Option value="electronics">📱 Electrónica</Select.Option>
//                 <Select.Option value="clothing">👕 Ropa</Select.Option>
//                 <Select.Option value="books">📚 Libros</Select.Option>
//                 <Select.Option value="home">🏠 Hogar</Select.Option>
//               </Select.Content>
//             </Select>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// Exportación temporal
export const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Ejercicio 03: Compound Components</h1>
    <p>
      Descomenta los componentes en cada archivo para completar el ejercicio.
    </p>
  </div>
);

console.log('App.tsx cargado');
