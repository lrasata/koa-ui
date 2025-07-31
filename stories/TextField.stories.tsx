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
    type: {
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
    startAdornment: {
      control: false,
    },
    endAdornment: {
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

export const AllTextFieldVariant: Story = {
  render: (args) => (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <TextField
        label="Text Field with start icon"
        {...args}
        startAdornment={<FaSearch />}
      />
      <TextField
        label="Text Field with end icon"
        {...args}
        endAdornment={<FaSync />}
      />
      <TextField
        label="Text Field with start and end icons"
        {...args}
        startAdornment={<FaSearch />}
        endAdornment={<FaSync />}
      />
      <TextField label="Password" type="password" {...args} />
    </div>
  ),
};
