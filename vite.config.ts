/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "KoaUI",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
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
