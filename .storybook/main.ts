import type { StorybookConfig } from "@storybook/react-webpack5";


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  webpackFinal: (config: any) => {
    config.resolve.modules = [...(config.resolve.modules || []), "./src"];
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        type: "javascript/auto",
        use: [
          {
            loader: '@svgr/webpack', options: { icon: true }
          },
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[path][name].[ext]'
            }
          }, 'url-loader',],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader', 'raw-loader'],
      }
    ];
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
