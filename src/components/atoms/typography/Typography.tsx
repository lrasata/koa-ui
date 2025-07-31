/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { type ElementType, type HTMLAttributes, type ReactNode } from "react";
import type { KoaTheme } from "../../../theme/defaultTheme.ts";

export const typographyVariants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "subtitle",
  "body",
  "button",
  "label",
  "caption",
] as const;

export type TypographyVariant = (typeof typographyVariants)[number];

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Variant which defines how the text looks */
  variant?: TypographyVariant;
  /** Color defines which color to use*/
  color?: keyof KoaTheme["colors"]["text"] | "primary" | "danger" | "success";
  /** Weight defines which font weight to use*/
  weight?: keyof KoaTheme["fonts"]["fontWeights"];
  /** Component defines which html tag to associated it with*/
  component?: ElementType;
  /** Text to display*/
  children: ReactNode;
  /** If true, applies ellipsis to truncate overflowing text */
  ellipsis?: boolean;
}

const StyledTypography = styled.span<TypographyProps>`
  ${({ theme, variant = "body" }) => theme.typography[variant]};
  ${({ theme, color = "default" }) => {
    const textColor =
      theme.colors.text[color as keyof typeof theme.colors.text];
    if (textColor) {
      return css`
        color: ${textColor};
      `;
    }

    const rootColor = theme.colors[color as keyof typeof theme.colors];

    const resolved =
      typeof rootColor === "string"
        ? rootColor
        : (rootColor as { main: string })?.main;

    return css`
      color: ${resolved};
    `;
  }}
  ${({ theme, weight }) =>
    weight &&
    css`
      font-weight: ${theme.fonts.fontWeights[weight]};
    `}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    `}
  font-family: ${({ theme }) => theme.fonts.fontFamily};
`;

/** Typography helps improve readability, establishes visual hierarchy and enhances user experience*/
export const Typography = ({
  variant = "body",
  color = "default",
  weight,
  component = "span",
  children,
  ellipsis,
  ...props
}: TypographyProps) => {
  const theme = useTheme() as KoaTheme;

  return (
    <StyledTypography
      as={component}
      variant={variant}
      color={color}
      weight={weight}
      theme={theme}
      ellipsis={ellipsis}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
