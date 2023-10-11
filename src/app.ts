import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './router/router';
import { createServer } from 'http';
import errorHandler, { notfoundandler } from './middleware/errorHandler';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
    res.status(200)
        .send(
            {
                success: true,
                message: 'Travel Good Server Is Running'
            }
        )
});

app.use('/api/v1', router);

app.use(notfoundandler);
app.use(errorHandler);

const server = createServer(app)

export default server;