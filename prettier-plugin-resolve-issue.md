# `prettier-plugin-tailwindcss` периодически не находится: `Cannot find package 'prettier-plugin-tailwindcss'`

## Симптом

В проекте, который подключает конфиг так:

```js
// prettier.config.js
import config from '@front-cmdt/format/prettier'
export default config
```

prettier время от времени падает:

```
[error] Cannot find package 'prettier-plugin-tailwindcss' imported from D:\project\noop.js
```

Ошибка то появляется, то пропадает после `yarn install` / `yarn add` или после изменений в `yarn.lock`.

## Причина

1. **Плагины указаны строками.** В `dist/prettier.config.js`:

   ```js
   plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-astro", "prettier-plugin-tailwindcss"]
   ```

   Prettier ищет плагины, заданные строками, от текущей рабочей папки (cwd) проекта, а не от файла конфига. В ошибке это видно по `imported from <cwd>/noop.js`. Значит, плагин должен лежать в корневом `node_modules` проекта.

2. **В корне его может не оказаться.** Плагины ставятся как `dependencies` пакета, а не проекта. Сможет ли менеджер пакетов поднять их в корень (hoisting), зависит от остального дерева зависимостей. Решающую роль играет жёстко указанный `prettier: 3.8.4` в `dependencies`: если в проекте другая версия prettier (у нас 3.9.6), yarn кладёт копию 3.8.4 в `node_modules/@front-cmdt/format/node_modules/`. Плагин tailwind (у него peer-зависимость на prettier) часто оказывается рядом с этой копией, а не в корне:

   ```
   node_modules/@front-cmdt/format/node_modules/
     prettier/                      ← 3.8.4
     prettier-plugin-tailwindcss/   ← корневой prettier его не видит
   ```

   С `prettier-plugin-astro` может случиться то же самое. `@trivago/prettier-plugin-sort-imports` у нас работает только потому, что прописан в `devDependencies` проекта напрямую.

3. **Побочный эффект:** в проекте две версии prettier. CLI запускается из корня (3.9.6), а вложенные плагины могут подтягивать 3.8.4.

## Варианты решения

### 1. Передавать плагины объектами, а не строками (рекомендую)

```js
import * as sortImports from '@trivago/prettier-plugin-sort-imports'
import * as astro from 'prettier-plugin-astro'
import * as tailwind from 'prettier-plugin-tailwindcss'

export default {
  // ...
  plugins: [sortImports, astro, tailwind], // tailwind должен быть последним
}
```

Импорт выполняется из папки самого пакета, поэтому плагин найдётся при любом расположении `node_modules`. Prettier 3 поддерживает объекты плагинов.

### 2. Превращать имена в абсолютные пути

```js
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

export default {
  // ...
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
}
```

Работает так же надёжно, но надо следить, чтобы у каждого плагина резолвился нужный вход: ESM или CJS (`.js` / `.cjs` сборки).

### 3. Перенести `prettier` в `peerDependencies`

```json
"peerDependencies": {
  "prettier": "^3.0.0",
  "sass": "^1.5.0"
}
```

Это нужно сделать в любом случае вместе с вариантом 1 или 2: тогда в проекте будет одна копия prettier и не будет конфликта версий. Минус: проекту придётся ставить prettier самому. Обычно он и так стоит, потому что CLI запускается из проекта.

### 4. Плагины в `peerDependencies` (не рекомендую)

Перенести все плагины в `peerDependencies` и требовать, чтобы проект ставил их сам. Это надёжно, но неудобно: теряется смысл пакета как «одной зависимости», и в каждом проекте приходится держать список версий плагинов.

## Временное решение на стороне проекта

```
yarn add -D prettier-plugin-tailwindcss@0.7.2 prettier-plugin-astro@0.14.1
```

## Окружение

- `@front-cmdt/format` 1.5.0
- prettier в проекте 3.9.6, в пакете 3.8.4
- yarn 1, Windows
