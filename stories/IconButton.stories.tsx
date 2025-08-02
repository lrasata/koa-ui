import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../src";
import { FaSearch, FaRegTrashAlt, FaTimes } from "react-icons/fa";

const meta: Meta<typeof IconButton> = {
  title: "Inputs/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
    ariaLabel: {
      control: { type: "text" },
    },
    onClick: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    ariaLabel: "Search",
    onClick: () => alert("icon button clicked!"),
    icon: <FaSearch />,
  },
  render: (args) => <IconButton {...args} />,
};

export const Examples: Story = {
  args: {
    onClick: () => alert("icon button clicked!"),
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
      <IconButton {...args} ariaLabel={"Delete"} icon={<FaRegTrashAlt />} />
      <IconButton {...args} ariaLabel={"Search"} icon={<FaSearch />} />
      <IconButton {...args} ariaLabel={"Close"} icon={<FaTimes />} />
    </div>
  ),
};
