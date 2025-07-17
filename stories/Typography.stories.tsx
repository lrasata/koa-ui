import type { Meta, StoryObj } from "@storybook/react";
import { theme, Typography as AppTypography, typographyVariants } from "../src";

const meta: Meta<typeof AppTypography> = {
  title: "Foundations/Typography",
  component: AppTypography,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: { type: "select" },
      options: typographyVariants,
      description: "Variant which defines how the typography looks",
      table: {
        type: {
          summary:
            '"h1" | "h2" | "h3" | "h4" | "subtitle" | "body" | "button"| "caption"',
        },
      },
    },
    color: {
      control: { type: "select" },
      options: ["default", "inverted", "primary", "danger", "success"],
      description: "Text color",
      table: {
        type: {
          summary: '"default" | "inverted" | "primary" | "danger" | "success"',
        },
      },
    },
    weight: {
      control: { type: "select" },
      options: ["regular", "medium", "semi-bold"],
      description: "Font weight of text",
      table: {
        type: {
          summary: '"regular" | "medium" | "semi-bold"',
        },
      },
    },
    ellipsis: {
      control: { type: "boolean" },
    },
    component: { control: false },
    children: {
      control: "text",
      description: "Text to display",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppTypography>;

export const Typography: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis est, sollicitudin vitae nisi gravida, facilisis dictum augue. " +
      "Sed sagittis a lectus convallis maximus.",
  },
  render: (args) => <AppTypography {...args}>{args.children}</AppTypography>,
};

export const AllTypographies: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <AppTypography variant="h1" component="h1">
        H1. Lorem ipsum dolor sit amet
      </AppTypography>
      <AppTypography variant="h2" component="h2">
        H2. Lorem ipsum dolor sit amet
      </AppTypography>
      <AppTypography variant="h3" component="h3">
        H3. Lorem ipsum dolor sit amet
      </AppTypography>
      <AppTypography variant="h4" component="h4">
        H4. Lorem ipsum dolor sit amet
      </AppTypography>
      <AppTypography variant="subtitle">
        Subtitle. Lorem ipsum dolor sit amet
      </AppTypography>
      <AppTypography variant="body">
        Body. Lorem ipsum dolor sit amet
      </AppTypography>
      <AppTypography variant="button">
        Button. Lorem ipsum dolor sit amet
      </AppTypography>
      <AppTypography variant="caption">
        caption. Lorem ipsum dolor sit amet
      </AppTypography>
      <br />
      <AppTypography variant="body" color="default">
        Text body with default color
      </AppTypography>
      <div style={{ backgroundColor: theme.colors.text.default }}>
        <AppTypography variant="body" color="inverted">
          Text body with inverted color
        </AppTypography>
      </div>
      <AppTypography variant="body" color="primary">
        Text body with primary color
      </AppTypography>
      <AppTypography variant="body" color="danger">
        Text body with danger color
      </AppTypography>
      <AppTypography variant="body" color="success">
        Text body with success color
      </AppTypography>
      <br />
      <AppTypography variant="body" weight="regular">
        Text body with regular font weight
      </AppTypography>
      <AppTypography variant="body" weight="medium">
        Text body with medium font weight
      </AppTypography>
      <AppTypography variant="body" weight="semibold">
        Text body with semi-bold font weight
      </AppTypography>
    </div>
  ),
};
