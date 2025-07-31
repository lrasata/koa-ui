/** @jsxImportSource @emotion/react */
import type { ElementType, ReactNode } from "react";
import styled from "@emotion/styled";

/**
 * Props for the `Card` component.
 */
interface CardProps {
  /**
   * The content of the card.
   */
  children: ReactNode;

  /**
   * Optional padding for the card content. Defaults to `'1.5rem'`.
   */
  padding?: string;

  /**
   * Optional click handler. If provided, the card will show a pointer cursor on hover.
   */
  onClick?: () => void;

  /**
   * If true, disables the hover effect (box-shadow and pointer cursor).
   */
  hoverLess?: boolean;

  /**
   * The HTML element to render as the card. Defaults to `'div'`.
   */
  as?: ElementType;
}

/**
 * A styled div component that represents the card container,
 * supporting hover effects and optional interactivity.
 */
const StyledDiv = styled("div")<CardProps>(
  ({ theme, padding, onClick, hoverLess }) => ({
    border: `1px solid ${theme.colors.border}`,
    padding: padding || theme.spacing?.lg || "1.5rem",
    backgroundColor: theme.colors.background.surface,
    transition: "all 0.2s ease-in-out",
    ...(hoverLess
      ? {}
      : {
          "&:hover": {
            cursor: onClick ? "pointer" : "default",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
          },
        }),
  }),
);

/**
 * A flexible and reusable Card component.
 *
 * Supports custom padding, hover styles, click handling, and the ability
 * to render as different HTML elements.
 *
 */
export const Card = ({
  children,
  as = "div",
  padding = "1.5rem",
  hoverLess = false,
  onClick,
}: CardProps) => {
  return (
    <StyledDiv
      as={as}
      hoverLess={hoverLess}
      padding={padding}
      onClick={onClick}
    >
      {children}
    </StyledDiv>
  );
};
