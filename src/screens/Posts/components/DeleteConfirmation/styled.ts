import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  height: 300px;
  display: block;
  background: white;
  border-radius: 16px;
  border: 1px solid black;
  color: black;
`;

export const Title = styled.h1`
  border-bottom: 1px solid black;
  height: 40px;
  width: 100%;
  padding: 0 0 0 20px;

  font-size: ${(p): string => p.theme.fontSizes.large};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 38px 0 0 0;
  height: 100px;
`;

export const Text = styled.h1``;

export const Footer = styled.div`
  height: 40px;
  display: flex;
  margin: 34px 20px 0 0;

  div:first-child {
    margin-left: auto;
  }

  div:last-child {
    padding: 0 0 0 14px;
  }
`;
