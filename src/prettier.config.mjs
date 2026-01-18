/** @type {import("prettier").Config} */

export default {
  trailingComma: "none",
  tabWidth: 2,
  useTabs: true,
  semi: false,
  singleQuote: true,
  jsSingleQuote: true,
  arrowParens: "avoid",
  printWidth: 120,

  importOrderSeparation: true,
  singleAttributePerLine: true,
  importOrderSortSpecifiers: true,
  importOrderInsensitive: true,
  importOrderParserPlugins: ["classProperties", "decorators-legacy", "typescript"],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^react$",
    // "^@/app/(.*)$",
    // "^@/pages/(.*)$",
    // "^@/widgets/(.*)$",
    // "^@/features/(.*)$",
    // "^@/entities/(.*)$",
    // "^@/shared/(.*)$",
    "^@/(.*)$",
    "^../(.*)$",
    "^./(.*)$",
  ],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
}
