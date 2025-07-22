import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./Card";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme/theme";
import type { ReactElement } from "react";

const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Card component", () => {
  it("renders children correctly", () => {
    renderWithTheme(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default padding when none is provided", () => {
    renderWithTheme(<Card>Content</Card>);
    const card = screen.getByText("Content");
    expect(card).toHaveStyle(`padding: ${theme.spacing.lg}`);
  });

  it("applies custom padding", () => {
    renderWithTheme(<Card padding="2rem">Custom Padding</Card>);
    const card = screen.getByText("Custom Padding");
    expect(card).toHaveStyle("padding: 2rem");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    renderWithTheme(<Card onClick={handleClick}>Clickable</Card>);
    fireEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as a specified HTML element", () => {
    renderWithTheme(<Card as="section">Section Element</Card>);
    const card = screen.getByText("Section Element");
    expect(card.tagName.toLowerCase()).toBe("section");
  });

  it("does not apply hover styles when hoverLess is true", () => {
    renderWithTheme(<Card hoverLess>Hoverless</Card>);
    const card = screen.getByText("Hoverless").parentElement;
    expect(card).not.toHaveStyle("box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08)");
  });
});
