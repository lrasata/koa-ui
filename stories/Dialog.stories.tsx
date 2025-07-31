import type { Meta, StoryObj } from "@storybook/react";

import { Button, Dialog } from "../src";
import { Typography } from "../src";
import { useState } from "react";

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: false,
    },
    title: {
      control: { type: "text" },
    },
    children: {
      control: false,
    },
    submit: {
      control: false,
    },
    cancel: {
      control: false,
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOpen: false,
    title: "Delete account",
    children: (
      <Typography>
        Are you sure you want to delete your account? This action cannot be
        undone and will permanently remove all your data from our servers.
      </Typography>
    ),
    submit: {
      label: "Delete",
      variant: "danger",
      onClick: () => {},
    },
    cancel: {
      label: "Cancel",
      onClick: () => {},
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
      setIsOpen(!isOpen);
    };

    const wrapClose = (action: typeof args.cancel): typeof args.cancel => ({
      ...action,
      onClick: () => {
        action.onClick();
        setIsOpen(false);
      },
    });

    return (
      <>
        <Button onClick={handleOnClick}> Open dialog</Button>
        {isOpen && (
          <Dialog
            isOpen={isOpen}
            title={args.title}
            {...(args.submit && { submit: wrapClose(args.submit) })}
            cancel={wrapClose(args.cancel)}
          >
            {args.children}
          </Dialog>
        )}
      </>
    );
  },
};
