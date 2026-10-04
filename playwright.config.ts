import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Desktop 1440",
      use: {
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Desktop 1024",
      use: {
        viewport: { width: 1024, height: 768 },
      },
    },
    {
      name: "Tablet 768",
      use: {
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: "Mobile 360",
      use: {
        viewport: { width: 360, height: 740 },
      },
    },
  ],
});
