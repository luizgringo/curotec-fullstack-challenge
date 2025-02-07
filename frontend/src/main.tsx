import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { ThemeProvider } from './contexts/ThemeContext';
import { router } from './routes';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Elemento root não encontrado');
}

const queryClient = new QueryClient();

createRoot(rootElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ThemeProvider>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </ChakraProvider>
        </QueryClientProvider>
    </StrictMode>
);
