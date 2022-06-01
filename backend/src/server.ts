import 'express-async-errors';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use((error: Error, _: Request, response: Response, next: NextFunction) => {
  return response.status(500).json({
    status: 'Error',
    message: error.message,
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
