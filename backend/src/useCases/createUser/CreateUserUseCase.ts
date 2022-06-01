import { hash } from 'bcryptjs';
import { client } from '../../prisma/client';

interface IUserRequest {
  fullName: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ fullName, email, password }: IUserRequest) {
    // Verificar se user existe
    const userAlreadyExists = await client.user.findFirst({
      where: {
        email,
      },
    });

    // Se já existir, lança um erro;
    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    // Se não existir, cadastra o novo user;
    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        fullName,
        email,
        password: passwordHash,
      },
    });

    return user;
  }
}

export { CreateUserUseCase };
