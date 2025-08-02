import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { IconButton } from "./IconButton";
import { FiTrash2 } from "react-icons/fi";
import { render } from "../../../tests/utils/test-utils";

describe("IconButton", () => {
  it("renders with the correct aria-label", () => {
    render(
      <IconButton ariaLabel="delete" icon={<FiTrash2 />} onClick={() => {}} />,
    );
    const button = screen.getByLabelText("delete");
    expect(button).toBeInTheDocument();
  });

  it("renders the icon inside the button", () => {
    render(
      <IconButton
        ariaLabel="delete"
        icon={<FiTrash2 data-testid="icon" />}
        onClick={() => {}}
      />,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClickMock = vi.fn();
    render(
      <IconButton
        ariaLabel="delete"
        icon={<FiTrash2 />}
        onClick={onClickMock}
      />,
    );
    fireEvent.click(screen.getByLabelText("delete"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("supports disabled state", () => {
    const onClickMock = vi.fn();
    render(
      <IconButton
        ariaLabel="delete"
        icon={<FiTrash2 />}
        onClick={onClickMock}
        disabled
      />,
    );
    const button = screen.getByLabelText("delete");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
