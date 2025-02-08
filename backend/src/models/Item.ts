import db from '../database';

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

class ItemModel {
    async create({ name, description }: CreateItemDTO): Promise<Item> {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function (err) {
                if (err) {
                    reject(err);
                    return;
                }

                db.get<Item>('SELECT * FROM items WHERE id = ?', [this.lastID], (err, row) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(row);
                });
            });
        });
    }

    async findAll(): Promise<Item[]> {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM items ORDER BY created_at DESC', (err, rows: Item[]) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(rows);
            });
        });
    }

    async findById(id: number): Promise<Item | null> {
        return new Promise((resolve, reject) => {
            db.get<Item>('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(row || null);
            });
        });
    }

    async update(id: number, { name, description }: Partial<CreateItemDTO>): Promise<Item | null> {
        return new Promise((resolve, reject) => {
            db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], (err) => {
                if (err) {
                    reject(err);
                    return;
                }

                this.findById(id).then(resolve).catch(reject);
            });
        });
    }

    async delete(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM items WHERE id = ?', [id], (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
}

export default new ItemModel();
