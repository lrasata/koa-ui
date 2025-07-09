import type { Preview } from "@storybook/react";
import { theme } from "../src";
import { ThemeProvider } from "@emotion/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: `${theme.fontFamily} !important` }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
