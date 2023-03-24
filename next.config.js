const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withNextra({
  images: { unoptimized: true },
  basePath: isProd ? '/Prompt-Engineering-Guide' : '',
  assetPrefix: isProd ? '/Prompt-Engineering-Guide' : '',
  trailingSlash: true
});
