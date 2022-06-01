import { createContext, useCallback, useState, useContext, FC } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const APP_NAME = import.meta.env.VITE_APP_NAME;

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(`@${APP_NAME}:token`);

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('login', {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem(`@${APP_NAME}:token`, token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setData({ token });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(`@${APP_NAME}:token`);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { AuthProvider, useAuth };
