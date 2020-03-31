import React from 'react';
import { FieldProps } from 'formik';
import Select, { OptionsType, ValueType } from 'react-select';

import { Wrapper } from './styled';

interface IOption {
  value: string;
  label: string;
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<IOption>;
  disabled: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, field, form, disabled }) => (
  <Wrapper>
    <Select
      defaultValue={options.find((option): boolean => option.value === field.value)}
      isDisabled={disabled}
      name={field.name}
      options={options}
      onBlur={field.onBlur}
      onChange={(option: ValueType<IOption>): void =>
        form.setFieldValue(field.name, (option as IOption).value)
      }
    />
  </Wrapper>
);

export { CustomSelect };
