import styled from "@emotion/styled";
import {
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

export type ButtonVariant = "primary" | "outline" | "text" | "danger" | "success";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant which defines how the button looks.
   * Options: "primary" | "outline" | "text" | "danger" | "success"
   */
  variant?: ButtonVariant;
  /** Text content of the button */
  children: ReactNode;
  /**Boolean to disable the button*/
  disabled?: boolean;
  /**Boolean to make the button fullwidth*/
  fullWidth?: boolean;
  /** Click function handler of the button */
  onClick?: () => void;
  /** Element placed before children */
  startIcon?: ReactElement;
  /** Element placed after children */
  endIcon?: ReactElement;
}

const StyledButton = styled.button<ButtonProps>(
  ({ theme, variant = "primary", fullWidth }) => {
    const base = {
      ...theme.typography.button,

      minHeight: theme.spacing.xl,
      /** when outline look is used then border appears. In this case we remove the additional px introduced by the border from the padding
       * to not add extra px to the total width and height */
      padding:
        variant === "outline"
          ? `${parseFloat(theme.spacing.md) - parseFloat(theme.spacing.px)}rem`
          : theme.spacing.md,
      borderRadius: theme.radii.md,
      border: "none",

      cursor: "pointer",

      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.xs,
      outline: "none",

      "&:focus-visible": {
        boxShadow: `0 0 0 ${theme.spacing.xxs}  ${theme.colors.stroke.focus}`,
      },

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },

      width: fullWidth ? "100%" : "auto",
    };

    const variants = {
      primary: {
        backgroundColor: theme.colors.primary.main,
        color: theme.colors.text.inverted,
        "&:not(:disabled):hover": {
          backgroundColor: theme.colors.primary.hover,
        },
        "&:not(:disabled):active": {
          backgroundColor: theme.colors.primary.press,
        },
      },
      outline: {
        backgroundColor: "transparent",
        border: `${theme.spacing.xxs} solid ${theme.colors.border}`,
        color: theme.colors.text.default,
        "&:not(:disabled):hover": {
          backgroundColor: theme.colors.background.hover,
        },
        "&:not(:disabled):active": {
          backgroundColor: theme.colors.background.press,
        },
      },
      text: {
        backgroundColor: "transparent",
        color: theme.colors.text.default,
        "&:not(:disabled):hover": {
          backgroundColor: theme.colors.background.hover,
        },
        "&:not(:disabled):active": {
          backgroundColor: theme.colors.background.press,
        },
      },
      danger: {
        backgroundColor: theme.colors.danger.main,
        color: theme.colors.danger.contrastText ?? theme.colors.text.inverted,
        "&:not(:disabled):hover": {
          backgroundColor: theme.colors.danger.light,
        },
        "&:not(:disabled):active": {
          backgroundColor: theme.colors.danger.dark,
        },
      },
      success: {
        backgroundColor: theme.colors.success.main,
        color: theme.colors.success.contrastText ?? theme.colors.text.inverted,
        "&:not(:disabled):hover": {
          backgroundColor: theme.colors.success.light,
        },
        "&:not(:disabled):active": {
          backgroundColor: theme.colors.success.dark,
        },
      },
    };

    return {
      ...base,
      ...variants[variant],
    };
  },
);

/** Button for call to action */
export const Button = ({
  variant = "primary",
  children,
  disabled = false,
  fullWidth = false,
  onClick,
  startIcon,
  endIcon,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      aria-label={typeof children === "string" ? children : undefined} // For accessibility
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
};
