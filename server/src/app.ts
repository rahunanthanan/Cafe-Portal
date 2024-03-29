import express from 'express';
import cors from 'cors';

import { cafeRouter } from './routes/cafeRouter';
import { employeeRouter } from './routes/employeeRouter';

const app = express();

app.use(cors());
app.use(express.json());

// TODO: add inversify-express-utils
app.use('/cafes', cafeRouter);
app.use('/employees', employeeRouter);

export { app };
