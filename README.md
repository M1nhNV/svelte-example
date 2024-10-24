# svelte-example

An example with Svelte, SvelteKit, Typescript, Vite, Tailwind, MeltUI, and Playwright.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

## Atomic design

quy tắc đặt tên file: part1_part2_part3

part1
gồm tiền tố:

- a => atom:
- m => molecules:
- o => organisms:
- t => templates:

part2: tính năng hay gì đó tương tự như là: dropdown.

part3: phần mở rộng

ví dụ: a-input, m-input-group, o-todo-col, t-create-todo-list.

Các pages => sẽ là tập hợp 1 hoặc là nhiều mẫu (templates)

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
