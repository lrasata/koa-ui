import styled from "@emotion/styled";
import type { ButtonHTMLAttributes, ReactElement } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Aria label of icon button*/
  ariaLabel: string;
  /** Click function handler of the button */
  onClick: () => void;
  /** Icon to display */
  icon: ReactElement;
}

const IconButtonWrapper = styled.button(({ theme }) => ({
  cursor: "pointer",
  color: theme.colors.text.secondary,
  border: "none",
  padding: theme.spacing.sm,
  background: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: theme.colors.background.hover,
    borderRadius: "50%",
  },
  "&:focus": {
    background: theme.colors.background.hover,
    outline: `3px solid ${theme.colors.stroke.focus}`,
    borderRadius: "50%",
    border: "none",
  },
}));

/** Button that displays an icon instead of text */
export const IconButton = (props: IconButtonProps) => {
  return (
    <IconButtonWrapper {...props} aria-label={props.ariaLabel}>
      {props.icon}
    </IconButtonWrapper>
  );
};
