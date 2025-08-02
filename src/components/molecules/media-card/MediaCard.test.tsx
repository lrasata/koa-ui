import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MediaCard } from "./MediaCard";
import { Button } from "../../atoms/button/Button";
import { render } from "../../../tests/utils/test-utils";

describe("MediaCard", () => {
  const defaultProps = {
    imgSrc: "https://example.com/image.jpg",
    imgAlt: "Example image",
    title: "Test Title",
    body: "This is the body text.",
  };

  it("renders image with correct src and alt", () => {
    render(<MediaCard {...defaultProps} />);
    const img = screen.getByAltText("Example image") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe("https://example.com/image.jpg");
  });

  it("renders title", () => {
    render(<MediaCard {...defaultProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders body text if provided", () => {
    render(<MediaCard {...defaultProps} />);
    expect(screen.getByText("This is the body text.")).toBeInTheDocument();
  });

  it("does not render body if not provided", () => {
    const { queryByText } = render(
      <MediaCard {...defaultProps} body={undefined} />,
    );
    expect(queryByText("This is the body text.")).not.toBeInTheDocument();
  });

  it("renders actions if provided", () => {
    render(<MediaCard {...defaultProps} actions={<Button>Click me</Button>} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("triggers onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<MediaCard {...defaultProps} onClick={handleClick} />);
    const card = screen.getByRole("button");
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has focusable role if onClick is provided", () => {
    const handleClick = vi.fn();
    render(<MediaCard {...defaultProps} onClick={handleClick} />);
    const card = screen.getByRole("button");
    expect(card).toHaveAttribute("tabIndex", "0");
  });
});
