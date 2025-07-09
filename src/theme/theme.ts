// theme.ts
export const theme = {
  colors: {
    background: "#ffffff", // white background
    surface: "#f9fafb", // light surface
    text: "#111827", // almost black text
    muted: "#6b7280", // gray text for muted elements
    border: "#e5e7eb", // light gray border
    primary: "#475569", // slate 600 — main primary color
    primaryHover: "#334155", // slate 700 — hover state
    primaryFocus: "#cbd5e1", // slate 300 — focus ring
    danger: "#ef4444", // red for errors/warnings
    success: "#10b981", // green for success
  },
  fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  fontSizes: {
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
};

export type AppTheme = typeof theme;
