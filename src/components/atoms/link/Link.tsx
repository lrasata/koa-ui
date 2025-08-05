import styled from "@emotion/styled";
import React from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Href for the link
   */
  href?: string;
  /**
   * Use target to specify whether it is an internal or external link to the application
   */
  target?: string;
  /**
   * Specifies if the link is disabled or not
   */
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
    "*": {
      color: `${theme.colors.link.visited} !important`,
    },
  },
}));

/**
 * Reference in a document that users can click to navigate to another resource — such as a webpage, a section within the same page, a file, or an application.
 */
const Link = ({ href, disabled = false, children, ...props }: LinkProps) => (
  <StyledLink
    {...props}
    href={disabled ? undefined : href}
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
