# Partnero — Real Estate Sales Systems

Partnero is a premium B2B real estate growth operations platform designed for builders, developers, and individual property sellers. It provides end-to-end sales systems, lead management, and marketing operations to convert real estate enquiries into bookings.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) via [Supabase](https://supabase.com)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Email**: [Brevo API](https://www.brevo.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### 1. Prerequisites

- Node.js 18+
- A PostgreSQL database (e.g., Supabase)
- A Brevo account for email notifications

### 2. Environment Setup

Clone `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required variables:
- `DATABASE_URL`: Your PostgreSQL connection string.
- `BREVO_API_KEY`: Your Brevo SMTP/API key.
- `ADMIN_EMAIL`: The email address where lead notifications will be sent.

### 3. Installation & Database Setup

```bash
npm install
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment

This project is optimized for [Vercel](https://vercel.com).

1. Connect your GitHub repository to Vercel.
2. Add the environment variables from `.env` to the Vercel project settings.
3. The build command is `npm run build` and the output directory is `.next`.
