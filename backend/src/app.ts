import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import itemsRouter from './routes/items';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRouter);

// Middleware de erro global
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno do servidor' });
});

export default app;
