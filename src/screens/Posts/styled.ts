import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1200px;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 0.9;
  flex-direction: column;

  overflow: hidden;

  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: ${(p): string => p.theme.fontSizes.huge};
`;

export const ActionsCell = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
