# YouthNotion Landing Site

Welcome to the YouthNotion landing site repository! This project is a modern, responsive web application built with Next.js, TypeScript, Tailwind CSS, Prisma, and Stripe integration. Below you'll find setup instructions, project structure, and contribution guidelines.

## Features
- **Next.js 14**: App Router, file-based routing, and server-side rendering
- **TypeScript**: Type-safe codebase
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Prisma**: Type-safe database ORM
- **Stripe**: Payment integration for pricing and checkout
- **MDX Blog**: Blog posts written in Markdown/MDX
- **Authentication**: Modular auth system (email, social, magic link, etc.)
- **SEO Optimized**: Meta tags, sitemap, and best practices
- **Responsive Design**: Mobile-first and accessible

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/youthnotion/landing-site.git
cd landing-site
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
Copy the example environment file and fill in required values:
```bash
cp .env.example .env.local
```
Edit `.env.local` and provide your database URL, Stripe keys, and any other required secrets.

### 4. Set Up the Database (if using Prisma)
```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### 6. Build for Production
```bash
npm run build
npm start
```

## Project Structure
```
landing-site/
├── public/                # Static assets (images, favicon, etc.)
├── src/
│   ├── app/               # Next.js app directory (routing, pages, layouts)
│   │   └── (site)/        # Main site routes (about, blogs, contact, etc.)
│   ├── components/        # Reusable React components
│   ├── stripe/            # Stripe integration and pricing data
│   ├── styles/            # Global and utility CSS
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions (auth, markdown, etc.)
├── markdown/              # Blog posts in MDX/Markdown
├── prisma/                # Prisma schema and migrations
├── package.json           # Project metadata and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request

## Troubleshooting
- **Install errors**: Ensure Node.js and npm/yarn are up to date
- **Prisma errors**: Check your database connection and run migrations
- **Styling issues**: Ensure Tailwind CSS is properly configured
- **Auth/Stripe issues**: Verify your environment variables

## License
See [LICENSE](./LICENSE) for details.

---
Feel free to open issues or discussions for questions and suggestions!
