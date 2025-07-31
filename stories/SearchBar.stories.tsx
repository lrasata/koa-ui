import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "../src";

const meta: Meta<typeof SearchBar> = {
  title: "Inputs/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],

  argTypes: {
    id: {
      control: false,
    },
    searchedText: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    ariaLabelSearchButton: {
      control: false,
    },
    ariaLabelClearButton: {
      control: false,
    },
    clearable: {
      control: { type: "boolean" },
    },
    handleSearch: {
      control: false,
    },
    debounceTime: {
      control: { type: "number" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Basic: Story = {
  args: {
    searchedText: "John doe",
    placeholder: "start to type to search",
    handleSearch: () => console.log("Search performed"),
  },
  render: (args) => (
    <div style={{ width: "500px" }}>
      <SearchBar {...args} />
    </div>
  ),
};
