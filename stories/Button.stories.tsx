import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // <-- this enables automatic docs page

  // Center the component in the preview canvas
  parameters: {
    layout: "centered",
  },

  // Explicitly define the props for better docs
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "outline", "text"],
      description: "Variant which defines how the button looks",
      table: {
        type: {
          summary: '"primary" | "outline" | "text"',
        },
      },
    },
    children: {
      control: "text",
      description: "Text content of the button",
    },
    disabled: {
      control: "boolean",
      description: "Boolean to disable the button",
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    onClick: () => alert("Button clicked!"),
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
    onClick: () => alert("Button clicked!"),
  },
};
