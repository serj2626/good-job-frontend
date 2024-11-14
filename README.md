## Как развернуть проект

1. Используйте node `20.12.1`
2. Создайте .env в корне проекта, скопировав .env.example
3. Выполните чистую установку `npm ci`
4. Используйте языковую службу Vue Language Server (Volar)
5. Запустите dev server `npm run dev`

# На проекте используется архитектурная методология [Feature-Sliced Design (FSD)](https://feature-sliced.design/)

## [FSD Telegram](https://t.me/feature_sliced)

## Схема слоев

- [`app`](./app) — настройки, стили и провайдеры для всего приложения.
- [`pages`](./src/pages) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
- [`widgets`](./src/widgets) — композиционный слой для соединения сущностей и фич в самостоятельные блоки (например, IssuesList, UserProfile).
- [`features`](./src/features) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя. (например, SendComment, AddToCart, UsersSearch)
- [`entities`](./src/entities) — бизнес-сущности. (например, User, Product, Order)
- [`shared`](./src/shared) — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса. (например, UIKit, libs, API)

### App слой

Это единственный **FSD** слой, который будет лежать не в директории _/src_,
т.к. в **Nuxt 3** точка входа в приложение зарезервирована и должна находиться в корне проекта с названием **app**

### Настройка роутинга _/pages_

Маршрутизация в **Nuxt 3** основывается на файловой системе в папке _/pages_. Именно поэтому для совместимости **Nuxt 3** и **FSD**,
слой **fsd-pages** помещен в директорию _/src/pages_, чтобы не было конфликтов имен.
В **nuxt-pages** необходимо импортировать **fsd-pages**.
**Делать импорты из других слоев запрещено.**

### Layouts

Для лайоутов в **Nuxt 3** зарезервирована папка _/layouts_. В **FSD** лайоуты находятся в неопределенности - к какому слою они относятся **widgets**, **shared** или **app**?
Т.к. **Nuxt 3** имеет свое однозначное решение на данный вопрос, то лайоуты в данном проекте будут лежать в этой директории.
В лайоуты можно импортировать начиная от слоя **widgets**

# [NuxtUI](https://ui.nuxt.com/)

На проекте используется библиотека для базовых компонентов NuxtUI

# [Tailwindcss](https://tailwindcss.com/)

На проекте используется библиотека для стилей Tailwindcss

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
