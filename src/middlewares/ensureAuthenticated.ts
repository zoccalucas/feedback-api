import { NextFunction, Request, Response } from "express";

import { IPayload } from "../interfaces/IPayload";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "71a8f724a55f84e4ed63fbb19ab04b5f"
    ) as IPayload;

    request.user_id = sub;
  } catch {
    return response.status(401).end();
  }

  return next();
}
