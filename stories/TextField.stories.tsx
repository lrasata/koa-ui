import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "../src";
import { FaSearch } from "react-icons/fa";
import { FaSync } from "react-icons/fa";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],

  argTypes: {
    id: {
      control: false,
    },
    label: {
      control: { type: "text" },
    },
    required: {
      control: { type: "boolean" },
    },
    helperText: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const DefaultTextField: Story = {
  args: {
    label: "Email",
    helperText: "Please enter your email address",
  },
  render: (args) => (
    <div style={{ width: "500px" }}>
      <TextField {...args} />
    </div>
  ),
};

export const TextFieldWithIcons: Story = {
  args: {
    label: "Text field",
  },
  render: (args) => (
    <div style={{ width: "500px" }}>
      <TextField {...args} startIcon={<FaSearch />} endIcon={<FaSync />} />
    </div>
  ),
};
