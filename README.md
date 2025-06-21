# Nuxt 3 Mini Blog

💡 Простий блог-додаток, побудований на **Nuxt 3**, з використанням **GraphQL API FakeAPI**, **TypeScript**, **Tailwind CSS** та повним CRUD функціоналом.

## 🔗 API

Цей проєкт використовує **публічне GraphQL API** від [GraphQL Zero](https://graphqlzero.almansi.me/):


## 🔧 Функціонал

- 📄 Перегляд усіх постів з пагінацією та пошуком
- ➕ Створення нового поста
- ✏️ Редагування постів
- 🗑️ Видалення постів з підтвердженням
- 👁 Перегляд детальної інформації про пост та коментарі
- ⚙️ GraphQL інтеграція через Apollo
- 🌗 Підтримка темної теми
- 🔔 Сповіщення про дії користувача

## 🧰 Технології

- [Nuxt 3](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://apollo.vuejs.org/)

## 🗂️ Структура

- `/pages` – сторінки (список постів, створення, перегляд одного поста)
- `/components` – UI компоненти (спінер, кнопки, форми, підтвердження)
- `/graphQL` – GraphQL-запити та мутації
- `/types` – повна типізація GraphQL-даних
- `/composables` – кастомні хелпери (пости, мутації)

## 🚀 Запуск проєкту

```bash
# 1. Клонувати репозиторій
git clone https://github.com/your-username/nuxt3-mini-blog.git

# 2. Встановити залежності
cd nuxt3-mini-blog
npm install

# 3. Запустити у режимі розробки
npm run dev


# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
