/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setUpTests.ts",
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "storybook-static", "dist", "build"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/index.ts",
        "**/*.d.ts",
        "storybook-static/**",
        "**/*.stories.*",
        "**/manager-bundle.js",
        "**/runtime.js",
        "**/globals*.js",
        "**/common-manager-bundle.js",
        "**/iframe-*.js",
        "**/docsRenderer-*.js",
      ],
    },
  },
});
