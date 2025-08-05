import styled from "@emotion/styled";
import React from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  disabled?: boolean;
}

const StyledLink = styled.a<LinkProps>(({ theme, disabled }) => ({
  color: disabled ? theme.colors.link.disabled : theme.colors.link.default,
  "*": {
    color: disabled
      ? `${theme.colors.link.disabled} !important`
      : `${theme.colors.link.default} !important`,
  },
  textDecoration: "none",
  cursor: disabled ? "default" : "pointer",
  pointerEvents: disabled ? "none" : "auto",

  "&:hover, &:focus": {
    color: disabled ? theme.colors.link.disabled : theme.colors.link.hover,
    "*": {
      color: disabled
        ? `${theme.colors.link.disabled} !important`
        : `${theme.colors.link.hover} !important`,
    },
    textDecoration: disabled ? "none" : "underline",
    outline: "none",
  },

  "&:visited": {
    color: theme.colors.link.visited,
    textDecorationColor: theme.colors.link.visited,
    fontStyle: "italic",
    "*": {
      color: `${theme.colors.link.visited} !important`,
    },
  },
}));

const Link = ({ href, disabled = false, children, ...props }: LinkProps) => (
  <StyledLink
    {...props}
    href={disabled ? undefined : href} // avoid empty href on disabled
    tabIndex={disabled ? -1 : 0}
    aria-disabled={disabled ? "true" : "false"}
    onClick={disabled ? (e) => e.preventDefault() : props.onClick}
    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
    disabled={disabled}
  >
    {children}
  </StyledLink>
);

export default Link;
