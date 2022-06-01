import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { NavContainer } from './styles';

const StyledNav: FC = () => {
  return (
    <NavContainer>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={(isActive) => (isActive ? 'activeMenu' : '')}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={(isActive) => (isActive ? 'activeMenu' : '')}
            >
              Contact
            </NavLink>
            <NavLink
              to="/api"
              className={(isActive) => (isActive ? 'activeMenu' : '')}
            >
              Api
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
};

export default StyledNav;
