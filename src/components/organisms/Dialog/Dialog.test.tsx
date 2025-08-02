import { describe, it, vi, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { Dialog, type DialogProps } from "./Dialog";
import { render } from "../../../tests/utils/test-utils";

const renderDialog = (props?: Partial<DialogProps>) => {
  const defaultProps: DialogProps = {
    isOpen: true,
    title: "Test Dialog",
    cancel: { label: "Cancel", variant: "outline", onClick: vi.fn() },
    submit: { label: "Submit", variant: "primary", onClick: vi.fn() },
    children: <div>Dialog Content</div>,
  };
  return render(
    <Dialog {...defaultProps} {...props}>
      {defaultProps.children}
    </Dialog>,
  );
};

describe("Dialog", () => {
  it("renders title and children", () => {
    renderDialog();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
  });

  it("renders cancel and submit buttons", () => {
    renderDialog();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("call cancel.onClick when clicking Cancel button", () => {
    const cancelClick = vi.fn();
    renderDialog({
      cancel: { label: "Cancel", variant: "outline", onClick: cancelClick },
    });

    fireEvent.click(screen.getByText("Cancel"));
    expect(cancelClick).toHaveBeenCalled();
  });

  it("call submit.onClick when clicking Submit button", () => {
    const submitClick = vi.fn();
    renderDialog({
      submit: { label: "Submit", variant: "outline", onClick: submitClick },
    });

    fireEvent.click(screen.getByText("Submit"));
    expect(submitClick).toHaveBeenCalled();
  });

  it("calls cancel.onClick when clicking the backdrop", () => {
    const cancelClick = vi.fn();
    renderDialog({
      cancel: { label: "Cancel", variant: "outline", onClick: cancelClick },
    });

    const backdrop = screen.getByRole("dialog");
    fireEvent.click(backdrop);
    expect(cancelClick).toHaveBeenCalled();
  });

  it("does not render when isOpen is false", () => {
    renderDialog({ isOpen: false });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
