<img src="./assets/icon.png" align="right" width="120" height="120" />

# startkit-expo

> A sane starting point for [Expo](https://expo.dev) projects.

## Features

- The latest [Expo 48](https://expo.dev)
- [React Navigation 6](https://reactnavigation.org/) with typescript bindings.
- [Typescript](https://www.typescriptlang.org/) for a rock-solid codebase
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for readable, safe code
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS via [Nativewind](https://www.nativewind.dev/)
- [Jest](https://jestjs.io/) testing, optimized for Next.js
- Typeface preloading
- Built-in Dark Mode support

## Starting a new project with StartKit

1. Clone this repo to your desired path:

   ```sh
   git clone git@github.com:startkit-dev/startkit-expo.git my-new-project
   ```

2. Rename the project in `app.config.js` and `package.json`

3. Update your git remote to point to StartKit as `upstream`

   ```sh
   git remote rename origin upstream
   ```

   In the future, you'll be able to pull in the latest StartKit changes without
   missing a beat by running:

   ```sh
   git fetch upstream
   git pull upstream/main
   ```

## Installation

```sh
pnpm run setup
```

## Running the app

```sh
pnpm dev
```

## Linting / Checking the codebase

To run a full check of the codebase (type-check, lint, prettier check, test), run:

```sh
pnpm check
```

### Linting

```sh
pnpm lint
```

### Type Checking

```sh
pnpm type-check
```

### Formatting with Prettier

```sh
pnpm format
```

to check for format errors, run:

```sh
pnpm format:check
```

### Testing via Jest

```sh
pnpm test
```
