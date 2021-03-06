import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Layout: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export { Layout };
