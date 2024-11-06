# NextJS App Router with Storyblok Starter

This is a [NextJS](https://nextjs.org/) project setup which uses [Storyblok CMS](https://www.storyblok.com/).

## What's this setup about?

At the time of writing this (06.11.2024), Storyblok does not have an all encompassing tutorial on how to set up a NextJS app using TypeScript and App Router, while also having working previews with React Server Components and their Visual Editor. The setup solves this problem while also using different technologies that aim to provide great DX and UX.

This project has been initialized with `pnpm create t3-app@latest`. [T3 stack](https://create.t3.gg/) is the best way to start a full-stack, type-safe Next.js app. If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Zod](https://zod.dev/)
- [Package manager - pnpm](https://pnpm.io/)

## How do I get started?

1. Sign up for Storyblok and create a new space. It comes in with default components that this repo has the UI for.
2. Create an `.env` file as shown in the `.env.example`. You can find the Storyblok token at your space's Settings > Access Tokens. `DRAFT_SECRET_TOKEN` is a string that you choose so you can access the draft version of your content.
3. Make sure all environment variables adhere to `env.js` file as it is used to type-check them and catch errors at build time.
4. Using pnpm package manager, install modules using `pnpm install` and then run project using `pnpm dev`. Install pnpm [here](https://pnpm.io/installation).
5. To connect with Storyblok's Visual Editor successfully, run `pnpm proxy` while having dev server running. Please refer to [this guide](https://www.storyblok.com/faq/setup-dev-server-https-proxy) if you need assistance.
6. In order to use Storyblok's draft mode, go to your space's Settings > Visual Editor and set for your preview URL search params to `https://YOUR_URL:3010/api/draft?secret=YOUR_SECRET_FROM_ENV&slug=`
