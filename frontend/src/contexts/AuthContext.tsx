import { createContext, useContext, type ReactNode, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface User {
    name?: string;
    email?: string;
    picture?: string;
    sub?: string;
}

interface AuthContextData {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
    loginWithGoogle: () => void;
    loginWithCredentials: (options?: { email?: string }) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const {
        isAuthenticated,
        isLoading,
        user,
        loginWithRedirect,
        logout: auth0Logout,
    } = useAuth0();

    // Debug: Monitorar mudanças no estado de autenticação
    useEffect(() => {
        console.log('AuthContext - Auth State:', {
            isAuthenticated,
            isLoading,
            user: user ? {
                name: user.name,
                email: user.email,
                picture: user.picture,
                sub: user.sub
            } : null
        });
    }, [isAuthenticated, isLoading, user]);

    const loginWithGoogle = () => {
        loginWithRedirect({
            authorizationParams: {
                connection: 'google-oauth2',
            },
            appState: {
                returnTo: window.location.pathname === '/login' ? '/' : window.location.pathname,
            },
        });
    };

    const loginWithCredentials = (options?: { email?: string }) => {
        loginWithRedirect({
            authorizationParams: {
                connection: 'Username-Password-Authentication',
                login_hint: options?.email,
            },
            appState: {
                returnTo: window.location.pathname === '/login' ? '/' : window.location.pathname,
            },
        });
    };

    const logout = () => {
        auth0Logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                user: user as User | null,
                loginWithGoogle,
                loginWithCredentials,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context;
} 