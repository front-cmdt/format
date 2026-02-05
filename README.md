# @front-cmdt/format

## Установка

```bash
npm i -D @front-cmdt/format
# или
yarn add -D @front-cmdt/format
# или
pnpm add -D @front-cmdt/format
```

## Prettier

Общий **Prettier config** для проектов. Включает:

- Сортировку импортов через `@trivago/prettier-plugin-sort-imports`
- Автоматическую сортировку Tailwind CSS классов через `prettier-plugin-tailwindcss`

### Создайте: `prettier.config.mjs` в проекте

```js
import config from '@front-cmdt/format/prettier';

export default config;
```

### Пример скриптов

`package.json`:

```json
{
  "scripts": {
    "prettier:fix": "prettier . --write",
    "prettier:check": "prettier . --check"
  }
}
```

---

## Stylelint

Общий **stylelint** для проектов. Включает:

- Автоматическую очистку и сортировку свойств через `stylelint-config-clean-order`
- Поддержку SCSS через `stylelint-scss` и `postcss-scss`
- Базовые правила для предотвращения ошибок (пустые блоки, дубликаты селекторов и т.д.)

### Создайте: `stylelint.config.mjs` в проекте

```js
import config from '@front-cmdt/format/stylelint';

export default config;
```

### Пример скриптов

`package.json`:

```json
{
  "scripts": {
    "stylelint:fix": "stylelint '**/*.{css,scss}' --fix",
    "stylelint:check": "stylelint '**/*.{css,scss}'"
  }
}
```

## Пример общего скрипта для форматирования

`package.json`:

```json
{
  "scripts": {
    "format": "npm run stylelint:fix && npm run prettier:fix"
  }
}
```

---

# @front-cmdt/format (EN)

## Installation

```bash
npm i -D @front-cmdt/format
# or
yarn add -D @front-cmdt/format
# or
pnpm add -D @front-cmdt/format
```

---

## Prettier

Shared **Prettier config** for projects. Includes:

- Import sorting via `@trivago/prettier-plugin-sort-imports`
- Automatic Tailwind CSS class sorting via `prettier-plugin-tailwindcss`

### Create: `prettier.config.mjs` in your project

```js
import config from '@front-cmdt/format/prettier';

export default config;
```

### Script examples

`package.json`:

```json
{
  "scripts": {
    "prettier:fix": "prettier . --write",
    "prettier:check": "prettier . --check"
  }
}
```

---

## Stylelint

Shared **Stylelint config** for projects. Includes:

- Automatic property ordering and cleaning via `stylelint-config-clean-order`
- SCSS support via `stylelint-scss` and `postcss-scss`
- Core rules for error prevention (empty blocks, duplicate selectors, etc.)

### Create: `stylelint.config.mjs` in your project

```js
import config from '@front-cmdt/format/stylelint';

export default config;
```

### Script examples

`package.json`:

```json
{
  "scripts": {
    "stylelint:fix": "stylelint '**/*.{css,scss}' --fix",
    "stylelint:check": "stylelint '**/*.{css,scss}'"
  }
}
```

## Shared formatting script example

`package.json`:

```json
{
  "scripts": {
    "format": "npm run stylelint:fix && npm run prettier:fix"
  }
}
```
