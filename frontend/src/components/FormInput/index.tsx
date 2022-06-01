import { FC, InputHTMLAttributes, LegacyRef } from 'react';
import { FieldError } from 'react-hook-form';
import { CustomInput } from './styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: LegacyRef<HTMLInputElement> | undefined;
  placeholder: string;
  error: FieldError | undefined;
}

const FormInput: FC<FormInputProps> = ({ register, error, ...inputProps }) => {
  console.log(error);
  return (
    <CustomInput>
      <input
        autoComplete="off"
        className="customInput"
        ref={register}
        {...inputProps}
      />
      {error && <p style={{ color: 'white' }}>{error.message}</p>}
    </CustomInput>
  );
};

export default FormInput;
