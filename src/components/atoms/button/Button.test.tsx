import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";
import { FiCoffee } from "react-icons/fi";
import { render, fireEvent, screen } from "../../../tests/utils/test-utils.tsx";

describe("<Button />", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );
    fireEvent.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with startIcon and endIcon", () => {
    render(
      <Button
        startIcon={<FiCoffee data-testid="start-icon" />}
        endIcon={<FiCoffee data-testid="end-icon" />}
      >
        With Icons
      </Button>,
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
    expect(screen.getByText("With Icons")).toBeInTheDocument();
  });

  it("renders with fullWidth prop", () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByText("Full Width");
    expect(button).toBeInTheDocument();
    // Optionally: check that it has style width: 100% if Emotion applies it
    expect(button).toHaveStyle({ width: "100%" });
  });

  it('renders with variant="outline"', () => {
    render(<Button variant="outline">Outline Button</Button>);
    expect(screen.getByText("Outline Button")).toBeInTheDocument();
  });

  it('renders with variant="text"', () => {
    render(<Button variant="text">Text Button</Button>);
    expect(screen.getByText("Text Button")).toBeInTheDocument();
  });
});
