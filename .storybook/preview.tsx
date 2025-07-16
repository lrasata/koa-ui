import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      // 'todo' - 👇 This component's accessibility tests will not fail - Instead, they display warnings in the Storybook UI
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            fontFamily: `${theme.fontFamily} !important`,
            width: "600px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
