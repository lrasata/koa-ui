/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const StyledButton = styled.button<ButtonProps>(
  ({ theme, variant = "primary" }) => {
    const base = {
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSizes.base,
      fontWeight: theme.fontWeights.medium,
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      borderRadius: theme.radii.md,
      lineHeight: 1.5,
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",

      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },

      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${theme.colors.primaryFocus}`,
      },
    };

    const variants = {
      primary: {
        backgroundColor: theme.colors.primary,
        color: "#fff",
        "&:hover": {
          backgroundColor: theme.colors.primaryHover,
        },
      },
      outline: {
        backgroundColor: "transparent",
        border: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
        "&:hover": {
          backgroundColor: theme.colors.surface,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: theme.colors.text,
        "&:hover": {
          backgroundColor: theme.colors.surface,
        },
      },
    };

    return {
      ...base,
      ...variants[variant],
    };
  },
);

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  ...props
}) => {
  return <StyledButton variant={variant} {...props} />;
};
