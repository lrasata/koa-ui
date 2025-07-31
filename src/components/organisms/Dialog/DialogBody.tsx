/** @jsxImportSource @emotion/react */
import { theme } from "../../../theme/theme.ts";
import styled from "@emotion/styled";
import { type ReactNode } from "react";

const StyledDiv = styled.div`
  padding: ${theme.spacing.md};
  margin: 0;
`;

interface DialogBodyProps {
  children?: ReactNode;
}

export const DialogBody = ({ children }: DialogBodyProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};
