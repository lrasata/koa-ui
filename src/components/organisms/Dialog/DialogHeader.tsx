/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../../../theme/theme.ts";
import { Typography } from "../../atoms/typography/Typography.tsx";
import { FaTimes } from "react-icons/fa";
import type { ButtonVariant } from "../../atoms/button/Button.tsx";

export interface DialogAction {
  label: string;
  variant?: ButtonVariant;
  onClick: () => void;
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
  height: ${theme.spacing.xxl};
  width: "100%";
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledCloseButton = styled.button(({ theme }) => ({
  cursor: "pointer",
  color: theme.colors.text.secondary,
  border: "none",
  padding: theme.spacing.base,
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

interface DialogHeaderProps {
  title: string;
  cancel: DialogAction;
}

export const DialogHeader = ({ title, cancel }: DialogHeaderProps) => {
  return (
    <StyledDiv>
      <StyledHeader>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
      </StyledHeader>
      <StyledCloseButton onClick={cancel.onClick} aria-label={cancel.label}>
        <FaTimes />
      </StyledCloseButton>
    </StyledDiv>
  );
};
