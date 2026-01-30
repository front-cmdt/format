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
import config from "@front-cmdt/format/prettier"

export default config
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
import config from "@front-cmdt/format/prettier"

export default config
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
