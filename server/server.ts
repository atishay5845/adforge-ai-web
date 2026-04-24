import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerk";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.post('/api/clerk',express.raw({ type: 'application/json' }), clerkWebhooks);


app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});