import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Center, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    // Debug: Monitorar estados de autenticação
    useEffect(() => {
        console.log('PrivateRoute - Auth State:', {
            isAuthenticated,
            isLoading,
            currentPath: location.pathname
        });
    }, [isAuthenticated, isLoading, location]);

    // Mostra loading enquanto verifica autenticação
    if (isLoading) {
        return (
            <Center minH="100vh">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="brand.500"
                    size="xl"
                />
            </Center>
        );
    }

    // Se não estiver autenticado, redireciona para login
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Se estiver autenticado, renderiza o conteúdo protegido
    return <>{children}</>;
} 