# Koa UI — React Design System

[![CI](https://github.com/lrasata/koa-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/lrasata/koa-ui/actions/workflows/ci.yml)

<div style="text-align: center;">
<img src="https://raw.githubusercontent.com/lrasata/koa-ui/refs/heads/main/docs/koa.png" alt="koa ui logo" width="200" />
</div>

A simple, reusable design system built with **React** and **Emotion** and powered by [Storybook](https://storybook.js.org/) for development and documentation.
It includes core components such as buttons, inputs, cards, modals, layout helpers, and more — all built with consistency and flexibility in mind.

## Table of content

- [Usage](#usage)
- [Purpose](#purpose)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Installation](#installation)
- [Running storybook](#running-storybook)
- [Components](#components)

---

## Usage

```ts
// customTheme.ts
import { createTheme } from "koa-ui-design-system";

const customTheme = createTheme({
    colors: {
        primary: {
            main: "#4AA397",
            light: "#D2EAE4",
            dark: "#2E6E61",
            contrastText: "#ffffff",
        },
...
    },
    fonts,
    typography,
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
- `breakpoints`
- `zIndex`

---

## Purpose

_The Story Behind Koa UI_

After working on a few personal projects, I started to notice a pattern: I was building the same UI components over and over again.
**buttons, inputs, cards, modals**, they always looked a bit different, but the structure was basically the same. So why not
just build my own library once, and reuse it everywhere?

That’s how Koa UI started, a collection of reusable React components styled with Emotion. It’s simple, clean, and made
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
- **React testing library** - unit testing
- **Storybook** - frontend workshop environment tool
- **Chromatic** - powerful testing platform that scans every possible UI state across browsers to catch bugs in appearance, functionality, and accessibility

---

## License

MIT License © 2025 lrasata
