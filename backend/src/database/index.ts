import sqlite3 from 'sqlite3';
import { resolve } from 'node:path';

const dbPath = resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite');
        createTables();
    }
});

function createTables() {
    db.run(
        `
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `,
        (err) => {
            if (err) {
                console.error('Erro ao criar tabela:', err.message);
            } else {
                console.log('Tabela items criada ou já existente');
            }
        }
    );
}

export default db;
