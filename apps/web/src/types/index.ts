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
    createdAt: string;
    updatedAt: string;
}

export interface CreateItemDTO {
    name: string;
    description: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    pagination: {
        total: number;
        totalPages: number;
        currentPage: number;
        limit: number;
    };
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    search?: string;
} 