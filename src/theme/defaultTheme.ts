import { colors } from "./colors";
import { fonts } from "./fonts";
import { typography } from "./typography";

export const defaultTheme = {
  colors,
  fonts,
  typography,
  radii: {
    sm: "4px",
    md: "6px",
    lg: "12px",
  },
  spacing: {
    px: "0.0625rem", // 1px
    xxs: "0.125rem", // 2px
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    base: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 32px
  },
  breakpoints: {
    /** 37.5rem = 600px */
    sm: "37.5rem",
    /** 56.25rem = 900px */
    md: "56.25rem",
    /** 75rem = 1200px */
    lg: "75rem",
    /** 96rem = 1536px */
    xl: "96rem",
  },
  zIndex: {
    dialog: 1300,
  },
} as const;

export type KoaTheme = typeof defaultTheme;
