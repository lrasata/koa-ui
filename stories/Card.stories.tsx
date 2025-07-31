import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../src";
import { Typography as KoaTypography } from "../src";

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"], // <-- this enables automatic docs page

  // Center the component in the preview canvas
  parameters: {
    layout: "centered",
  },

  // Explicitly define the props for better docs
  argTypes: {
    children: {
      control: "text",
    },
    padding: {
      control: "text",
    },
    hoverLess: {
      control: "boolean",
    },
    onClick: {
      control: false,
    },
    as: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    padding: "24px",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nulla, sollicitudin et sapien ut, accumsan hendrerit nulla. Cras condimentum pellentesque eros, quis placerat felis pellentesque at",
    hoverLess: false,
  },
  render: (args) => (
    <div style={{ width: "600px", display: "flex", justifyContent: "center" }}>
      <Card
        padding={args.padding}
        onClick={() => {}}
        hoverLess={args.hoverLess}
        as="section"
      >
        <KoaTypography variant="body">{args.children}</KoaTypography>
      </Card>
    </div>
  ),
};
