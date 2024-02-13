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
            find: '@styles',
            replacement: `${UI_PATH}/src/styles`
          },
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
          {
            find: "@icons",
            replacement: resolve("../../packages/icons/dist"),
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
