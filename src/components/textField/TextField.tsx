/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Typography } from "../typography/Typography.tsx";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label : Text to display above the input field */
  label?: string;
  /** Input field Id */
  id?: string;
  /** Error message to display below the input field */
  error?: string;
  /** Helper Text to display below the input field */
  helperText?: string;
  /** Boolean to specify if input is required */
  required?: boolean;
  /** Icon to display at the start inside the input */
  startIcon?: ReactNode;
  /** Icon to display at the end inside the input */
  endIcon?: ReactNode;
}

const StyledDivWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.xs,
}));

const InputWrapper = styled.div(({}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

const IconWrapper = styled.div<{ position: "start" | "end" }>(
  ({ theme, position }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: theme.colors.text.secondary,
    pointerEvents: "none",
    userSelect: "none",
    padding: `0 ${theme.spacing.xs}`,
    [position === "start" ? "left" : "right"]: theme.spacing.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  }),
);

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
export const TextField = ({
  label,
  id,
  error,
  helperText,
  required,
  startIcon,
  endIcon,
  ...props
}: TextFieldProps) => {
  const inputId =
    id || props.name || `input-${Math.random().toString(36).substring(2, 9)}`;

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
        {startIcon && <IconWrapper position="start">{startIcon}</IconWrapper>}
        <StyledInput
          id={inputId}
          hasError={!!error}
          hasStartIcon={!!startIcon}
          hasEndIcon={!!endIcon}
          {...props}
        />
        {endIcon && <IconWrapper position="end">{endIcon}</IconWrapper>}
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
};
