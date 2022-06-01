import { Request, Response } from 'express';
import { VerifyTokenUserUseCase } from './VerifyTokenUserUseCase';

class VerifyTokenUserController {
  async handle(request: Request, response: Response) {
    const { userToken } = request.body;

    const verifyTokenUserUseCase = new VerifyTokenUserUseCase();

    const token = await verifyTokenUserUseCase.execute({
      userToken,
    });

    return response.json(token);
  }
}

export { VerifyTokenUserController };
