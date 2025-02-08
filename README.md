# Curotec Challenge

A modern inventory management system built with React, TypeScript, and Auth0 authentication. This project uses a monorepo structure with Turborepo for better development experience and project organization.

## Project Structure

The project is organized as a monorepo with two main applications:

### Frontend (`apps/web`)
- Built with React + TypeScript + Vite
- Chakra UI for component library
- React Query for state management
- Auth0 for authentication
- Features:
  - User authentication
  - Item management (CRUD operations)
  - Responsive design
  - Dark/Light theme support

### Backend (`apps/api`)
- Node.js + Express + TypeScript
- Prisma ORM with SQLite
- Features:
  - RESTful API
  - Type-safe database operations
  - Automatic migrations
  - Data validation
  - Error handling

## Prerequisites

- Node.js >= 18
- PNPM >= 8.9.0
- Auth0 account and credentials

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd curotec-challenge
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:

Create a `.env` file in the `apps/web` directory using `.env.example` as a template:
```env
AUTH0_DOMAIN=dev-3mv60z6wbdj7u7tz.us.auth0.com
AUTH0_CLIENT_ID=OSWL8XRyrUD6eAuxzC0tAEkw8QUaLLlv
VITE_API_URL=http://localhost:3000
```

Create a `.env` file in the `apps/api` directory:
```env
DATABASE_URL="file:../database.sqlite"
NODE_ENV=development
PORT=3000
```

4. Set up the database:
```bash
cd apps/api
pnpm dlx prisma migrate dev
```

## Development

Run all applications in development mode:
```bash
pnpm dev
```

Or run specific applications:
```bash
# Frontend only
pnpm --filter web dev

# Backend only
pnpm --filter api dev
```

## Database Management

The project uses Prisma ORM for database operations. Here are some useful commands:

```bash
# Generate Prisma Client
pnpm dlx prisma generate

# Create a new migration
pnpm dlx prisma migrate dev

# Reset database
pnpm dlx prisma migrate reset

# Open Prisma Studio
pnpm dlx prisma studio
```

## API Endpoints

### Items

- `GET /api/items` - List all items
- `GET /api/items/:id` - Get a specific item
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an item
- `DELETE /api/items/:id` - Delete an item

## Technologies

- **Frontend**:
  - React 19
  - TypeScript
  - Vite
  - Chakra UI
  - React Query
  - React Router
  - Auth0

- **Backend**:
  - Node.js
  - Express
  - TypeScript
  - Prisma ORM
  - SQLite
  - Express Async Errors

- **Development Tools**:
  - Turborepo
  - PNPM Workspaces
  - Docker
  - Biome
  - ESLint

## Project Features

- 🔐 Secure authentication with Auth0
- 🎨 Beautiful UI with Chakra UI
- 🌓 Dark/Light theme support
- 📱 Responsive design
- 🚀 Fast development with Vite
- 🔄 Real-time updates with React Query
- 🛠️ Type safety with TypeScript and Prisma
- 🗄️ Efficient database operations with Prisma ORM
- 🐳 Docker support for easy deployment
- 📦 Monorepo structure with Turborepo

## License

This project is licensed under the MIT License.
