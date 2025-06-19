export const theme = {
  colors: {
    primary: "#4F46E5",
    primaryDark: "#4338CA",
    secondary: "#64748B",
    background: "#F9FAFB",
    text: "#111827",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSizes: {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  fonts: {
    body: "Inter, sans-serif",
  },
};

export type AppTheme = typeof theme;
