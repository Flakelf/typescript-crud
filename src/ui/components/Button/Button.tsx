import React from 'react';

import Loader from 'react-loader-spinner';

import { Wrapper, Control } from './styled';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, isLoading, ...props }): JSX.Element => (
  <Wrapper>
    <Control {...props}>
      {isLoading ? <Loader width={20} height={20} type='Oval' color='black' /> : children}
    </Control>
  </Wrapper>
);

export { Button };
