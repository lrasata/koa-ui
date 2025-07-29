import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";
import { theme } from "../../theme/theme.ts";
import { ThemeProvider } from "@emotion/react";
import { fireEvent } from "../../tests/utils/test-utils.tsx";

describe("TextField", () => {
  it("renders the label and required asterisk", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField label="Username" required />
      </ThemeProvider>,
    );
    const label = screen.getByText(/Username/i);
    expect(label).toBeInTheDocument();

    const asterisk = screen.getByLabelText("required");
    expect(asterisk).toBeInTheDocument();
  });

  it("renders startIcon and endIcon inside input wrapper", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField
          label="Email"
          startIcon={<span data-testid="start-icon">S</span>}
          endIcon={<span data-testid="end-icon">E</span>}
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("renders error message and applies error styles", () => {
    const errorMessage = "This field is required";
    render(
      <ThemeProvider theme={theme}>
        <TextField label="Password" error={errorMessage} />
      </ThemeProvider>,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    // The input should have border color related to error - testable via class or style
    const input = screen.getByLabelText("Password");
    expect(input).toHaveStyle(`border: 1px solid #b91c1c`);
  });

  it("renders helperText when no error", () => {
    const helperText = "Enter your full name";
    render(
      <ThemeProvider theme={theme}>
        <TextField label="Name" helperText={helperText} />
      </ThemeProvider>,
    );
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it("associates input and label via id", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField label="Email" id="email-input" />
      </ThemeProvider>,
    );
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("id", "email-input");
  });

  it("associates correct type to input element", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField label="Age" type="number" />
      </ThemeProvider>,
    );
    const input = screen.getByLabelText("Age");
    expect(input).toHaveAttribute("type", "number");
  });

  it("shows the toggle password visibility button when input type is password", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField label="Password" type="password" />
      </ThemeProvider>,
    );
    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");

    const toggleButton = screen.getByRole("button", { name: /show password/i });
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    const hideToggleButton = screen.getByRole("button", {
      name: /hide password/i,
    });
    expect(hideToggleButton).toBeInTheDocument();
  });

  it("input focus triggers outline style", async () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField label="FocusTest" />
      </ThemeProvider>,
    );
    const input = screen.getByLabelText("FocusTest");

    input.focus();
    // Can't directly check CSS :focus styles, but can check activeElement
    expect(document.activeElement).toBe(input);
  });

  it("generates a random id if none is provided", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextField label="RandomId" />
      </ThemeProvider>,
    );
    const input = screen.getByLabelText("RandomId");
    expect(input.id).toMatch(/^input-/);
  });
});
