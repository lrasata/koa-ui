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
      options: ["primary", "outline", "text", "danger", "success"],
      description: "Variant which defines how the button looks",
      table: {
        type: {
          summary: '"primary" | "outline" | "text" | "danger" | "success"',
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

export const AllButtonVariant: Story = {
  args: {
    onClick: () => alert("Button clicked!"),
  },
  render: (args) => (
      <div style={{display: "grid", gap: "16px", gridTemplateColumns: "repeat(6, max-content)"}}>
        <Button {...args} variant="primary">
          Primary
        </Button>
        <Button {...args} variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="outline" {...args}>
          Outline
        </Button>
        <Button variant="outline" {...args} disabled>
          Disabled
        </Button>
        <Button variant="text" {...args}>
          Text
        </Button>
        <Button variant="text" {...args} disabled>
          Disabled
        </Button>

        <Button {...args} variant="primary" startIcon={<FaCheckCircle/>}>
          Primary
        </Button>
        <Button {...args} variant="primary" startIcon={<FaCheckCircle/>} disabled>
          Disabled
        </Button>
        <Button variant="outline" {...args} startIcon={<FaRegTrashAlt/>}>
          Outline
        </Button>
        <Button variant="outline" {...args} startIcon={<FaRegTrashAlt/>} disabled>
          Disabled
        </Button>
        <Button variant="text" {...args} startIcon={<FaRedoAlt/>}>
          Text
        </Button>
        <Button variant="text" {...args} startIcon={<FaRedoAlt/>} disabled>
          Disabled
        </Button>

        <Button {...args} variant="primary" endIcon={<FaCheckCircle/>}>
          Primary
        </Button>
        <Button {...args} variant="primary" endIcon={<FaCheckCircle/>} disabled>
          Disabled
        </Button>
        <Button variant="outline" {...args} endIcon={<FaRegTrashAlt/>}>
          Outline
        </Button>
        <Button variant="outline" {...args} endIcon={<FaRegTrashAlt/>} disabled>
          Disabled
        </Button>
        <Button variant="text" {...args} endIcon={<FaRedoAlt/>}>
          Text
        </Button>
        <Button variant="text" {...args} endIcon={<FaRedoAlt/>} disabled>
          Disabled
        </Button>

          <Button {...args} variant="danger">
              Danger
          </Button>
          <Button {...args} variant="danger" disabled>
              Disabled
          </Button>
          <Button {...args} variant="success">
              Success
          </Button>
          <Button {...args} variant="success" disabled>
              Disabled
          </Button>
      </div>


  ),
};
