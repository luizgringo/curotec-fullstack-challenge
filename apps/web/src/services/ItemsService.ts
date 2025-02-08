import { API_BASE_URL } from '../constants/config';
import type { Item, CreateItemDTO } from '../types';

export class ItemsService {
  static async create(data: CreateItemDTO) {
    const response = await fetch(`${API_BASE_URL}/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error creating item');
    }

    return response.json();
  }

  static async findAll(): Promise<Item[]> {
    const response = await fetch(`${API_BASE_URL}/api/items`);

    if (!response.ok) {
      throw new Error('Error fetching items');
    }

    return response.json();
  }

  static async findById(id: number): Promise<Item> {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}`);

    if (!response.ok) {
      throw new Error('Error fetching item');
    }

    return response.json();
  }

  static async update(id: number, data: Partial<CreateItemDTO>): Promise<Item> {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error updating item');
    }

    return response.json();
  }

  static async delete(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/items/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting item');
    }
  }
}
