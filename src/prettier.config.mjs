/** @type {import("prettier").Config} */

export default {
  trailingComma: "none",
  tabWidth: 2,
  useTabs: true,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: "avoid",
  printWidth: 120,

  importOrderSeparation: true,
  singleAttributePerLine: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["classProperties", "decorators-legacy", "typescript", "jsx"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^react$", "^@/(.*)$", "^../(.*)$", "^./(.*)$"],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
}
