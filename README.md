# olliejt/starter-svelte

A simple starter to get Svelte setup with:

- Typescript
- TailwindCSS
- Linting
  - ESLint
  - Prettier
  - Husky
  - lint-stages

> to maintain a stable project, the sveltekit version will be pinned to a specific version. You can leave it set, ot update it and handle any migrations needed.

## Get started

```bash
npx degit github:OllieJT/starter-svelte new-project
cd new-project
git init
```

> Keep an eye yout for `todo` comments in the code. These are things you should change to suit your project.

### npm scripts

| Syntax   | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `dev`    | starts dev server                                               |
| `build`  | build app for production                                        |
| `check`  | checks project for best practices                               |
| `format` | format files with Prettier                                      |
| `lint`   | checks for linting and formatting issues with Prettier & Eslint |
| `ts`     | checks for typescript errors                                    |

### Developing

##### Yarn

`yarn` to install, then start the dev server with `yarn dev`

##### NPM

`npm install` to install, then start the dev server with `npm run dev`

---

_Project bootstrapped with [`olliejt/starter-svelte`](https://github.com/OllieJT/starter-svelte)._
