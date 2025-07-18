import "@emotion/react";
import type { KoaTheme } from "./theme/defaultTheme.ts";

declare module "@emotion/react" {
  export interface Theme extends KoaTheme {}
}
