import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Control = styled.button`
  position: relative;
  width: 160px;
  height: 42px;
  border-radius: 20px;
  padding: 8px 16px;

  text-align: center;
  color: white;
  background: #2c6e31;

  :hover {
    background: #26ad30;
  }

  font-weight: bold;

  ${(p): string => p.theme.text.brandFont};

  :disabled {
    background: grey;
  }
`;
