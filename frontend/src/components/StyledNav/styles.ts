import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  .activeMenu {
    color: orange;
  }
`;
