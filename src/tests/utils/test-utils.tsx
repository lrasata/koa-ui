// src/test-utils.tsx
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme/theme.ts";
import { type ReactElement, type ReactNode } from "react";

const AllProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
