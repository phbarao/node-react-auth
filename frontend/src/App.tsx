import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
