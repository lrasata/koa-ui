import { colors } from "./colors";
import { fonts } from "./fonts";
import { typography } from "./typography";

export const defaultTheme = {
  colors,
  fonts,
  typography,
  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  spacing: {
    px: "0.0625rem", // 1px
    xxs: "0.125rem", // 2px
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
} as const;

export type KoaTheme = typeof defaultTheme;
