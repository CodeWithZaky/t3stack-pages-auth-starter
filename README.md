# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## env file example

Since the ".env" file is gitignored, you can use the ".env.example" file to
build a new ".env" file when you clone the repo. Keep this file up-to-date
when you add new variables to `.env`.

This file will be committed to version control, so make sure not to have any
secrets in it. If you are cloning this repo, create a copy of this file named
".env" and populate it with your secrets.

When adding additional environment variables, the schema in "/src/env.js"
should be updated accordingly.

Prisma
https://www.prisma.io/docs/reference/database-reference/connection-urls#env

DATABASE_URL="postgresql://postgres:<password>@localhost:5432/<database_name>"

Next Auth
You can generate a new secret on the command line with:
openssl rand -base64 32
https://next-auth.js.org/configuration/options#secret
NEXTAUTH_SECRET=""

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=

# Next Auth Discord Provider

DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""

# Next Auth Google Provider

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
