# NextJS App Router with Storyblok Starter

This is a [NextJS](https://nextjs.org/) project setup which uses [Storyblok CMS](https://www.storyblok.com/).

## What's this setup about?

At the time of writing this (26.05.2024) Storyblok does not have an all encompassing tutorial on how to set up a NextJS app using App Router while also having working previews with RSCs and Visual Editor. The setup solves this problem while also using different technologies that aim to provide great DX and UX.

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Zod](https://zod.dev/)
- [Package manager - pnpm](https://pnpm.io/)

## How do I get started?

1. Create a .env file as shown in the .env.example
2. Make sure .env variables adhere to env.js file as it is used to type check .env variables and catch errors that are easier to debug.
3. Using pnpm package manager, install modules using "pnpm install" and then run project using "pnpm dev"
4. To connect with Storyblok's Visual Editor successfully, run "pnpm proxy" while having dev server running. Please refer to [this guide](https://www.storyblok.com/faq/setup-dev-server-https-proxy) if you need assistance.
