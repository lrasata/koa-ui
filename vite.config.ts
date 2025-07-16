/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      {
        test: {
          name: "unit",
          environment: "jsdom",
          globals: true,
          setupFiles: "./src/tests/setUpTests.ts", // create if not exists
          include: ["src/**/*.test.{ts,tsx}"],
        },
      },
    ],
  },
});
