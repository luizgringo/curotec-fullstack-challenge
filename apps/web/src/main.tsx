import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { theme } from './theme';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { router } from './routes';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found');
}

const queryClient = new QueryClient();

createRoot(rootElement).render(
    <StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin,
                scope: 'openid profile email'
            }}
            cacheLocation="localstorage"
        >
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={theme}>
                    <ThemeProvider>
                        <AuthProvider>
                            <RouterProvider router={router} />
                        </AuthProvider>
                    </ThemeProvider>
                </ChakraProvider>
            </QueryClientProvider>
        </Auth0Provider>
    </StrictMode>
);
