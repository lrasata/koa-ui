import type { Meta, StoryObj } from "@storybook/react";
import { useTheme } from "@emotion/react";

const meta: Meta = {
  title: "Welcome",
  parameters: {
    docs: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WelcomePage: Story = {
  render: () => {
    const theme = useTheme();

    return (
      <div>
        <img src={"/koa.png"} alt="Koa UI logo" width="200px" />
        <div style={{ fontFamily: theme.fontFamily, padding: 20 }}>
          <h1>Welcome</h1>

          <p>
            Koa UI is a modern, accessible, and customizable React component
            library designed to streamline your development process and ensure
            consistent user interfaces.
          </p>

          <h2>Installation</h2>
          <p>Install Koa UI and its peer dependencies with npm or yarn:</p>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            <code>npm install @koa-ui/core @emotion/react @emotion/styled</code>
          </pre>
          <p>Or with yarn:</p>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            <code>yarn add @koa-ui/core @emotion/react @emotion/styled</code>
          </pre>

          <h2>🚀 Getting Started</h2>
          <ul>
            <li>
              Wrap your app with the <code>ThemeProvider</code> to enable
              theming.
            </li>
            <li>
              Explore the sidebar to see available components and their
              variants.
            </li>
            <li>
              Use the <strong>Controls</strong> panel to test different props in
              real time.
            </li>
            <li>
              Refer to the <strong>Docs</strong> tab in each story for usage and
              accessibility details.
            </li>
          </ul>

          <h2>Best Practices</h2>
          <ul>
            <li>
              Write comprehensive stories for every component state and edge
              case.
            </li>
            <li>Use the built-in accessibility addon to catch issues early.</li>
            <li>
              Leverage our design tokens and theme to keep styling consistent.
            </li>
          </ul>

          <p style={{ marginTop: 20, fontStyle: "italic" }}>
            Let’s build beautiful and accessible interfaces together! 🌿
          </p>
        </div>
      </div>
    );
  },
};

WelcomePage.storyName = "Welcome";
