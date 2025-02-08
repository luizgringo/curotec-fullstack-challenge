export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const APP_CONFIG = {
    appName: 'Curotec Challenge',
    version: '1.0.0',
    defaultTheme: 'light' as const,
    apiTimeout: 5000,
}; 