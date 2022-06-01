import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import MainContainer from '../../components/MainContainer';
import { useAuth } from '../../hooks/auth';
import { SignInForm } from './styles';

interface User {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();
  const { signIn } = useAuth();
  const history = useHistory();

  const onSubmit = useCallback(
    async (data: User) => {
      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/about');
    },
    [signIn]
  );

  return (
    <MainContainer>
      <h1>SignIn</h1>

      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          name="email"
          placeholder="E-mail"
          register={register({ required: 'Digite um e-mail válido' })}
          error={errors.email}
        />

        <FormInput
          type="password"
          name="password"
          placeholder="Senha"
          register={register({ required: 'Digite uma senha' })}
          error={errors.password}
        />

        <Button type="submit" label="Entrar" />
      </SignInForm>
    </MainContainer>
  );
};

export default SignIn;
