import 'express-async-errors';
import express, { type ErrorRequestHandler } from 'express';
import cors from 'cors';
import itemsRouter from './routes/items';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRouter);

// Middleware de erro global
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
};

app.use(errorHandler);

export default app;
