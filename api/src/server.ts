import express from 'express';
import userRouter from './routes/user.route.ts';

const server = express();

server.use(express.json());

server.use('/users', userRouter);

server.use(express.static('/workspaces/Corcoiote/web'));

server.listen(3000);
