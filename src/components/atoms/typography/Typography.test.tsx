import { describe, it, expect } from "vitest";
import { Typography } from "./Typography";
import { render } from "../../../tests/utils/test-utils";
import { theme } from "../../../theme/theme.ts";

describe("Typography component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Typography>Sample text</Typography>);
    expect(getByText("Sample text")).toBeInTheDocument();
  });

  it("applies the correct HTML tag with 'component' prop", () => {
    const { getByText } = render(
      <Typography component="h2">Heading</Typography>,
    );
    const el = getByText("Heading");
    expect(el.tagName.toLowerCase()).toBe("h2");
  });

  it("applies the correct variant styles", () => {
    const { getByText } = render(
      <Typography variant="h1">Big Heading</Typography>,
    );
    expect(getByText("Big Heading")).toBeInTheDocument();
    // Style testing is shallow unless using snapshot or computed style inspection
  });

  it("applies custom color", () => {
    const { getByText } = render(
      <Typography color="primary">Colored text</Typography>,
    );
    const el = getByText("Colored text");
    expect(el).toHaveStyle(`color: ${theme.colors.primary.main}`);
  });

  it("applies custom weight", () => {
    const { getByText } = render(
      <Typography weight="semibold">Bold text</Typography>,
    );
    const el = getByText("Bold text");
    expect(el).toHaveStyle(`font-weight: ${theme.fonts.fontWeights.semibold}`);
  });

  it("applies ellipsis styles when enabled", () => {
    const { getByText } = render(
      <Typography ellipsis style={{ maxWidth: "100px" }}>
        Truncated text that will overflow and be clipped
      </Typography>,
    );
    const el = getByText("Truncated text that will overflow and be clipped");
    expect(el).toHaveStyle("white-space: nowrap");
    expect(el).toHaveStyle("overflow: hidden");
    expect(el).toHaveStyle("text-overflow: ellipsis");
    expect(el).toHaveStyle("display: block");
  });

  it("uses default variant, color, and component", () => {
    const { getByText } = render(<Typography>Default settings</Typography>);
    const el = getByText("Default settings");
    expect(el.tagName.toLowerCase()).toBe("span");
    expect(el).toHaveStyle(`color: ${theme.colors.text.default}`);
    expect(el).toHaveStyle(`font-family: ${theme.fonts.fontFamily}`);
  });
});
