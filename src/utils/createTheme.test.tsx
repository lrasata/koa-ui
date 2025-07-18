import { describe, it, expect } from "vitest";
import { createTheme } from "./createTheme";
import { defaultTheme } from "../theme/defaultTheme.ts";

describe("createTheme", () => {
  it("returns the default theme when no overrides are given", () => {
    const theme = createTheme({});
    expect(theme).toEqual(defaultTheme);
  });

  it("overrides specific theme values correctly", () => {
    const overrides = {
      colors: {
        primary: {
          main: "#123456",
        },
      },
    };

    const theme = createTheme(overrides);

    expect(theme.colors.primary.main).toBe("#123456");
    // Everything else should remain unchanged
    expect(theme.colors.primary.light).toBe(defaultTheme.colors.primary.light);
  });

  it("does not mutate the default theme", () => {
    const original = JSON.parse(JSON.stringify(defaultTheme));
    createTheme({
      colors: { success: { main: "#00ff00" } },
    });

    expect(defaultTheme).toEqual(original); // still the same
  });
});
