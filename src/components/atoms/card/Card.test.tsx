import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { Card } from "./Card";
import { theme } from "../../../theme/theme";
import { render } from "../../../tests/utils/test-utils";

describe("Card component", () => {
  it("renders children correctly", () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default padding when none is provided", () => {
    render(<Card>Content</Card>);
    const card = screen.getByText("Content");
    expect(card).toHaveStyle(`padding: ${theme.spacing.lg}`);
  });

  it("applies custom padding", () => {
    render(<Card padding="2rem">Custom Padding</Card>);
    const card = screen.getByText("Custom Padding");
    expect(card).toHaveStyle("padding: 2rem");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable</Card>);
    const card = screen.getByText("Clickable");
    fireEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(card.role?.toLowerCase()).toBe("button");
  });

  it("renders as a specified HTML element", () => {
    render(<Card as="section">Section Element</Card>);
    const card = screen.getByText("Section Element");
    expect(card.tagName.toLowerCase()).toBe("section");
  });

  it("does not apply hover styles when hoverLess is true", () => {
    render(<Card hoverLess>Hoverless</Card>);
    const card = screen.getByText("Hoverless").parentElement;
    expect(card).not.toHaveStyle("box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08)");
  });
});
