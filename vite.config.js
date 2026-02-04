import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx}"',
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/__tests__/**/*.{js,jsx}", "src/**/*.test.{js,jsx}"],
    exclude: ["tests/**"],
  },
});
