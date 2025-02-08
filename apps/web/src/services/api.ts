import { API_BASE_URL } from '../constants/config';
import type { ApiResponse } from '../types';

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    const data = await response.json();
    return {
        data,
        status: response.status,
        message: response.statusText,
    };
} 