import { FC } from 'react';

import { Container } from './styles';

const MainContainer: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
