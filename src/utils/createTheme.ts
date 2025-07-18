import { deepMerge } from "./deepMerge.ts";
import { defaultTheme, type KoaTheme } from "../theme/defaultTheme.ts";
import type { DeepPartial } from "./types";

export function createTheme(overrides: DeepPartial<KoaTheme>): KoaTheme {
  return deepMerge(defaultTheme, overrides) as KoaTheme;
}
