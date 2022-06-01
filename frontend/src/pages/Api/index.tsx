import { FC, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import MainContainer from '../../components/MainContainer';
import StyledNav from '../../components/StyledNav';
import api from '../../services/api';

interface UserPayload {
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

const APP_NAME = import.meta.env.VITE_APP_NAME;

const Api: FC = () => {
  const decodedToken: UserPayload = jwt_decode(
    localStorage.getItem(`@${APP_NAME}:token`) as string
  );

  const firstName = decodedToken.user.fullName.split(' ')[0];

  useEffect(() => {
    (async () => {
      try {
        await api.get('privateRoute');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <StyledNav />
      <MainContainer>
        <h1>Olá, {firstName}!</h1>
      </MainContainer>
    </>
  );
};

export default Api;
