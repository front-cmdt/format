var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/prettier.config.mjs
var prettier_config_exports = {};
__export(prettier_config_exports, {
  default: () => prettier_config_default
});
module.exports = __toCommonJS(prettier_config_exports);
var prettier_config_default = {
  // Запятые в конце: "none" - без запятых, "es5" - где допустимо в ES5, "all" - везде
  trailingComma: "none",
  // Количество пробелов для отступа
  tabWidth: 2,
  // Использовать табы вместо пробелов
  useTabs: false,
  // Добавлять точку с запятой в конце выражений
  semi: false,
  // Использовать одинарные кавычки вместо двойных
  singleQuote: true,
  // Одинарные кавычки в JSX
  jsxSingleQuote: true,
  // Скобки вокруг единственного параметра стрелочной функции: "avoid" - убирать, "always" - всегда
  arrowParens: "avoid",
  // Максимальная длина строки перед переносом
  printWidth: 120,
  // Пробелы внутри фигурных скобок объектов: { foo: bar }
  bracketSpacing: true,
  // Кавычки вокруг ключей объекта: "as-needed" - только когда необходимо
  quoteProps: "as-needed",
  // Закрывающая скобка > на той же строке что и последний атрибут
  bracketSameLine: false,
  // Чувствительность к пробелам в HTML: "css" - как в CSS display свойстве
  htmlWhitespaceSensitivity: "css",
  // --- Настройки плагина сортировки импортов (@trivago/prettier-plugin-sort-imports) ---
  // Добавлять пустую строку между группами импортов
  importOrderSeparation: true,
  // Каждый атрибут JSX на отдельной строке
  singleAttributePerLine: true,
  // Сортировать спецификаторы внутри импорта: import { a, b, c } from 'module'
  importOrderSortSpecifiers: true,
  // Сортировка без учёта регистра
  importOrderCaseInsensitive: true,
  // Плагины парсера для корректной обработки синтаксиса
  importOrderParserPlugins: ["classProperties", "decorators-legacy", "typescript", "jsx"],
  // Порядок группировки импортов (регулярные выражения)
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    // Сторонние модули (node_modules)
    "^react$",
    // React отдельно
    // "^@/app/(.*)$",
    // "^@/pages/(.*)$",
    // "^@/widgets/(.*)$",
    // "^@/features/(.*)$",
    // "^@/entities/(.*)$",
    // "^@/shared/(.*)$",
    "^@/(.*)$",
    // Алиасы проекта (@/)
    "^../(.*)$",
    // Относительные импорты из родительских директорий
    "^./(.*)$"
    // Относительные импорты из текущей директории
  ],
  // Подключённые плагины Prettier
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        singleQuote: false,
        jsxSingleQuote: false
      }
    }
  ]
};
