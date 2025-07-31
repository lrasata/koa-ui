import type { Meta, StoryObj } from "@storybook/react";
import { theme, Typography as KoaTypography, typographyVariants } from "../src";

const meta: Meta<typeof KoaTypography> = {
  title: "Foundations/Typography",
  component: KoaTypography,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: { type: "select" },
      options: typographyVariants,
      description: "Variant which defines how the typography looks",
      table: {
        type: {
          summary:
            '"h1" | "h2" | "h3" | "h4" | "subtitle" | "body" | "button" | "label" | "caption"',
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

type Story = StoryObj<typeof KoaTypography>;

export const Basic: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis est, sollicitudin vitae nisi gravida, facilisis dictum augue. " +
      "Sed sagittis a lectus convallis maximus.",
  },
  render: (args) => <KoaTypography {...args}>{args.children}</KoaTypography>,
};

export const AllTypographies: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <KoaTypography variant="h1" component="h1">
        H1. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="h2" component="h2">
        H2. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="h3" component="h3">
        H3. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="h4" component="h4">
        H4. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="subtitle">
        Subtitle. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="body">
        Body. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="button">
        Button. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="label">
        Label. Lorem ipsum dolor sit amet
      </KoaTypography>
      <KoaTypography variant="caption">
        caption. Lorem ipsum dolor sit amet
      </KoaTypography>
      <br />
      <KoaTypography variant="body" color="default">
        Text body with default color
      </KoaTypography>
      <div style={{ backgroundColor: theme.colors.text.default }}>
        <KoaTypography variant="body" color="inverted">
          Text body with inverted color
        </KoaTypography>
      </div>
      <KoaTypography variant="body" color="primary">
        Text body with primary color
      </KoaTypography>
      <KoaTypography variant="body" color="danger">
        Text body with danger color
      </KoaTypography>
      <KoaTypography variant="body" color="success">
        Text body with success color
      </KoaTypography>
      <br />
      <KoaTypography variant="body" weight="regular">
        Text body with regular font weight
      </KoaTypography>
      <KoaTypography variant="body" weight="medium">
        Text body with medium font weight
      </KoaTypography>
      <KoaTypography variant="body" weight="semibold">
        Text body with semi-bold font weight
      </KoaTypography>
    </div>
  ),
};
