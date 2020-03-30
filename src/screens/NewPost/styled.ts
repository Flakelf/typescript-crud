import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 0.9;
  border-radius: 20px;

  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${(p): string => p.theme.fontSizes.huge};
`;
