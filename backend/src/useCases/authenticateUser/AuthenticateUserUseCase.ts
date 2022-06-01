import { compare } from 'bcryptjs';
import { client } from '../../prisma/client';
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IRequest) {
    // Verificar se user existe;
    const user = await client.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error('Wrong user/password combination.');
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Wrong user/password combination.');
    }

    delete user.password;

    // Gerar accesToken JWT
    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(user);

    return { token };
  }
}

export { AuthenticateUserUseCase };
