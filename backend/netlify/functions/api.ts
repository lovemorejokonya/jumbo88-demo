// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Request, Response, Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req: Request, res: Response) => res.json({ message: "Hello World!" }));

api.use("/api/", router);

export const handler = serverless(api);