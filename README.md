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
- SQLite database
- Features:
  - RESTful API
  - Items CRUD operations
  - Error handling
  - Type safety

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

Create a `.env` file in the root directory for the API:
```env
# API Configuration
NODE_ENV=production
PORT=3000
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

## Building

Build all applications:
```bash
pnpm build
```

## Docker Support

The project includes Docker support for easy deployment.

1. Build and run with Docker Compose:
```bash
docker-compose up --build
```

This will start:
- Frontend at http://localhost
- Backend API at http://localhost:3000

## Available Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all applications
- `pnpm lint` - Run linting
- `pnpm format` - Format code
- `pnpm clean` - Clean build files

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
- 🛠️ Type safety with TypeScript
- 🐳 Docker support for easy deployment
- 📦 Monorepo structure with Turborepo

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
