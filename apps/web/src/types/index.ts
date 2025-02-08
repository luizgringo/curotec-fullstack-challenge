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

export interface Item {
    id: number;
    name: string;
    description: string;
    created_at: string;
}

export interface CreateItemDTO {
    name: string;
    description: string;
} 