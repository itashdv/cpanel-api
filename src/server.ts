import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send("Hello from Marsa!!");
});

app.listen(4000, () => console.log('Server listening at port 4000..'));