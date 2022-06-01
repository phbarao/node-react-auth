import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: 'Missing authentication token.',
    });
  }

  const token = authToken.replace('Bearer', '').trim();

  try {
    verify(token, process.env.APP_SECRET);

    return next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid token.',
    });
  }
}
