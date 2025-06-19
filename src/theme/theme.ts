export const theme = {
  colors: {
    primary: "#3B82F6",
    primaryDark: "#1D4ED8",
    secondary: "#64748B",
    background: "#F9FAFB",
    surface: "#FFFFFF",
    text: "#111827",
    muted: "#6B7280",
    border: "#E5E7EB",
    danger: "#EF4444",
    success: "#10B981",
    warning: "#F59E0B",
  },
  radii: {
    none: "0",
    sm: "2px",
    md: "6px",
    lg: "12px",
    full: "9999px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  },
};

export type AppTheme = typeof theme;
