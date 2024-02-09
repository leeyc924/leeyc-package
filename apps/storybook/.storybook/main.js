import { mergeConfig } from "vite";
import { resolve } from 'path';
const UI_PATH = resolve("../../packages/ui");

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    return mergeConfig({
      ...config,
      resolve: {
        alias: [
          {
            find: "@components",
            replacement: `${UI_PATH}/src/components`,
          },
          {
            find: "@types",
            replacement: `${UI_PATH}/src/types`,
          },
          {
            find: "@hooks",
            replacement: `${UI_PATH}/src/hooks`,
          },
        ],
      },
      define: {
        "process.env": {},
      },
      css: {
        postcss: null,
      },
    });
  },
};

export default config;
