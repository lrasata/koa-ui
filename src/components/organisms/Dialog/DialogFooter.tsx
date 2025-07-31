/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../../../theme/theme.ts";
import { Button } from "../../atoms/button/Button.tsx";
import type { DialogAction } from "./DialogHeader.tsx";

interface DialogFooterProps {
  submit?: DialogAction;
  cancel?: DialogAction;
}

const StyledDiv = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: ${theme.spacing.md};
`;

export const DialogFooter = ({ submit, cancel }: DialogFooterProps) => {
  return (
    <StyledDiv>
      {submit && (
        <Button
          variant={submit.variant || "primary"}
          onClick={() => submit.onClick()}
        >
          {submit.label}
        </Button>
      )}
      {cancel && (
        <Button
          variant={cancel.variant || "outline"}
          onClick={() => cancel.onClick()}
        >
          {cancel.label}
        </Button>
      )}
    </StyledDiv>
  );
};
