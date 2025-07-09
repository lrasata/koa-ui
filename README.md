# koa-ui — React Design System 🚧

> **Status**: 🚧 Under Construction

A modern, themeable React component library built with [Emotion](https://emotion.sh/docs/introduction) and powered by [Storybook](https://storybook.js.org/) for development and documentation.

[//]: # "the audience would be tech people, I want something which looks professional, 
clean, friendly, but also accesibility and clarity. with a bit of character but not too much"

---

## Features

> **Status**: 🚧 Under Construction

- ✨ **Themeable** with Emotion
- 🧱 **Reusable UI components** (Button, Input, etc.)
- 🎨 **Custom design tokens** (colors, spacing, fonts, etc.)
- 📖 **Live preview & documentation** via Storybook
- ⚙️ **Typed with TypeScript** for safety and IDE support
- 🧪 Ready for unit tests and accessibility auditing

---

## Installation

```bash
npm install koa-ui
```

> If you're working locally:

```bash
git clone https://github.com/lrasata/koa-ui.git
cd koa-ui
npm install
```

---

## Running Storybook

Start the development server:

```bash
npm run storybook
```

This opens Storybook in your browser to explore and test components interactively.

---

## Theming

All components use Emotion's ThemeProvider for styling.  
Customize the theme in:

```ts
// src/theme/theme.ts
```

```ts
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

You can override:

- `colors`
- `fontSizes`
- `spacing`
- `radii`
- `shadows`
  ...and more.

---

## Components

> **Status**: 🚧 Under Construction

[//]: #
[//]: # "| Component | Description         |"
[//]: # "|----------|---------------------|"
[//]: # "| `Button` | Primary actions     |"
[//]: # "| `Input`  | Text input fields   |"
[//]: # "| `Card`   | Container UI blocks |"
[//]: # "| ...      | More coming soon    |"

---

## Tooling

| Tool              | Purpose                     |
| ----------------- | --------------------------- |
| Emotion           | CSS-in-JS styling           |
| Storybook         | UI docs & testing           |
| TypeScript        | Type safety                 |
| Jest (opt.)       | Unit testing                |
| ESLint + Prettier | Code formatting and linting |

---

## License

MIT License © 2025 lrasata
