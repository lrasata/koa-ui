import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../src";
import Link from "../src/components/atoms/link/Link";

const meta: Meta<typeof Link> = {
  title: "Inputs/Link",
  component: Link,
  tags: ["autodocs"],

  parameters: {
    layout: "centered",
  },

  argTypes: {
    href: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  args: {
    href: "https://liantsoa-rasata.web.app/",
    target: "_blank",
    disabled: false,
  },
  render: (args) => (
    <Link {...args}>
      <Typography>Visit my website</Typography>
    </Link>
  ),
};
