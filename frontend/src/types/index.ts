export type AppTheme = 'light' | 'dark';

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
} 