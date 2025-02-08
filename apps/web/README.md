# Curotec Frontend

A modern and responsive web interface built with React and TypeScript for inventory management.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 🛠 Tech Stack

### Core Technologies
- **React 19**: Modern JavaScript library for building user interfaces
- **TypeScript**: Static typing for enhanced development experience
- **Vite**: Next-generation frontend tooling for faster development

### UI Framework
- **Chakra UI**: Modern, accessible component library
- **Framer Motion**: Powerful animation library
- **React Icons**: Extensive icon collection

### State Management & Data Fetching
- **React Query**: 
  - Smart data caching
  - Real-time updates
  - Automatic background refetching
  - Loading & error states management
  - Server state synchronization

### Authentication
- **Auth0**: 
  - Social login with Google
  - JWT token management
  - Route protection
  - Session handling

## 📱 Features

### User Interface
- Responsive design for all devices
- Dark/Light theme support
- Loading states and animations
- Toast notifications for feedback
- Modern and clean UI

### Item Management
- List items with pagination
- Create new items with validation
- Edit items in real-time
- Delete items with confirmation
- Search and filter capabilities

### Authentication & Authorization
- Protected routes
- User profile management
- Session persistence
- Automatic token refresh

## 🔧 Configuration

### Environment Variables
Create a `.env` file with the following variables:
```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_API_URL=http://localhost:3000
```

### Available Scripts
```bash
# Development
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm preview     # Preview production build

# Code Quality
pnpm lint        # Run ESLint
pnpm format      # Format code with Prettier
```

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── contexts/        # React contexts
├── hooks/          # Custom React hooks
├── layouts/        # Page layouts
├── pages/          # Application pages
├── services/       # API services
├── theme/          # Chakra UI theme
├── types/          # TypeScript types
└── utils/          # Utility functions
```

## 🔗 API Integration

- RESTful API communication
- Axios interceptors for error handling
- Automatic auth headers
- TypeScript interfaces for API responses

## 🧪 Best Practices

- TypeScript for type safety
- ESLint + Prettier for code quality
- Modular component architecture
- Custom hooks for logic reuse
- Consistent error handling
- Loading states management
- Responsive design patterns

## 🐳 Docker Support

The application includes a Dockerfile for containerization:

```bash
# Build image
docker build -t curotec-frontend .

# Run container
docker run -p 80:80 curotec-frontend
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
- [Chakra UI Documentation](https://chakra-ui.com)
- [React Query Documentation](https://tanstack.com/query)
- [Auth0 Documentation](https://auth0.com/docs)
