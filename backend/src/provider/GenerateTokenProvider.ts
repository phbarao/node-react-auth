import { sign } from 'jsonwebtoken';

interface User {
  id: string;
  fullName: string;
  email: string;
}

class GenerateTokenProvider {
  async execute(user: User) {
    const token = sign({ user }, process.env.APP_SECRET, {
      expiresIn: '5m',
    });

    return token;
  }
}

export { GenerateTokenProvider };
