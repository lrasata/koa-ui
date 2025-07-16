import type { TestRunnerConfig } from "@storybook/test-runner";
import type { Page } from "playwright";
import { injectAxe, checkA11y } from "axe-playwright";

const config: TestRunnerConfig = {
  async preVisit(page: Page) {
    await injectAxe(page);
  },
  async postVisit(page: Page) {
    await page.waitForSelector("#storybook-root", { timeout: 20000 });
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};

export default config;
