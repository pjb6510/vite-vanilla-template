/** @type {import("prettier").Config} */

const config = {
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

/** @type {import("@trivago/prettier-plugin-sort-imports").PluginConfig} */
const sortImportsPluginConfig = {
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '\\.(c|le|sc)ss$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default {
  ...config,
  ...sortImportsPluginConfig,
};
