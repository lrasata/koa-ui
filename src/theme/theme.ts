// theme.ts
export const theme = {
  colors: {
    background: {
      default: "#ffffff",
      surface: "#f9fafb", // light surface
      hover: "#e5e7eb",
      press: "#e0e0e0",
    },
    text: {
      default: "#374151",
      inverted: "#ffffff",
    },
    border: "#e5e7eb",
    primary: {
      main: "#475569",
      hover: "#334155",
      press: "#1e293b",
    },
    stroke: {
      focus: "#00A6F4",
    },
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
  lineHeight: "100%",
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
};

export type AppTheme = typeof theme;
