import { verify } from 'jsonwebtoken';

interface IRequest {
  userToken: string;
}

class VerifyTokenUserUseCase {
  async execute({ userToken }: IRequest) {
    try {
      verify(userToken, process.env.APP_SECRET);

      return { isValid: true };
    } catch (error) {
      throw new Error('Invalid JWT token');
    }
  }
}

export { VerifyTokenUserUseCase };
