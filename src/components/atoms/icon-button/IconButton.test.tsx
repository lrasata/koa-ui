import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { IconButton } from "./IconButton";
import { FiTrash2 } from "react-icons/fi";
import { theme } from "../../../theme/theme.ts";
import { ThemeProvider } from "@emotion/react";

describe("IconButton", () => {
  it("renders with the correct aria-label", () => {
    render(
      <ThemeProvider theme={theme}>
        <IconButton ariaLabel="delete" icon={<FiTrash2 />} onClick={() => {}} />
      </ThemeProvider>,
    );
    const button = screen.getByLabelText("delete");
    expect(button).toBeInTheDocument();
  });

  it("renders the icon inside the button", () => {
    render(
      <ThemeProvider theme={theme}>
        <IconButton
          ariaLabel="delete"
          icon={<FiTrash2 data-testid="icon" />}
          onClick={() => {}}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClickMock = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <IconButton
          ariaLabel="delete"
          icon={<FiTrash2 />}
          onClick={onClickMock}
        />
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByLabelText("delete"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("supports disabled state", () => {
    const onClickMock = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <IconButton
          ariaLabel="delete"
          icon={<FiTrash2 />}
          onClick={onClickMock}
          disabled
        />
      </ThemeProvider>,
    );
    const button = screen.getByLabelText("delete");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
