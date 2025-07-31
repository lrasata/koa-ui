/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useState,
} from "react";
import { Typography } from "../typography/Typography.tsx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label : Text to display above the input field */
  label?: string;
  /** Type of input field : 'text', 'password', 'number', 'email' */
  type?: string;
  /** Input field Id */
  id?: string;
  /** Error message to display below the input field */
  error?: string;
  /** Helper Text to display below the input field */
  helperText?: string;
  /** Boolean to specify if input is required */
  required?: boolean;
  /** Element to display at the start inside the input */
  startAdornment?: ReactNode;
  /** Element to display at the end inside the input */
  endAdornment?: ReactNode;
}

const StyledDivWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.xs,
  overflow: "visible",
}));

const InputWrapper = styled.div(({}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

const AdornmentWrapper = styled.div<{ position: "start" | "end" }>(
  ({ theme, position }) => ({
    position: "absolute",
    [position === "start" ? "left" : "right"]: theme.spacing.sm,
    top: "50%",
    transform: "translateY(-50%)",
    color: theme.colors.text.secondary,
    padding: `0 ${theme.spacing.xs}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    zIndex: 1,
  }),
);

const StyledPasswordToggleButton = styled.button(({ theme }) => ({
  position: "absolute",
  right: theme.spacing.base,
  color: theme.colors.text.secondary,
  padding: theme.spacing.sm,
  border: "none",
  background: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: theme.colors.background.hover,
    borderRadius: "50%",
  },

  "&:focus": {
    background: theme.colors.background.hover,
    outline: `2px solid ${theme.colors.stroke.focus}`,
    borderRadius: "50%",
    border: "none",
  },
}));

const StyledInput = styled.input<{
  hasError?: boolean;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
}>(({ theme, hasError, hasStartIcon, hasEndIcon }) => ({
  flex: 1,
  padding: `${theme.spacing.sm} ${theme.spacing.base}`,
  paddingLeft: hasStartIcon
    ? `calc(${theme.spacing.base} + 24px)`
    : theme.spacing.base,
  paddingRight: hasEndIcon
    ? `calc(${theme.spacing.base} + 40px)`
    : theme.spacing.base,
  height: theme.spacing.lg,
  borderRadius: theme.spacing.sm,
  fontSize: theme.fonts.fontSizes.sm,
  fontFamily: theme.fonts.fontFamily,
  backgroundColor: theme.colors.background.default,
  border: `1px solid ${hasError ? theme.colors.danger.main : theme.colors.border}`,
  transition: "border 0.5s",

  "&:focus": {
    outline: `2px solid ${hasError ? theme.colors.danger.main : theme.colors.stroke.focus}`,
    border: "none",
  },
}));

/** TextField lets user enter or edit a text */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      label,
      type = "text",
      id,
      error,
      helperText,
      required,
      startAdornment,
      endAdornment,
      ...props
    },
    ref,
  ) {
    const inputId =
      id || props.name || `input-${Math.random().toString(36).substring(2, 9)}`;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <StyledDivWrapper>
        {label && (
          <Typography variant="label">
            <label htmlFor={inputId}>
              {label} {required && <span aria-label="required">*</span>}
            </label>
          </Typography>
        )}

        <InputWrapper>
          {startAdornment && (
            <AdornmentWrapper position="start">
              {startAdornment}
            </AdornmentWrapper>
          )}
          <StyledInput
            id={inputId}
            ref={ref}
            hasError={!!error}
            hasStartIcon={!!startAdornment}
            hasEndIcon={!!endAdornment || type === "password"}
            type={inputType}
            {...props}
          />
          {type === "password" && (
            <StyledPasswordToggleButton
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </StyledPasswordToggleButton>
          )}
          {endAdornment && (
            <AdornmentWrapper position="end">{endAdornment}</AdornmentWrapper>
          )}
        </InputWrapper>

        {error ? (
          <Typography variant="caption" color="danger">
            {error}
          </Typography>
        ) : helperText ? (
          <Typography variant="caption">{helperText}</Typography>
        ) : null}
      </StyledDivWrapper>
    );
  },
);
