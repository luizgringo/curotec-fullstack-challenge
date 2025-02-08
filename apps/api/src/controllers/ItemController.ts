import type { Request, Response } from 'express';
import ItemModel, { type CreateItemDTO } from '../models/Item';

class ItemController {
    static async create(req: Request, res: Response) {
        const { name, description } = req.body as CreateItemDTO;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const item = await ItemModel.create({ name, description });
        return res.status(201).json(item);
    }

    static async index(req: Request, res: Response) {
        const items = await ItemModel.findAll();
        return res.json(items);
    }

    static async show(req: Request, res: Response) {
        const { id } = req.params;
        const item = await ItemModel.findById(Number(id));

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        return res.json(item);
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description } = req.body as Partial<CreateItemDTO>;

        if (!name && !description) {
            return res.status(400).json({ error: 'No data provided for update' });
        }

        const item = await ItemModel.update(Number(id), { name, description });

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        return res.json(item);
    }

    static async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await ItemModel.delete(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: 'Item not found' });
        }
    }
}

export default ItemController;
