import React from 'react';

import { Wrapper } from './styled';

interface IIconWrapperProps {
  children?: React.ReactNode;
  onClick: () => void;
}

const IconWrapper: React.FC<IIconWrapperProps> = ({ children, ...props }): JSX.Element => (
  <Wrapper {...props}>{children}</Wrapper>
);

export { IconWrapper };
