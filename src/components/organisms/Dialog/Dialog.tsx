/** @jsxImportSource @emotion/react */
import { type DialogAction, DialogHeader } from "./DialogHeader.tsx";
import { theme } from "../../../theme/theme.ts";
import styled from "@emotion/styled";
import { DialogBody } from "./DialogBody.tsx";
import React, { type ReactNode, useEffect, useRef } from "react";
import { DialogFooter } from "./DialogFooter.tsx";
import { createPortal } from "react-dom";
import { FocusTrap } from "focus-trap-react";

// avoid focus-trap entirely in test environments - avoids fighting with jsdom limitations.
const isTest = process.env.NODE_ENV === "test";

export interface DialogProps {
  /** Dialog is open */
  isOpen: boolean;
  /** Title of the dialog */
  title: string;
  /** Label, button variant and click handler for the cancel button */
  cancel: DialogAction;
  /** Label, button variant and click handler for the submit button */
  submit?: DialogAction;
  /** Dialog content */
  children: ReactNode;
}

const Divider = styled.div`
  height: ${theme.spacing.px};
  margin: 0;
  border-radius: ${theme.spacing.px};
  background-color: ${theme.colors.stroke.default};
`;

const DialogOverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${theme.zIndex.dialog};
  background-color: ${theme.colors.background.backdrop};
`;

const DialogContainerStyle = styled.div`
  background: ${theme.colors.background.default};
  border-radius: ${theme.radii.md};

  @media (min-width: ${theme.breakpoints.sm}) {
    /** 30rem = 480px */
    width: 30rem;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100vw;
    height: 100vh;
  }
`;

/** Dialog appears in front of the main content to capture the user's attention and require an action or response */
export const Dialog = ({
  isOpen,
  title,
  cancel,
  children,
  submit,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  const handleOnClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === dialogRef.current) {
      cancel.onClick();
    }
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <DialogOverlayStyle
            role="dialog"
            aria-modal="true"
            ref={dialogRef}
            tabIndex={-1}
            onClick={handleOnClickBackdrop}
          >
            {isTest ? (
              <div data-testid="focus-trap-fallback">
                <DialogContainerStyle>
                  <DialogHeader title={title} cancel={cancel} />
                  <Divider />
                  <DialogBody>{children}</DialogBody>
                  <DialogFooter cancel={cancel} {...(submit && { submit })} />
                </DialogContainerStyle>
              </div>
            ) : (
              <FocusTrap
                focusTrapOptions={{
                  escapeDeactivates: true,
                  clickOutsideDeactivates: true,
                }}
              >
                <DialogContainerStyle>
                  <DialogHeader title={title} cancel={cancel} />
                  <Divider />
                  <DialogBody>{children}</DialogBody>
                  <DialogFooter cancel={cancel} {...(submit && { submit })} />
                </DialogContainerStyle>
              </FocusTrap>
            )}
          </DialogOverlayStyle>,
          document.body,
        )}
    </>
  );
};
