import { screen, fireEvent } from "@testing-library/react";
import Link from "./Link";
import { describe, it, expect, vi } from "vitest";
import { render } from "../../../tests/utils/test-utils";

describe("Link component", () => {
  const href = "https://example.com";

  it("renders with default props", () => {
    render(<Link href={href}>Click me</Link>);
    const link = screen.getByText("Click me");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("tabindex", "0");
    expect(link).toHaveAttribute("aria-disabled", "false");
  });

  it("renders disabled link", () => {
    render(
      <Link href={href} disabled>
        Disabled Link
      </Link>,
    );
    const link = screen.getByText("Disabled Link");
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveAttribute("href");
    expect(link).toHaveAttribute("tabindex", "-1");
    expect(link).toHaveAttribute("aria-disabled", "true");
  });

  it("prevents click when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Link href={href} disabled onClick={handleClick}>
        Disabled Click
      </Link>,
    );
    const link = screen.getByText("Disabled Click");
    fireEvent.click(link);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("calls onClick when enabled", () => {
    const handleClick = vi.fn();
    render(
      <Link href={href} onClick={handleClick}>
        Enabled Click
      </Link>,
    );
    const link = screen.getByText("Enabled Click");
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('adds rel attribute when target is "_blank"', () => {
    render(
      <Link href={href} target="_blank">
        External
      </Link>,
    );
    const link = screen.getByText("External");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
