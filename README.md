# @front-cmdt/format

Общий **Prettier config** для проектов. Включает:

- Сортировку импортов через `@trivago/prettier-plugin-sort-imports`
- Автоматическую сортировку Tailwind CSS классов через `prettier-plugin-tailwindcss`

## Требования

- `prettier` (peer dependency): `^3.0.0`

## Установка

```bash
npm i -D @front-cmdt/format prettier
# или
yarn add -D @front-cmdt/format prettier
# или
pnpm add -D @front-cmdt/format prettier
```

### Создайте: `prettier.config.js` в проекте

```js
import config from "@front-cmdt/format/prettier";

export default config;
```

## Пример скриптов

`package.json`:

```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

=====================================================

Общий **stylelint** для проектов. Включает:

- Настройки и конфигурацию стайллинта для CSS и SCSS (с поддержкой `stylelint-config-clean-order`, `stylelint-config-standard`, `stylelint-config-standard-scss` и плагина `stylelint-scss`)

## Требования

- `stylelint` (peer dependency): `^17.1.1`
- `stylelint-config-clean-order` (peer dependency): `^8.0.0`
- `stylelint-config-standard` (peer dependency): `^40.0.0`
- `sass` (peer dependency): `^1.97.3` --- (для SCSS)
- `stylelint-scss` (peer dependency): `^7.0.0` --- (для SCSS)
- `stylelint-config-standard-scss` (peer dependency): `^17.0.0` --- (для SCSS)

## Установка

```bash
npm i -D @front-cmdt/format stylelint
# или
yarn add -D @front-cmdt/format stylelint
# или
pnpm add -D @front-cmdt/format stylelint
```


### Создайте: `stylelint.config.cjs` в проекте

```js
const baseConfig = require("@front-cmdt/format/stylelint");
module.exports = {
  ...baseConfig,
  extends: [...(baseConfig.extends || ["stylelint-config-standard-scss"])],
  rules: {
    // свои переопределения
  },
};
```

## Пример скриптов

`package.json`:

```json
{
  "scripts": {
    "stylelint": "stylelint '**/*.{css,scss}'",
    "stylelint:fix": "stylelint '**/*.{css,scss}' --fix"
  }
}
```


---

# @front-cmdt/format (EN)

Shared **Prettier config** for projects. Includes:

- Import sorting via `@trivago/prettier-plugin-sort-imports`
- Automatic Tailwind CSS class sorting via `prettier-plugin-tailwindcss`

## Requirements

- `prettier` (peer dependency): `^3.0.0`

## Install

```bash
npm i -D @front-cmdt/format prettier
# or
yarn add -D @front-cmdt/format prettier
# or
pnpm add -D @front-cmdt/format prettier
```

### Create: `prettier.config.js` in your project

```js
import config from "@front-cmdt/format/prettier";

export default config;
```

## Script examples

`package.json`:

```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

=====================================================

Shared **Stylelint** for projects. Includes:

- Stylelint settings and configuration for CSS and SCSS (with support for `stylelint-config-clean-order`, `stylelint-config-standard`, `stylelint-config-standard-scss`, and the `stylelint-scss` plugin)

## Requirements

- `stylelint` (peer dependency): `^17.1.1`
- `stylelint-config-clean-order` (peer dependency): `^8.0.0`
- `stylelint-config-standard` (peer dependency): `^40.0.0`
- `sass` (peer dependency): `^1.97.3` --- (for SCSS)
- `stylelint-scss` (peer dependency): `^7.0.0` --- (for SCSS)
- `stylelint-config-standard-scss` (peer dependency): `^17.0.0` --- (for SCSS)

## Install

```bash
npm i -D @front-cmdt/format stylelint
# or
yarn add -D @front-cmdt/format stylelint
# or
pnpm add -D @front-cmdt/format stylelint
```


### Create: `stylelint.config.cjs` in your project

```js
const baseConfig = require("@front-cmdt/format/stylelint");
module.exports = {
  ...baseConfig,
  extends: [...(baseConfig.extends || ["stylelint-config-standard-scss"])],
  rules: {
    // свои переопределения
  },
};
```

## Script examples

`package.json`:

```json
{
  "scripts": {
    "stylelint": "stylelint '**/*.{css,scss}'",
    "stylelint:fix": "stylelint '**/*.{css,scss}' --fix"
  }
}
```
