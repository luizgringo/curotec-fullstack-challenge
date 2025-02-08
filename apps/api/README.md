# Curotec Backend API

A robust REST API built with Node.js, Express, TypeScript, and Prisma ORM for inventory management.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Generate Prisma Client
pnpm dlx prisma generate

# Run migrations
pnpm dlx prisma migrate dev

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🛠 Tech Stack

### Core Technologies
- **Node.js**: JavaScript runtime environment
- **Express**: Web application framework
- **TypeScript**: Static typing for enhanced development
- **Prisma**: Modern database toolkit and ORM
- **SQLite**: Lightweight, serverless database

### Development Tools
- **ts-node**: TypeScript execution environment
- **nodemon**: Development server with hot reload
- **express-async-errors**: Async error handling
- **cors**: Cross-Origin Resource Sharing
- **Prisma Studio**: Database management UI

## 📱 Features

### Database & ORM
- Prisma Schema for type-safe models
- Automatic migrations
- Type-safe database queries
- Efficient connection pooling
- Database seeding support
- Prisma Studio for data management

### RESTful API
- Standard HTTP methods (GET, POST, PUT, DELETE)
- JSON response format
- Status codes following HTTP standards
- Query parameters for filtering and pagination

### Error Handling
- Global error middleware
- Custom error classes
- Detailed error messages
- Stack traces in development
- Prisma error handling

### Security
- CORS configuration
- Request validation
- Type-safe operations
- Database connection security

## 🔧 Configuration

### Environment Variables
Create a `.env` file with the following variables:
```env
DATABASE_URL="file:../database.sqlite"
NODE_ENV=development
PORT=3000
```

### Available Scripts
```bash
# Development
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm start       # Start production server

# Database
pnpm dlx prisma generate    # Generate Prisma Client
pnpm dlx prisma migrate dev # Run migrations
pnpm dlx prisma studio     # Open Prisma Studio

# Code Quality
pnpm lint        # Run ESLint
pnpm format      # Format code with Prettier
```

## 📁 Project Structure

```
src/
├── controllers/    # Request handlers
├── models/         # Prisma model wrappers
├── routes/         # API routes
├── middlewares/    # Express middlewares
├── types/          # TypeScript types
└── utils/          # Utility functions

prisma/
├── migrations/     # Database migrations
└── schema.prisma   # Prisma schema
```

## 🔗 API Endpoints

### Items
```
GET    /api/items      # List all items
GET    /api/items/:id  # Get single item
POST   /api/items      # Create new item
PUT    /api/items/:id  # Update item
DELETE /api/items/:id  # Delete item
```

### Response Format
```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

## 🧪 Best Practices

- Prisma schema-driven development
- Type-safe database operations
- RESTful API design
- Modular architecture
- Error handling middleware
- Database migrations
- Logging and monitoring
- Code documentation

## 🐳 Docker Support

The application includes a Dockerfile for containerization:

```bash
# Build image
docker build -t curotec-backend .

# Run container
docker run -p 3000:3000 curotec-backend
```

## 📚 Learn More

- [Node.js Documentation](https://nodejs.org)
- [Express Documentation](https://expressjs.com)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Prisma Documentation](https://www.prisma.io/docs)
- [SQLite Documentation](https://www.sqlite.org/docs.html) 