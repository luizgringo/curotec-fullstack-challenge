# Curotec Backend API

A robust REST API built with Node.js, Express, and TypeScript for inventory management.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

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
- **SQLite**: Lightweight, serverless database

### Development Tools
- **ts-node**: TypeScript execution environment
- **nodemon**: Development server with hot reload
- **express-async-errors**: Async error handling
- **cors**: Cross-Origin Resource Sharing

## 📱 Features

### RESTful API
- Standard HTTP methods (GET, POST, PUT, DELETE)
- JSON response format
- Status codes following HTTP standards
- Query parameters for filtering and pagination

### Database Operations
- SQLite integration
- Prepared statements for security
- Transaction support
- Automatic migrations
- Data validation

### Error Handling
- Global error middleware
- Custom error classes
- Detailed error messages
- Stack traces in development

### Security
- CORS configuration
- Request validation
- SQL injection protection
- Rate limiting support

## 🔧 Configuration

### Environment Variables
Create a `.env` file with the following variables:
```env
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
pnpm migrate     # Run database migrations
pnpm seed        # Seed database with initial data

# Code Quality
pnpm lint        # Run ESLint
pnpm format      # Format code with Prettier
```

## 📁 Project Structure

```
src/
├── controllers/    # Request handlers
├── models/         # Database models
├── routes/         # API routes
├── database/       # Database configuration
├── middlewares/    # Express middlewares
├── types/          # TypeScript types
└── utils/          # Utility functions
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

- RESTful API design
- TypeScript for type safety
- Modular architecture
- Error handling middleware
- Request validation
- Database transactions
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
- [SQLite Documentation](https://www.sqlite.org/docs.html) 