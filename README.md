# t3stack-pages-auth-starter

A starter template for building web applications with authentication using the T3 stack.

## Getting Started

### Environment Variables
To run this project, you will need to add the following environment variables to your .env file

```bash
DATABASE_URL="postgresql://postgres:<DB-PASSWORD>@localhost:<DB-PORT>/<DB-NAME>"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="EXAMPLEa8s9c4eKgiEyTGL419dIGPE8ETDIybXsKwOQr7xoS9M03z"

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

### Clone the repository and install dependencies:

```bash
git clone https://github.com/CodeWithZaky/t3stack-pages-auth-starter.git
```
```bash
cd t3stack-pages-auth-starter
```
```bash
pnpm install
```

### Available Scripts

- `dev`: Start the development server.
- `build`: Build the application for production.
- `start`: Start the production server.
- `lint`: Run ESLint.
- `db:generate`: Generate Prisma migrations.
- `db:migrate`: Deploy Prisma migrations.
- `db:push`: Push Prisma schema state to the database.
- `db:studio`: Open Prisma Studio for database management.

### Technologies

- **Frontend**: Next.js, Tailwind CSS, Radix UI
- **Backend**: Prisma, tRPC, NextAuth.js
- **Utilities**: TypeScript, ESLint, Prettier

### Package Manager

- **pnpm**: ^9.6.0
