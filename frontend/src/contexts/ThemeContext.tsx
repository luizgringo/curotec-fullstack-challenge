import { createContext, useContext, type ReactNode } from 'react';
import { useColorMode } from '@chakra-ui/react';

interface ThemeContextData {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <ThemeContext.Provider 
            value={{ 
                isDarkMode: colorMode === 'dark', 
                toggleTheme: toggleColorMode 
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextData {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }

    return context;
} 