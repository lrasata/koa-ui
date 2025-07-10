/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { type PropsWithChildren } from "react";

export type Variant = "primary" | "outline" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant which defines how the button looks.
   * Options: "primary" | "outline" | "text"
   */
  variant?: Variant;
  /** Text content of the button */
  children: string;
  /**Boolean to disable the button*/
  disabled?: boolean;
  /** Click function handler of the button */
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>(
  ({ theme, variant = "primary" }) => {
    const base = {
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSizes.base,
      fontWeight: theme.fontWeights.medium,
      lineHeight: theme.lineHeight,

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
      outline: "none",

      "&:focus-visible": {
        boxShadow: `0 0 0 ${theme.spacing.xxs}  ${theme.colors.stroke.focus}`,
        /** remove the additional px introduced by the border from the padding to not add extra px to the total width and height */
        padding: `${parseFloat(theme.spacing.md) - parseFloat(theme.spacing.xs)}rem`,
      },

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
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
    };

    return {
      ...base,
      ...variants[variant],
    };
  },
);

/** Clickable button for user interactions */
export const Button = ({
  variant = "primary",
  children,
  disabled = false,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      aria-label={children}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
