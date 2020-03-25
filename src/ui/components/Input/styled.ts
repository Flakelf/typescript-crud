import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 20px 0 23px 0;
  margin: 0 0 20px 0;

  font-size: ${(p): string => p.theme.fontSizes.small};
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  width: 100%;

  bottom: 30px;
  left: 10px;

  pointer-events: none;

  transition: 0.2s ease-in-out;
  transition-property: color, bottom;

  font-size: ${(p): string => p.theme.fontSizes.medium};
`;

export const InputControl = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  box-shadow: none;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:focus {
    border: 3px solid ${(p): string => p.theme.color.violet};
    border-radius: 10px;
  }

  &:focus + label,
  &:not([value='']) + label {
    bottom: 60px;
  }
`;

export const Hint = styled.div`
  position: absolute;
  margin-top: 8px;
  width: 100%;
  color: red;

  font-size: ${(p): string => p.theme.fontSizes.extraSmall};
`;
