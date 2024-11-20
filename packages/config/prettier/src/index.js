/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  parser: 'typescript',
  plugins: ['prettier-plugin-packagejson', '@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  semi: true,
  useTabs: false,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  importOrder: [
    '<TYPES>^(node:)',
    '<TYPES>',
    '<TYPES>^[.]',
    '<BUILTIN_MODULES>',
    '^react.*$', // React 관련 import
    '<THIRD_PARTY_MODULES>', // 외부 모듈 import
    '^@app/(.*)$', // 내부 절대경로 import
    '^[.]', // 상대 경로 import
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
