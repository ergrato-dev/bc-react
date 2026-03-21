/* ============================================
   EJERCICIO 02: Sistema de Botones
   Archivo: styled.d.ts (solution)
   ============================================ */

import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
