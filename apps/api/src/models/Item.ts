import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Item {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateItemDTO {
    name: string;
    description?: string;
}

export interface FindAllParams {
    page?: number;
    limit?: number;
    search?: string;
}

class ItemModel {
    static async create(data: CreateItemDTO) {
        return prisma.item.create({
            data
        });
    }

    static async findAll({ page = 1, limit = 10, search = '' }: FindAllParams = {}) {
        const skip = (page - 1) * limit;
        
        const where = search ? {
            OR: [
                { name: { contains: search } },
                { description: { contains: search } }
            ]
        } : {};

        const [items, total] = await Promise.all([
            prisma.item.findMany({
                where,
                orderBy: [
                    { createdAt: 'desc' },
                    { id: 'desc' }
                ],
                skip,
                take: limit,
                select: {
                    id: true,
                    name: true,
                    description: true,
                    createdAt: true,
                    updatedAt: true
                }
            }),
            prisma.item.count({ where })
        ]);

        const totalPages = Math.ceil(total / limit);

        return {
            items,
            pagination: {
                total,
                totalPages,
                currentPage: page,
                limit
            }
        };
    }

    static async findById(id: number) {
        return prisma.item.findUnique({
            where: { id }
        });
    }

    static async update(id: number, data: Partial<CreateItemDTO>) {
        return prisma.item.update({
            where: { id },
            data
        });
    }

    static async delete(id: number) {
        return prisma.item.delete({
            where: { id }
        });
    }
}

export default ItemModel;
