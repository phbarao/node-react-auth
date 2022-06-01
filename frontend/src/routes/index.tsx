import { FC } from 'react';
import { Switch } from 'react-router-dom';
import About from '../pages/About';
import Api from '../pages/Api';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';
import Route from './Route';

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route isPrivate path="/about" component={About} />
    <Route isPrivate path="/contact" component={Contact} />
    <Route isPrivate path="/api" component={Api} />
  </Switch>
);

export default Routes;
