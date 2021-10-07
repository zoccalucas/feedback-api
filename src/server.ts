import "reflect-metadata";
import "express-async-errors";
import "./database";

import express, { NextFunction, Request, Response } from "express";

import { router } from "./routes";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
