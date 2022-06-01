import { ButtonHTMLAttributes, FC, memo } from 'react';
import { CustomButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<ButtonProps> = ({ label, ...buttonProps }) => {
  return <CustomButton {...buttonProps}>{label}</CustomButton>;
};

export default memo(Button);
