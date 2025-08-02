import type { Meta, StoryObj } from "@storybook/react";
import { Button, MediaCard } from "../src";

const meta: Meta<typeof MediaCard> = {
  title: "Layout/MediaCard",
  component: MediaCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
    height: {
      control: { type: "number" },
    },
    imgSrc: {
      control: { type: "text" },
    },
    imgAlt: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    body: {
      control: { type: "text" },
    },
    actions: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof MediaCard>;

export const Basic: Story = {
  args: {
    imgSrc: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    imgAlt: "forest image",
    title: "Title of the media card",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at varius elit, et tincidunt libero.",
  },
  render: (args) => (
    <div style={{ width: "300px" }}>
      <MediaCard {...args} />{" "}
    </div>
  ),
};

export const ExamplesWithActions: Story = {
  args: {
    imgSrc: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    imgAlt: "forest image",
    title: "Title of the media card",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at varius elit, et tincidunt libero.",
    actions: <Button fullWidth>Click me</Button>,
  },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "700px",
      }}
    >
      <MediaCard {...args} />
      <MediaCard
        {...args}
        actions={
          <Button variant="outline" fullWidth>
            Click me
          </Button>
        }
      />
      <MediaCard
        imgSrc={args.imgSrc}
        imgAlt={args.imgAlt}
        title={args.title}
        actions={<Button fullWidth>Click me</Button>}
      />
      <MediaCard
        imgSrc={args.imgSrc}
        imgAlt={args.imgAlt}
        title={args.title}
        actions={
          <Button variant="outline" fullWidth>
            Click me
          </Button>
        }
      />
    </div>
  ),
};

export const ExamplesWithoutActions: Story = {
  args: {
    imgSrc: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    imgAlt: "forest image",
    title: "Title of the media card",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at varius elit, et tincidunt libero.",
  },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(1, 1fr)",
        width: "360px",
      }}
    >
      <MediaCard {...args} onClick={() => alert("Card clicked")} />
      <MediaCard
        imgSrc={args.imgSrc}
        imgAlt={args.imgAlt}
        title={args.title}
        onClick={() => alert("Card clicked")}
      />
    </div>
  ),
};
