import styled from 'styled-components';

export const Wrapper = styled.button`
  cursor: pointer;
  background: transparent;

  width: 24px;
  height: 24px;

  :hover {
    border: 1px solid grey;
  }

  svg {
    margin: 4px;
  }
`;
