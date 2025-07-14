// src/test-utils.tsx
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme/theme.ts";

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
