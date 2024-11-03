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
    '^react.*$', // React 관련 import를 최상단에 배치
    '<THIRD_PARTY_MODULES>', // 외부 모듈 import
    '^@components/(.*)$', // 내부 컴포넌트 import
    '^[./]', // 상대 경로 import
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
