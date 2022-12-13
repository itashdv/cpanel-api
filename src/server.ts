import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

dotenv.config();

const DB_URL = process.env.DB_URL!;

const PORT = process.env.PORT;

const startServer = async () => {
  mongoose.set('strictQuery', false);

  await mongoose.connect(DB_URL);

  const app: Express = express();

  app.use(express.static('public'));

  app.listen(PORT, () => console.log(`Server listening at port ${PORT}..`));
};

startServer();
