# Koa UI — React Design System 🚧

[![CI](https://github.com/lrasata/koa-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/lrasata/koa-ui/actions/workflows/ci.yml)

> **Status**: 🚧 Under Construction

<div style="text-align: center;">
<img src="https://raw.githubusercontent.com/lrasata/koa-ui/refs/heads/main/docs/koa.png" alt="koa ui logo" width="200" />
</div>

A simple, reusable design system built with **React** and **Emotion** and powered by [Storybook](https://storybook.js.org/) for development and documentation.
It includes core components such as buttons, inputs, cards, modals, layout helpers, and more — all built with consistency and flexibility in mind.

## Table of content

- [Purpose](#purpose)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Installation](#installation)
- [Running storybook](#running-storybook)
- [Theming](#theming)
- [Components](#components)

## Purpose

_The Story Behind Trip Planner_

After working on a few personal projects, I started to notice a pattern: I was building the same UI components over and over again.
**Buttons, inputs, cards, modals**, they always looked a bit different, but the structure was basically the same. So why not
just build my own library once, and reuse it everywhere?

That’s how Koa UI started, a collection of reusable React components styled with Emotion CSS. It’s simple, clean, and made
to fit the way I like to work. The goal is not to compete with big UI frameworks. Instead, it is to create a set of tools
that reflect how I build fast, modular, and highly themeable components.

It includes the essentials: buttons, inputs, layout grids, modals, tooltips, and more. All styled using Emotion’s powerful CSS-in-JS approach,
so everything is tightly scoped, theme-aware, and easily composable. Everything is themeable and built to be easy to maintain.

Now when I start a new project, I don’t waste time rebuilding the same UI blocks. For me, it is a game-changer. Plus,
it’s a fun side project that keeps growing as I build more things.

---

## Features

- **Themeable** with Emotion
- **Reusable UI components** (Button, Input, etc.)
- **Custom design tokens** (colors, spacing, fonts, etc.)
- **Live preview & documentation** via Storybook
- **Typed with TypeScript** for safety and IDE support
- Ready for unit tests and accessibility auditing

---

## Tech stack

- **React** – component-based structure
- **TypeScript** – type safety
- **Emotion** – scoped, theme-aware styling
- **Storybook**

---

## Installation

If you're working locally:

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

## Testing

Run unit tests:

```bash
npm run test
```

Run unit tests with coverage result:

```bash
npm run test:coverage
```

Run accessibility testing:

```bash
npm run test-storybook
```

---

## Theming

All components use Emotion's ThemeProvider for styling.

```ts
// customTheme.ts
import { createTheme } from "./createTheme";

const customTheme = createTheme({
    colors: {
        primary: {
            main: "#1d4ed8",
            light: "#2563eb",
            dark: "#1e40af",
            contrastText: "#fff",
        },
    },
    fonts: {
        fontFamily: "'Inter', sans-serif",
    },
});

// app.ts
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./theme/customTheme";

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

You can override:

- `colors`
- `fonts`
- `typography`
- `radii`
- `spacing`

---

## Components

> **Status**: 🚧 Under Construction

| Component    | Description                             |
| ------------ | --------------------------------------- |
| `Typography` | Improves readability, defines hierarchy |
| `Button`     | Call to action                          |
| ...          | More in progress                        |

---

## License

MIT License © 2025 lrasata
