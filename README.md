## Svelte starter

-  [Svelte starter](#svelte-starter)
-  [Get started](#get-started)
   -  [npm scripts](#npm-scripts)
   -  [Useful Docs](#useful-docs)
-  [Comments](#comments)

An opinionated SvelteKit app starter by [OllieJT](https://github.com/OllieJT). Some core opinions of this starter are:

-  Typescript with Zod
-  Tailwind CSS
-  Linting
   -  ESLint
   -  Prettier
   -  lint-stage - formats staged files before commit using Husky
-  Prisma ORM
-  Auth.js

## Get started

Clone this project and remove the git history with [degit](https://github.com/Rich-Harris/degit)

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

### Useful Docs

| Package                                                                | Description                                      |
| ---------------------------------------------------------------------- | ------------------------------------------------ |
| [Svelte](https://svelte.dev/docs)                                      | Frontend framework                               |
| [Svelte Kit](https://kit.svelte.dev/docs)                              | Fullstack meta-framework                         |
| [sveltekit-superforms](https://superforms.vercel.app/api)              | Easy form data handling with type-safety         |
| [zod](https://zod.dev/?id=primitives)                                  | Runtime type checking                            |
| [Prisma](https://www.prisma.io/docs/concepts/components/prisma-schema) | Database ORM with zod generator                  |
| [Lucia](https://lucia-auth.com/sveltekit/load-functions?sveltekit)     | Oauth abstraction configured for use with Prisma |
| [date-fns](https://date-fns.org/v2.29.3/docs/formatRelative)           | Easy date formatting and utilities               |

## Comments

```js
// KEY: Comment details
```

| Key   | Description                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| BUG   | Highlights a known bug in the code that needs fixing.                                                                          |
| HACK  | Indicates that a certain piece of code is a workaround or a temporary solution that bypasses the issue rather than solving it. |
| FIXME | A section of code that doesn't work as it should and needs to be fixed.                                                        |
| TODO  | A reminder that there is some piece of code or functionality that still needs to be implemented or finished.                   |
| FEAT  | A section where a new feature needs to be implemented.                                                                         |
| [ ]   | An incomplete checklist item. Typically used for subtasks within a larger project.                                             |
| [x]   | An complete checklist item.                                                                                                    |
