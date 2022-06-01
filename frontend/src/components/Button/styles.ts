import styled from 'styled-components';

export const CustomButton = styled.button`
  height: 40px;
  background-color: lightblue;
  color: #282a35;
  border: none;
  border-radius: 4px;
  transition: 0.3s;
  margin-top: 8px;

  &:hover {
    cursor: pointer;
    background-color: rgb(138, 184, 199);
  }

  &:disabled {
    opacity: 0.3;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;
