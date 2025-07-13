import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRedoAlt } from "react-icons/fa";

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
    startIcon: { control: false },
    endIcon: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

export const ButtonsWithIcon: Story = {
  args: {
    onClick: () => alert("Button clicked!"),
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Button {...args} variant="primary" startIcon={<FaCheckCircle />}>
        Button
      </Button>
      <Button variant="outline" {...args} endIcon={<FaRegTrashAlt />}>
        Button
      </Button>
      <Button variant="text" {...args} endIcon={<FaRedoAlt />}>
        Button
      </Button>
    </div>
  ),
};
