import React from 'react';
import { FieldInputProps } from 'formik';

import { Wrapper, Label, InputControl, Hint } from './styled';

interface IInputProps {
  label: string;
  required?: boolean;
  error?: string;
  type: string;
  disabled: boolean;
  field: FieldInputProps<string>;
}

const Input: React.FC<IInputProps> = ({
  field,
  label,
  required,
  error,
  type,
  disabled,
}: IInputProps): JSX.Element => (
  <Wrapper>
    <InputControl {...field} type={type} autoComplete='off' disabled={disabled} />

    <Label>{required ? `${label} *` : label}</Label>

    {error && <Hint>{error}</Hint>}
  </Wrapper>
);

export { Input };
